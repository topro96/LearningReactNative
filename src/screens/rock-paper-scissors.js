import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { ImageDetial } from "../components/ImageDetail"

const stuff = Object.freeze({
    Rock : "rock",
    Paper : "paper",
    Scissors : "scissors"
})

const RockPaperScissors = () => {

    const [result, setResult] = useState(stuff.Rock);

    return (
        <View>
            <ImageDetial source={require("../../assets/landscape/field.jpg")}
                title={"You"}
                style = {style.playerStyle}
            />
        </View>
    );

};

const style = StyleSheet.create({
    playerStyle: {
        width: 300,
        height: 300
    }


});

export default RockPaperScissors;