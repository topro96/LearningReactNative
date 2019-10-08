import React from 'react'
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {

    const text2 = 'Tom Bui';

    return (
    
        <View>
            <Text style = {text1_style.textStyle1} > Getting started with React-Native </Text>
            <Text style = {text1_style.textStyle2}> My name is {text2}  </Text>
        </View> 
    
    );
}

const text1_style = StyleSheet.create({
        textStyle1: {
            fontSize: 45
        },

        textStyle2: {
            fontSize: 20
        }
});

export default ComponentsScreen;
