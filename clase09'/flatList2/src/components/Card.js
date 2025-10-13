import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

function Card(props) {
    const product = props.product;
        return (
            <View style={styles.card}>
                <Image style={styles.img} source={{ uri: product.image }} resizeMode= "contain"/>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.text}>Categoría: {product.category}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.text}>{product.description}</Text>
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
