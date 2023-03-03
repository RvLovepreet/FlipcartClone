import React, {useContext, useState, useEffect} from 'react';

import {myContext} from '../context/context';
import {View, FlatList, StyleSheet} from 'react-native';
import Card from './card';
const Product = ({navigation}) => {
  const {productArray, setProductArray} = useContext(myContext);
  const [fav, setfav] = useState(false);
  useEffect(() => {}, [fav]);
  const setid = item => {
    console.log(item);
    navigation.navigate('details', {product: item});
  };
  const addfav = item => {
    setfav(!fav);
    let bol = productArray[item.id - 1];
    let toggle = !bol.fav;
    console.log(toggle);
    let temp = {...bol, fav: toggle};
    let tempar = productArray;
    tempar.splice(item.id - 1, 1);
    tempar.splice(item.id - 1, 0, temp);
    setProductArray(tempar);
  };
  return (
    <View>
      <View style={styles.ProductList}>
        <FlatList
          data={productArray}
          numColumns={2}
          renderItem={({item}) => (
            /* let id = {item.id} */
            <Card
              imgName={{uri: item.image}}
              title={item.title}
              price={item.price}
              fav={item.fav}
              OnClickEvent={() => setid(item)}
              toggleFav={() => addfav(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  ProductList: {
    width: '100%',
    flexDirection: 'row',
    height: '100%',
  },
});
