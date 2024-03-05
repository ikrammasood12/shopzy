// src/screens/WishlistScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WishlistScreen = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    // Add more items as needed
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
        <Icon name="close-circle" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default WishlistScreen;
