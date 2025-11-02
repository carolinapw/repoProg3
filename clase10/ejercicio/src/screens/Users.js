import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase/config";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    db.collection('users').onSnapshot(
        docs => {
            let users = [];
            docs.forEach(doc => {
                users.push({ 
                    id: doc.id, 
                    data: doc.data() 
                });
            });
            this.setState({ users:users, loading: false });
        });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Usuarios</Text>
        <FlatList
            data={this.state.users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={ ({item}) => 
                <View style={styles.row}>
                    <Text style={styles.email}>Email: {item.data.email}</Text>
                    <Text style={styles.user}>Usuario: {item.data.userName}</Text>
                </View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 30, fontWeight: "800", padding: 22 },
  row: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    marginHorizontal: 22, 
    marginVertical: 2,  
  },
  email: { fontWeight: "700" },
  user: { color: "#333", marginTop: 2 },
});

export default Users