import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const ProductDescription = ({imgName, title, price, description, fav}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.img} source={imgName} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.des}>{description}</Text>
        </View>
        {fav ? (
          <TouchableOpacity>
            <Text style={styles.addfavbtn}>Remove From Favourite</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Text style={styles.addfavbtn}>Add To Favorite</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};
export default ProductDescription;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {fontSize: 36, fontWeight: '500'},
  price: {fontSize: 26, fontWeight: '500'},
  des: {fontSize: 16, fontWeight: '500'},
  img: {width: '100%', height: '100%'},
  content: {padding: 20, backgroundColor: '#fff'},
  addfavbtn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: '#ff00a2',
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});
