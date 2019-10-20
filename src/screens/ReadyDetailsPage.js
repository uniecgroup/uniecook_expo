import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReadyDetailsPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.homeText}>Ready Details Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    homeText: {
        fontSize: 24,
    }
});