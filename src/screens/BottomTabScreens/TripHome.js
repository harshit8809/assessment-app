import { FlatList, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Appbar, Button, Card } from 'react-native-paper'
import { cardDataOne } from '../../dummyData/dummyData'
import { useNavigation } from '@react-navigation/native'

const TripHome = () => {

    const navigation = useNavigation()


    return (
        <>
            <Appbar.Header style={{ backgroundColor: "#f4f4f4" }}>
                <Appbar.Content title="Home" />
                {/* <Appbar.Action icon="magnify"
                /> */}
            </Appbar.Header>

            <View style={styles.mainContainer}>

                <FlatList
                    data={cardDataOne}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) => {
                        // console.log("flatList",item)
                        return (
                            <Pressable onPress={() => navigation.navigate('TripHomeDetails', item)}>
                                <Card style={{ marginBottom: "6%" }}

                                >

                                    <Card.Cover source={{ uri: item.image }}

                                    />
                                    <Card.Title title={item.title}
                                        subtitle={item.description}
                                    />
                                    {/* <Card.Content>
                                    <Text variant="titleLarge">{item.title}</Text>
                                    <Text variant="bodyMedium">{item.description}</Text>
                                </Card.Content> */}
                                </Card>
                            </Pressable>
                        )
                    }}

                />



            </View>



        </>
    )
}

export default TripHome

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        // margin: "5%",
        // width: "70%",
        // height: "20%",
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingTop: "2%",
        paddingBottom: "2%",


        // flexDirection: "row",
        // backgroundColor: "red"
    }

})