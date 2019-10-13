import React from "react"
import { View, Image, StyleSheet, Text } from "react-native";



const ImageDetail = ({source , style,  title}) => {
    return (
        <View>
            <Image source = {source} style = {style}/>
            <Text> {title} </Text>
        </View>
    );
}

export default ImageDetail;