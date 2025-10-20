import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

class DynamicForm extends Component {
  state = { comment: "" };

  onSubmit() {
    console.log("Comentar submit:", this.state.comment);
  };

  render() {

    return (
      <View style={styles.card}>
        
        <Text style={styles.p}>Nuevo comentario</Text>

        <TextInput
          style={styles.field}
          placeholder="Escribí tu comentario…"
          value={this.state.comment}
          onChangeText={(text) => this.setState({ comment: text })}
        />

        <Pressable style={styles.btnBlue} onPress={() => this.onSubmit()}>
          <Text style={styles.btnTxt}>Enviar</Text>
        </Pressable>

        <View style={styles.liveBox}>
          <Text style={styles.liveTitle}>Vista previa</Text>
          <Text>{this.state.comment}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{ 
    backgroundColor:"#f2f2f2", 
    borderRadius:12, 
    gap:12 },
  title:{ 
    fontSize:22, 
    fontWeight:"800" },
  field:{
    backgroundColor:"#fff", 
    borderRadius:10, 
    paddingHorizontal:12, 
    paddingVertical:10,
    borderWidth:1, 
    borderColor:"#ddd", 
    minHeight:10, 
    textAlignVertical:"top"
  },
  btnBlue:{ 
    backgroundColor:"#77b3e1", 
    paddingVertical:12, 
    borderRadius:10, 
    alignItems:"center"},
  btnTxt:{ 
    color:"#000", 
    fontWeight:"600" },
  liveBox:{ 
    backgroundColor:"#fff", 
    borderRadius:10, 
    padding:10, 
    gap:4, 
    borderWidth:1, 
    borderColor:"#e6e6e6" },
  liveTitle:{ 
    fontWeight:"700", 
    marginBottom:4 },
});

export default DynamicForm
