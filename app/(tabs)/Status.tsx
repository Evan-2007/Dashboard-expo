import React, { useEffect, useState,  } from 'react';
import { 
    Text, 
    StyleSheet, 
    Pressable, 
    View, 
    SafeAreaView,
    ScrollView 
} from 'react-native';

interface ServerStatus {
    url: string;
    isOnline: boolean | null;
}

export default function Status() {  
    const [serverStatus, setServerStatus] = useState<ServerStatus[]>([
        { name: 'Google', url: 'https://www.google.com', isOnline: null },
        { name: 'Facebook', url: 'https://www.facebook.com', isOnline: null },
        { name: 'Twitter', url: 'https://www.twitter.com', isOnline: null },
        { name: 'Instagram', url: 'https://www.instagram.com', isOnline: null },
        { name: 'Google', url: 'https://www.google.com', isOnline: null },
        { name: 'Facebook', url: 'https://www.facebook.com', isOnline: null },
        { name: 'Twitter', url: 'https://www.twitter.com', isOnline: null },
        { name: 'Instagram', url: 'https://www.instagram.com', isOnline: null },
        { name: 'Google', url: 'https://www.google.com', isOnline: null },
        { name: 'Facebook', url: 'https://www.facebook.com', isOnline: null },
        { name: 'Twitter', url: 'https://www.twitter.com', isOnline: null },
        { name: 'Instagram', url: 'https://www.instagram.com', isOnline: null },
        { name: 'Google', url: 'https://www.google.com', isOnline: null },
        { name: 'Facebook', url: 'https://www.facebook.com', isOnline: null },
        { name: 'Twitter', url: 'https://www.twitter.com', isOnline: null },
        { name: 'Instagram', url: 'https://www.instagram.com', isOnline: null },
        { name: 'Google', url: 'https://www.google.com', isOnline: null },
        { name: 'Facebook', url: 'https://www.facebook.com', isOnline: null },
        { name: 'Twitter', url: 'https://www.twitter.com', isOnline: null },
        { name: 'Instagram', url: 'https://www.instagram.com', isOnline: null },
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
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {serverStatus.map((status) => (
                    <View  key={status.url} style={styles.map}>
                        <Text>{status.name}</Text>
                        <Text>{status.isOnline ? 'Online' : 'Offline'}</Text>
                        <View style={styles.divider}></View>
                    </View >
                ))}
            </ScrollView>
            <View style={styles.addcon}>
                <View style={styles.add}></View>
            </View>
        </SafeAreaView>
    );

}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#575757',
            display: 'flex',
            justifyContent: 'space-between',
            
        },
        add: {
            height: 75,
            width: 75,
            backgroundColor: 'gray',
            borderRadius: 10000,
            right: 0,
        },
        map: {
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',
            flexDirection: 'row',
            margin: 10,

        },
        addcon: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            margin: 10,
            backgroundColor: 'transparent',
        },
        divider: {
            height: 1,
            width: '100%',
            backgroundColor: '#000000',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
    });
