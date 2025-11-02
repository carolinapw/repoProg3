import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Post extends Component {
  render(){
    return (
      <View style={styles.row}>
        <Text style={styles.email}>{this.props.post.email}</Text>
        <Text style={styles.text}>{this.props.post.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    backgroundColor:"#fff", borderRadius:10, padding:16,
    borderWidth:1, borderColor:"#e6e6e6", marginVertical:8
  },
  email:{ fontWeight:"700", marginBottom:6 },
  text:{ color:"#333", lineHeight:20 }
});

export default Post
