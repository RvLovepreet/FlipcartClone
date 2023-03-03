import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import axios from 'axios';
import {constant} from './screen/constant';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {myContext} from './context/context';
import Index from './screen/Index';
import Product from './screen/Product';
import Details from './screen/Details';
const Stack = createNativeStackNavigator();
const App = () => {
  const [productArray, setProductArray] = useState();
  const getData = async () => {
    const res = await axios.get(constant.PRODUCT_API);
    let temp = res.data;
    let temp2 = temp.map(item => ({...item, fav: false}));
    setProductArray(temp2);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <myContext.Provider value={{productArray, setProductArray}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="index"
              component={Index}
              options={{title: 'Home'}}
            />
            <Stack.Screen name="product" component={Product} />
            <Stack.Screen name="details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </myContext.Provider>
  );
};
export default App;
