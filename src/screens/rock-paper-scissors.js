import React, { useState } from "react"
import { View, StyleSheet, Button, Text } from "react-native"
import ImageDetail from "../components/ImageDetail"

const stuff = Object.freeze({
    Rock: 0,
    Paper: 1,
    Scissors: 2,
    Unk: 3,
});

const state = {
    Win: "win",
    Lose: "lose",
    Tie: "tie",
    Unk: "unk",
};

const RockPaperScissors = () => {

    const [playerState, setPlayerState] = useState(state.Unk);

    const playButtonPressed = () => {
        var stuffSize = Object.keys(stuff).length;
        //get result player
        var playResult = Math.floor(Math.random() * stuffSize);
        console.log(playResult);

        //get result computer
        var computerResult = Math.floor(Math.random() * stuffSize);
        console.log(computerResult);

        //compare and output
        if (playResult - computerResult == 0) {
            console.log("Tie");
        } else if (playResult == stuff.Rock) {
            if (computerResult == stuff.Paper) {
                setPlayerState(state.Lose);
            } else {
                setPlayerState(state.Win);
            }
        } else if (playResult == stuff.Paper) {
            if (computerResult == stuff.Rock) {
                setPlayerState(state.Win);
            } else {
                setPlayerState(state.Lose);
            }
        }
        else { //Scissors
            if (computerResult == stuff.Rock) {
                setPlayerState(state.Lose);
            } else {
                setPlayerState(state.Win);
            }
        }

    }

     displayResult = () => {

        const winMessage = <Text>You win!</Text>;
        const loseMessage = <Text>You lose, let try again!</Text>;
        const tieMessage = <Text>Tie!</Text>;
        const unkMessage = <Text>watting...</Text>

        let message;
        if (playerState == state.Win)
            message = winMessage;
        else if (playerState == state.Lose)
            message = loseMessage;
        else if (playerState == state.Tie)
            message = tieMessage;
        else
            message = unkMessage;
        return (
            <View>
                {message}
            </View>
        );
    }

    return (
        <View>
            <ImageDetail source={require("../../assets/landscape/field.jpg")}
                title={" You"}
                style={style.playerStyle}
            >
            </ImageDetail>

            <Button title={"Play"}
                onPress={playButtonPressed}
            />

           {displayResult}

        </View>
    );



}

const style = StyleSheet.create({
    playerStyle: {
        width: 300,
        height: 300
    }
});

export default RockPaperScissors;