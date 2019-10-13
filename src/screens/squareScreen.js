import React, { Component, useReducer } from "react"
import { View } from "react-native"
import ColorCounter from "./colorCounter"

const reducer = (state, action) => {

    //state === {red: number, green: number, blue: number}
    //action === {colorChange: 'red' || 'green' || 'blue', amount: 15: -15}

    switch (action.colorToChange) {
        case "red":
            return { ...state, red: state.red + action.amount };
        case "green":
            return { ...state, green: state.green + action.amount };
        case "blue":
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }

};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const [red, green, blue] = state;
    const colorChangeValue = 15;

    return (
        <View>
            <ColorCounter
                color={"red"}
                increaseColor={() => dispatch({ colorToChange: "red", amount: colorChangeValue })}
                decreaseColor={() => dispatch({ colorToChange: "red", amount: -1 * colorChangeValue })}
            ></ColorCounter>

            <ColorCounter
                color={"green"}
                increaseColor={() => dispatch({ colorToChange: "green", amount: colorChangeValue })}
                decreaseColor={() => dispatch({ colorToChange: "green", amount: -1 * colorChangeValue })}
            ></ColorCounter>

            <ColorCounter
                color={"blue"}
                increaseColor={() => dispatch({ colorToChange: "blue", amount: colorChangeValue })}
                decreaseColor= {() => dispatch({ colorToChange: "blue", amount: -1 * colorChangeValue })}
            ></ColorCounter>

            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }} />

        </View>
    );
}

export default SquareScreen;