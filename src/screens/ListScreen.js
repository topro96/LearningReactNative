import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {

    const friends  = [
        {name : 'Tom Bui', age : 23},
        {name : 'David Villa', age : 37},
        {name : 'Messi', age : 32},
        {name : 'Ronando', age : 34}
    ]

    return (
        <FlatList
            horizontal
            //showsHorizontalScrollIndicator = {false}
            keyExtractor = { friend => friend.name}
            data = {friends} 
            renderItem = {({item}) =>{
               return (
                   <View>
                       <Text> Name : {item.name} </Text>
                       <Text> Age : {item.age} </Text>
                   </View>
               ); 
            } }
        />

    );

}

const list_style = StyleSheet.create({

    styleSheet: {
        marginHorizontal : 60,
        marginVertical : 30,
        fontSize: 10
    }


});

export default ListScreen;

