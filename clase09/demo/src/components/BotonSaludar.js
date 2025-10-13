import React, { Component } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

class BotonSaludar extends Component {
    
    saludar(){
        console.log("Me clickearon");
        
    }
    
    render(){
        return(
            <Pressable style={styles.boton} onPress={()=>this.saludar()}>
                <Text style={styles.text}>Clickeame</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'silver',
        padding: 4,
        borderRadius: 4
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default BotonSaludar