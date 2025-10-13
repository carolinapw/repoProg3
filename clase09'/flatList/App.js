import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Probando FlatLists</Text>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    width: '100%',
    padding:10
  },
  title: {
    fontSize: 30
  },
});
