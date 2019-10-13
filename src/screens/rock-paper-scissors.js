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

    const [[playerChoice, computerChoice, playerState], set] = useState([stuff.Unk, stuff.Unk, state.Unk]);

    const playButtonPressed = () => {
        console.log("player pressed!");
        var stuffSize = Object.keys(stuff).length;
        //get result player
        let player = Math.floor(Math.random() * (stuffSize - 1));
        //get result computer
        let computer = Math.floor(Math.random() * (stuffSize - 1));
        let _state = state.Unk;

        console.log("Before: (Player: " + player + ", Computer: " + computer + ", State: " + _state + ")");

        //compare and output
        if (player - computer == 0) {
            _state = state.Tie;
        } else if (player == stuff.Rock) {
            if (computer == stuff.Paper) {
                _state = state.Lose;
            } else {
                _state = state.Win;
            }
        } else if (player == stuff.Paper) {
            if (computer == stuff.Rock) {
                _state = state.Win;
            } else {
                _state = state.Lose;
            }
        }
        else { //Scissors
            if (computer == stuff.Rock) {
                _state = state.Lose;
            } else {
                _state = state.Win;
            }
        }
        console.log("After: (Player: " + player + ", Computer: " + computer + ", State: " + _state + ")");
        set([player, computer, _state]);
    }

    var displayResult = () => {
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


    displayDecision = (style, title, choice) => {
        const rockImagePath = require("../../assets/rock-paper-scissors/RockLeft.png");
        const paperImagePath = require("../../assets/rock-paper-scissors/PaperLeft.png");
        const scissorsImagePath = require("../../assets/rock-paper-scissors/ScissorsLeft.png");
        const unkImagePath = require("../../assets/rock-paper-scissors/Scissors-paper-rock.jpg");

        let path;
        if (choice == stuff.Rock)
            path = rockImagePath;
        else if (choice == stuff.Paper)
            path = paperImagePath;
        else if (choice == stuff.Scissors)
            path = scissorsImagePath;
        else
            path = unkImagePath;
        return (
            <ImageDetail source={path}
                title={title}
                style={style}
            ></ImageDetail>
        );

    }

    return (
        <View>
            <View>
                {displayDecision(style.imageLeftStyle, "You", playerChoice)}

                {displayDecision(style.imageRightStyle, "Computer", computerChoice)}
            </View>

            <Button title={"Play"}
                onPress={playButtonPressed}
            />

            <View>
                {displayResult()}
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    playerStyle: {
        width: 100,
        height: 100
    },

    imageLeftStyle: {
        width: 100,
        height: 100,
        transform: [{ rotate: "0deg" }]
    },

    imageRightStyle: {
        width: 100,
        height: 100,
        transform: [{ rotate: "180deg" }]
    }
});

export default RockPaperScissors;