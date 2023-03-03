import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
const Card = ({imgName, title, price, OnClickEvent, fav, toggleFav}) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.favtouch} onPress={toggleFav}>
        {fav ? (
          <Image
            style={styles.heartImage}
            source={require('../assets/redheart.png')}
          />
        ) : (
          <Image
            style={styles.heartImage}
            source={require('../assets/blankHeart.png')}
          />
        )}
      </TouchableOpacity>
      <Image style={styles.cardImage} source={imgName} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.detailBtn}
        onPress={txt => OnClickEvent(txt)}>
        <Text style={styles.detailBtntext}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    backgroundColor: '#fff',
    display: 'flex',
    width: '45%',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
    paddingLeft: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  favtouch: {zIndex: 1111},
  heartImage: {
    position: 'absolute',
    top: -10,
    right: -8,
    zIndex: 11,
    width: 40,
    height: 40,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  title: {fontSize: 12, fontWeight: '400'},
  price: {fontSize: 20, fontWeight: '400'},
  detailBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailBtntext: {
    backgroundColor: '#ff00a2',
    color: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
  },
});
