import React, { useEffect, useState } from 'react';
import { View, Text } from "../../components/Themed";

interface ServerStatus {
    url: string;
    isOnline: boolean | null;
}

export default function Status() {
    const [serverStatus, setServerStatus] = useState<ServerStatus[]>([
        { url: 'https://www.google.com', isOnline: null },
        { url: 'https://www.facebook.com', isOnline: null },
        { url: 'https://www.twitter.com', isOnline: null },
        { url: 'https://www.instagram.com', isOnline: null }
    ]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkServerStatus = async () => {
            for (let i = 0; i < serverStatus.length; i++) {
                try {
                    const response = await fetch(serverStatus[i].url, {
                        method: 'HEAD', // HEAD request is like GET but doesn't download the body content
                        mode: 'no-cors' // This might be needed if the server doesn't respond with proper CORS headers
                    });
                    setServerStatus(prevStatus => {
                        const newStatus = [...prevStatus];
                        newStatus[i].isOnline = true;
                        return newStatus;
                    });
                } catch (error) {
                    console.error(error);
                    setServerStatus(prevStatus => {
                        const newStatus = [...prevStatus];
                        newStatus[i].isOnline = false;
                        return newStatus;
                    });
                }
            }
            setIsLoading(false);
        };

        checkServerStatus();
    }, []);

    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            {serverStatus.map((status) => (
                <View key={status.url}>
                    <Text>{status.url}</Text>
                    <Text>{status.isOnline ? 'Online' : 'Offline'}</Text>
                </View>
            ))}
        </View>
    );
}