import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ApiDataDetails = ({route}) => {
  const navigation = useNavigation()


    const images = route?.params?.images

    console.log("--->>>>",route?.params)

  return (
    <>

<Appbar.Header>
    <Appbar.BackAction onPress={() =>navigation.goBack()} />
    <Appbar.Content title={route?.params?.title} />
  </Appbar.Header>

    <View>
      <Text>ApiDataDetails</Text>
      <FlatList
      data={images}

      renderItem={({item})=>(

        <Card style={{margin: "3%"}}>
    <Card.Cover source={{ uri: item }} />
  </Card>


        // <Image source={{uri: item}} style={{width: 100, height: 100}} />
      )}
      />

      {/* <Image */}
    </View>
    </>
  )
}

export default ApiDataDetails

const styles = StyleSheet.create({})