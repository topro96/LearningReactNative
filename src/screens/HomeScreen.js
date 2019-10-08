import React from 'react';
import { Button, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {

  return (
    <View>
      <Button title="Go to List Screen" onPress={() => { props.navigation.navigate("List") }} />
      <Button title="Go to Components Screen" onPress={() => { props.navigation.navigate("Components") }} />
      <Button title="Go to Image Screen" onPress={() => { props.navigation.navigate("Image") }} />
      <Button title="Play rock-paper-scissors game" onPress={() => { props.navigation.navigate("RPS") }} />


      <TouchableOpacity onPress = {() => {console.log("Something pressed!")}}>
        <Text> Press me for fun </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
