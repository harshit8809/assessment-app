


import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {


    const [username, setUsername] = useState('random');
    const [password, setPassword] = useState('Random@123');

    const [showText, setShowText]= useState(true)

    const navigation = useNavigation()

    const handleLogin = () => {

        if(username === "random" && password === "Random@123"){
            navigation.navigate("Home")
        }else{
            Alert.alert("Credential wrong")
        }

      };

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.loginView}>

                
                <View style={{ padding: "8%", borderRadius: 10 }}>
                    <Text style={{ fontSize: 30 }}>Login</Text>
                </View>

            </View>
            <View style={styles.welcomView}>
                <Text style={{ fontSize: 20, fontWeight: "800", bottom: 10 }}>Welcome</Text>
            </View>

            <View style={styles.textInputView}>
                <TextInput
                    mode="outlined"
                    label="email/username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />



                <TextInput
                    style={{ marginTop: "5%" }}
                    mode="outlined"
                    label="Password"
                    value={password}
                    secureTextEntry={showText}
                    onChangeText={(text) => setPassword(text)}
                    right={<TextInput.Icon icon="eye"
                    onPress={()=>setShowText(!showText)}
                    />}
                />

                <Button style={{ marginTop: "10%", padding: "2%" }} icon="login" mode="contained" onPress={handleLogin}>
                    <Text style={{ fontSize: 20 }}>Login</Text>
                </Button>


            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    loginView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputView: {
        flex: 2.5,
        padding: "5%"
    }

})