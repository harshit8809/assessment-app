import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Appbar, Card, Divider } from 'react-native-paper'

const TripHomeDetails = ({route}) => {


    const navigation = useNavigation()
    const paramsData = route?.params


    console.log("TripHomeDetails", route)

  return (
    <>
    <Appbar.Header>
    <Appbar.BackAction onPress={() =>navigation.goBack()} />
    <Appbar.Content title={paramsData?.title} />
  </Appbar.Header>

  <Card style={{margin: "3%"}}>
    <Card.Cover source={{ uri: route.params.image }} />
  </Card>

  <Card style={{margin: "3%"}}>
    <Card.Content>
      <Text variant="titleLarge" style={{fontSize: 20, fontWeight: "500"}}>{paramsData?.title}</Text>
      <Divider style={{marginTop: "2%"}}/>

      <Text variant="bodyMedium">{paramsData?.description}</Text>
    </Card.Content>
  </Card>

  </>

  )
}

export default TripHomeDetails

const styles = StyleSheet.create({})