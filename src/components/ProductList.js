import React from 'react';
import {FlatList, Dimensions} from 'react-native';

import Product from './Product';
import products from '../data/dummy-data';

const ProductList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Product {...item} />}
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={Dimensions.get('window').height}
    />
  );
};

export default ProductList;
