import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripHomeDetails from '../screens/BottomTabScreens/TripHomeDetails';
import ApiDataDetails from '../screens/BottomTabScreens/ApiDataDetails';

const AppRoute = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={LoginScreen} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={Home} 
                        options={{headerShown: false}}

            />
            <Stack.Screen name="TripHomeDetails" component={TripHomeDetails} 
                        options={{headerShown: false}}

            />
            <Stack.Screen name="ApiDataDetails" component={ApiDataDetails} 
                        options={{headerShown: false}}

            />
        </Stack.Navigator>
    </NavigationContainer>

    // <LoginScreen/>
  )
}

export default AppRoute

const styles = StyleSheet.create({})