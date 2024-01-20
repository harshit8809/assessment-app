import { StyleSheet } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import AppRoute from './src/appRoute/AppRoute'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'


const App = () => {
  return (
    <Provider store={store}>
    <PaperProvider>
  <AppRoute/>
    </PaperProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

