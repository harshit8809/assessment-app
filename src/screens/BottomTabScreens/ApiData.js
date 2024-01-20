import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Appbar, Card, Divider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slices/fetchApi';
import { useNavigation } from '@react-navigation/native';

const ApiData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const feature = useSelector((state) => state.getApi?.data?.products);

  console.log("feature",feature);


  useEffect(() => {
    dispatch(fetchData())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, [dispatch]);

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#f4f4f4" }}>
        <Appbar.Content title="Api Data" />
      </Appbar.Header>

      <Text>Products</Text>
     

      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={feature}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("ApiDataDetails", item)}>
              <Card style={{ margin: "2%" }}>
                <Card.Content>
                  <Text variant="titleLarge" style={{fontSize: 20, marginBottom: "3%"}}>{item.brand} -<Text> { item.title}</Text></Text>
                  <Text variant="bodyMedium">$-{item.price}</Text>
                  <Text variant="bodyMedium">Rating: {item.rating}</Text>
                </Card.Content>
              </Card>
            </Pressable>
          )}
        />
      )}
    </>
  );
};

export default ApiData;

const styles = StyleSheet.create({});
