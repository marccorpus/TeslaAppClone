import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
