import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProductDescription from './ProductDescription';
const Details = ({route, navigation}) => {
  const {product} = route.params;
  console.log('check for details :', product.title);
  return (
    <View style={styles.container}>
      <ProductDescription
        imgName={{uri: product.image}}
        title={product.title}
        price={product.price}
        description={product.description}
        fav={product.fav}
      />
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 0,
  },
});
