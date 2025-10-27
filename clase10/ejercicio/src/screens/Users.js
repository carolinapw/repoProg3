// src/screens/Users.js
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase/config";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    db.collection('users').onSnapshot(
        docs => {
            let users = [];
            docs.forEach(doc => {
                users.push({ id: doc.id, data: doc.data() });
            });
            this.setState({ users, loading: false });
        });
  }

  render() {
    return (
      <View>
        <Text>Usuarios</Text>
        <FlatList
            data={this.state.users}
            keyExtractor={item => item.id.toString()}
            renderItem={ ({item}) => 
                <View>
                    <Text>{item.data.email}</Text>
                    <Text>{item.data.userName}</Text>
                </View>
            }
        />
      </View>
    );
  }
}

