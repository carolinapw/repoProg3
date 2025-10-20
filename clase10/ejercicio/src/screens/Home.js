import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DynamicForm from "../components/DynamicForm";

class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.card}>
        <Text style={styles.title}>Home</Text>
        <DynamicForm />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "#fff" },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  title: { 
    fontSize: 30, 
    fontWeight: "800" },
  p: { 
    color: "#333", 
    lineHeight: 20 },
  btnBlue: { 
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center", 
    backgroundColor: "#77b3e1" },
  btnOrange: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center", 
    backgroundColor: "#f4a62a" },
  btnTxt: { 
    color: "#000", 
    fontWeight: "600" }
});


export default Home


