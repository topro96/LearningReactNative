import React from "react"
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail"
import { ScrollView } from "react-native-gesture-handler";

const ImageScreen = (props) => {
    return (
        <View>
            <ScrollView>
            <ImageDetail source={require("../../assets/landscape/field.jpg")}
                         title= {"Field"}
                         style = {style.imageStyle}>
            </ImageDetail>

            <ImageDetail source={require("../../assets/landscape/lake.jpg")}
                         title= {"Lake"}
                         style = {style.imageStyle}>
            </ImageDetail>

            <ImageDetail source={require("../../assets/landscape/road.jpg")}
                         title= {"Road"}
                         style = {style.imageStyle}>
            </ImageDetail>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({

    imageStyle : {
        width : 200,
        height : 250
    }

});

export default ImageScreen;