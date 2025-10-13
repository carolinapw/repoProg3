import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-web';

function Card() {

        return (
            <View>
                <Image source={{ uri: item.image }}/>
                <Text>{item.title}</Text>
                <Text>Categoría: {item.category}</Text>
                <Text>${item.price}</Text>
                <Text>{item.description}</Text>
            </View>
        )
    
}

export default Card;
