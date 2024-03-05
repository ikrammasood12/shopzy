// WishlistScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WishlistScreen = () => {
  const [wishlist, setWishlist] = useState([
    { id: '1', title: 'Product 1', price: '19.99', image: require('./assets/h.jpg') },
    { id: '2', title: 'Product 2', price: '29.99', image: require('./assets/k.jpg') },
    { id: '3', title: 'Product 3', price: '39.99', image: require('./assets/download.jpg') },
    { id: '4', title: 'Product 4', price: '39.99', image: require('./assets/h.jpg') },
   
    // Add more items as needed
  ]);

  const removeItem = (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Wishlist</Text>
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    top: 40,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode:'contain',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888888',
  },
  removeButton: {
    backgroundColor: '#E57373',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WishlistScreen;



