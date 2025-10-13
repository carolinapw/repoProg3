import React, { Component } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0 
        }
    }
    
    incrementar(){
        this.setState(c =>({
            count: c.count + 1
        }))
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>Cantidad de clicks: {this.state.count}</Text>
                <Pressable style={styles.boton} onPress={()=>this.incrementar()}>
                    <Text style={styles.text2}>Click aquí para contar</Text>
                </Pressable>
            </View>
    );
    }
    
}
   
const styles = StyleSheet.create({
    container: {
        marginTop: 7,
        marginVertical:5
    },
    text1: {
        textAlign: 'center'
    },
    text2:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
    boton: {
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        marginBottom: 10,
        borderRadius: 4
    }
        
})

export default Contador