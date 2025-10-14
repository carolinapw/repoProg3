import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

function Card(props) {
    const c = props.character;
        return (
            <View style={styles.card}>
                <Image style={styles.img} source={{ uri: c.image }} resizeMode= "contain"/>
                <Text style={styles.title}>{c.name}</Text>
                <Text style={styles.text}>Categoría: {c.species}</Text>
                <Text style={styles.text}>Gender: {c.gender}</Text>
            </View>
        )
    
}

const styles = StyleSheet.create({
  card: { padding: 12, gap: 8, backgroundColor: "#fff" },
  img: { width: "100%", height: 200, backgroundColor: "#eee", borderRadius: 8 },
  text: { color: '#444' },
  title: { fontSize: 16, fontWeight: 600 },
  price: { fontWeight: 700, marginTop: 5 },
  
})

export default Card;
