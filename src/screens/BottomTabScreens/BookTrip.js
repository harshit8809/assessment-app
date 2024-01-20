import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const BookTrip = () => {
  return (
    <>
    <Appbar.Header style={{ backgroundColor: "#f4f4f4" }}>
    {/* <Appbar.BackAction onPress={() =>navigation.goBack()} /> */}
    <Appbar.Content title="Book trip" />
  </Appbar.Header>
  

  </>
  )
}

export default BookTrip

const styles = StyleSheet.create({})




