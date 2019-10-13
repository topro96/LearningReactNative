import React, { useState } from "react"
import { View, StyleSheet, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler";


const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const addColor = () => {
        setColors([...colors, randomRbg()])
    }

    return (
        <View>
            <Button title="Add a color"
                    onPress={addColor}/>
            <FlatList keyExtractor={(item)=> item}
                data={colors}
                renderItem={({item})=>{
                    return  <View style={ {height: 100, width: 100, backgroundColor: randomRbg()}} />;
                }}
            />

        

        </View>
    );

}

const randomRbg = () => {
    
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    console.log(`rgb(${red}, ${green}, ${blue})`);
    return `rgb(${red}, ${green}, ${blue})`;
}


export default ColorScreen;