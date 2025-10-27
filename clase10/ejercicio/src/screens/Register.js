import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { db, auth } from '../firebase/config'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = { email: "", userName: "", password: "", error: "", registered: false }
    }

    onSubmit(email,password) {
        console.log("Registrar submit:", this.state)

        // registro en firebase
        auth.createUserWithEmailAndPassword(email, password)
          .then( response => {
            db.collection('users').add({
              email: email,
              userName: this.state.userName,
              createdAt: Date.now()
              })
              .then( response => {
                  this.setState({registered:true});
                  this.props.navigation.navigate("Login"); // redirige a login si el registro fue exitoso
              })
              .catch( error => {
                this.setState({ error: "No se pudo guardar el usuario en la colección." });
              })
            
          })
          .catch( error => {
            this.setState({error: 'Fallo en el registro.'})
          })
    }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.card}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.p}>
          Completar los campos
        </Text>

        <TextInput
            style={styles.field}
            keyboardType="email-address"
            placeholder="Email"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
            style={styles.field}
            placeholder="Username"
            value={this.state.userName}
            onChangeText={(text) => this.setState({ userName: text })}
        />

        <TextInput
            style={styles.field}
            keyboardType="default"
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
        />

        <Pressable style={styles.btnBlue} onPress={() => this.onSubmit(this.state.email,this.state.password)}> 
          <Text style={styles.btnTxt}>Registrate</Text>
        </Pressable>

        <View style={styles.liveBox}>
            <Text style={styles.liveTitle}>Datos ingresados</Text>
            <Text>Email: {this.state.email}</Text>
            <Text>UserName: {this.state.userName}</Text>
            <Text>Password: {this.state.password}</Text>
          </View>

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
    fontWeight: "600" },
  field:{
    backgroundColor:"#fff", 
    borderRadius:10, 
    paddingHorizontal:12, 
    paddingVertical:10,
    borderWidth:1, 
    borderColor:"#ddd"
  },
  liveBox:{ 
    backgroundColor:"#fff", 
    borderRadius:10, 
    padding:10, 
    gap:4, 
    borderWidth:1, 
    borderColor:"#e6e6e6" },
  liveTitle:{ 
    fontWeight:"700", 
    marginBottom:4 }
});

export default Register