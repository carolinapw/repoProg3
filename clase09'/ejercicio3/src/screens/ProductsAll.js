import React, { Component } from "react";
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Card from "../components/Card"; 

class ProductsAll extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            characters: [], 
            loading: true
        }
    }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results, loading: false }) 
      })                   
      .catch( error => console.log(error))
    }
    
    render() {

      if (this.state.loading) {
        return (
          <View style={styles.center}>
            <ActivityIndicator size="large" color='green'/>
            <Text style={styles.text}>Cargando personajes…</Text>
          </View>
        );
      }

      return (
        <View style={styles.flatlist}>
        <FlatList
          data={this.state.characters}
          renderItem={ ({item}) => <Card character={item}/>}
          keyExtractor={ item => item.id.toString() }
        />
      </View> 
      )
    }
}

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    flex: 1
  }, 
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: {marginTop: 8}
})

export default ProductsAll;