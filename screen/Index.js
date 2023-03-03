import React, {useContext, useEffect, useState} from 'react';
import {myContext} from '../context/context';
import {View, Text, Button, FlatList} from 'react-native';

const Index = ({navigation}) => {
  const {productArray, setProductArray} = useContext(myContext);
  return (
    <View>
      <Text>Index</Text>
      <Button
        onPress={() => navigation.navigate('product')}
        title="go to product"
      />
      <FlatList
        data={productArray}
        renderItem={({item}) => {
          return (
            <>
              <Text>
                {item.id} {item.title}
              </Text>
            </>
          );
        }}
      />
    </View>
  );
};

export default Index;
