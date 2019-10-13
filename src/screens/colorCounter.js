import React, { Component } from "react"
import { View, Button, StyleSheet, Text } from "react-native"

const ColorCounter = ({ color, increaseColor, decreaseColor }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}
                    onPress = {increaseColor}/>
            <Button title={`Decrease ${color}`}
                     onPress = {decreaseColor}/>
        </View>
    );
}

export default ColorCounter;