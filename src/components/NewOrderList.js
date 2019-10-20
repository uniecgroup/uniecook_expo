import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5',
      title: '4378',
      name: 'Hugh P.',
      time: '11:43am',
      price: '$29.95',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa',
      title: '4377',
      name: 'Bernadette M.',
      time: '12:43am',
      price: '$19.95',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455d72',
      title: '4376',
      name: 'Shannah C.',
      time: '1:43pm',
      price: '$129.95',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1e29d72',
      title: '4375',
      name: 'Tara G.',
      time: '7:43pm',
      price: '$60.35',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145572',
      title: '4374',
      name: 'Christy P.',
      time: '8:43pm',
      price: '$36.44',
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72',
      title: '4373',
      name: 'Randy I.',
      time: '1:43pm',
      price: '$12.33',
    },
    {
      id: '58694a0f-3da1-145571e29d72',
      title: '4372',
      name: 'Brittany F.',
      time: '9:43pm',
      price: '$15.98',
    },
    {
      id: '58694a0f-3da1-4f-bd96-145571e29d72',
      title: '4371',
      name: 'Luciana A.',
      time: '3:43pm',
      price: '$41.74',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1451e29d72',
      title: '4370',
      name: 'Bevin W.',
      time: '6:43pm',
      price: '$36.65',
    },
    {
      id: '584a0f-3da1-471f-bd96-145571e29d72',
      title: '4369',
      name: 'Laura R.',
      time: '2:43pm',
      price: '$9.95',
    },
    {
      id: '58694a0f-471f-bd96-145571e29d72',
      title: '4368',
      name: 'Rai S.',
      time: '2:43pm',
      price: '$29.95',
    },
];

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}
  

export default class NewOrderList extends React.Component{
  render(){
    return (
        
        <SafeAreaView style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>New Orders</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={()=>{
                  this.props.navigation.navigate('NewOrderDetailsPage');
              }}>
                <Text style={styles.listId}>{item.title}</Text>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listPrice}>{item.price}</Text>
                <Text style={styles.listTime}>{item.time}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    item: {
      backgroundColor: '#ffffff',
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
      marginLeft: 80,
      marginRight: 80,
      flex: 1,
      flexDirection: 'row',
    },
    listId:{
      flex: 1,
    },
    listName:{
      flex: 5,
      fontWeight: 'bold',
    },
    listPrice: {
      flex: 1,
    },
    listTime:{
      flex: 1,
      textAlign: 'right',
    },
    title: {
      fontSize: 14,
    },
    heading: {
      paddingBottom: 15,
      marginTop: 10,
      marginLeft: 80,
    },
    headingText: {
      fontSize: 14,
      fontWeight: '200',
      color: 'white',
    },
});