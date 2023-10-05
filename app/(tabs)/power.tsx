import { Redirect } from 'expo-router';
import { Text, StyleSheet, Pressable, View, } from 'react-native';
import { Link, Stack } from 'expo-router';



const onPress = console.log('yes')
const title = 'yes'
const pwrstatus = 'on'



    export default function power() {
        return( 
            <View style={styles.ViewMain}>
                <View style={styles.view}>
                    <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>On</Text>
                    </Pressable>
    
                    <Link href={'/Status'} style={styles.button} asChild>
                        <Pressable style={styles.button} onPress={onPress}>
                                <Text style={styles.text}>{pwrstatus}</Text>

                        </Pressable>
                    </Link>

    
                    <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>Off</Text>
                    </Pressable>
                </View>
            </View>
        )   
    }


const styles = StyleSheet.create({
    button: {
        width: 350,
        height: 75,
        backgroundColor: 'red',
        margin: 20,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ViewMain: {
        flex: 1,
    },
    view: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
    },


})