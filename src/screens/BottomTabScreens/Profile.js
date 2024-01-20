import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation()

    return (
        <>
            <Appbar.Header style={{ backgroundColor: "#f4f4f4" }}>
                <Appbar.Content title="User Profile" />
            </Appbar.Header>

            <View style={styles.avtarView}>
                <Avatar.Image
                    size={120}
                    source={require('../../../assets/icon/avatartwo.jpg')} />
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Mr. Random</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <TouchableOpacity style={{ width: "30%", marginBottom: "10%" }}
                    onPress={() => { navigation.navigate("Login") }}
                >
                    <Button
                        icon="logout" mode="text"
                    >
                        <Text style={{ fontSize: 20 }}>Logout</Text>
                    </Button>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({

    avtarView: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

        // backgroundColor: '#a3c8f1',
        height: "30%"
    }

})