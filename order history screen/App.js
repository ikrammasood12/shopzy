import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Function to render stars based on the rating
const renderStars = (rating) => {
  const maxStars = 5;
  const starIcons = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < rating) {
      starIcons.push('⭐');
    } else {
   
      starIcons.push('☆');
      
  }}

  return starIcons.join(' '); // Join stars to display as a string
};
function logo(){
  return(
 <Image source={require('./assets/ikram.jpeg')}
 style={{width:100,
height:100, resizeMode:"contain",
alignSelf:"center"}} />
);}

const OrderHistoryScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the server or use dummy data
    // For demonstration purposes, setting dummy data
    const dummyOrders = [
      { id: '1', date: '2022-05-01', total: 50.0, rating: 4,image: require('./assets/download.jpg') },
      { id: '2', date: '2022-05-03', total: 120.5, rating: 5 ,image: require('./assets/h.jpg')},
      { id: '3', date: '2022-05-08', total: 80.0, rating: 3 ,image: require('./assets/k.jpg')},
    ];
    setOrders(dummyOrders);
  }, []);

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderId}>Order ID: {item.id}</Text>
      <Text style={styles.orderDate}>Date: {item.date}</Text>
      <Text style={styles.orderTotal}>Total: PKR {item.total.toFixed(2)}</Text>
      <Text style={styles.orderRating}><Text style={{color:"orange"}}> You rated:</Text> {renderStars(item.rating)}</Text>
      <Image source={item.image} style={styles.productImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>

      {orders.length === 0 ? (
        <Text style={styles.noOrdersText}>No orders found.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderItem}
          style={styles.orderList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white', // Light background color
  },
  title: {
    padding: 9,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    top: 20,
  },
  orderList: {
    flex: 1,
  },
  orderItem: {
    backgroundColor: 'white', // White order item background
    borderRadius: 8,
    padding: 16,
    marginBottom: 0, // No gap between order blocks
    elevation: 2, // Adds a subtle shadow on Android
    borderWidth: 1, // Add a border
    borderColor: 'lightgray', // Specify border color
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -3,
    color: 'gray', // Dark text color
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 11,
    color: 'silver', // Slightly darker text color
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50', // Green total amount color
    marginBottom:-2,
    top:27
  },
  noOrdersText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },

  orderRating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Golden color for stars
    marginTop: 6, // Add some space between total and rating
    left:150
  },
  emptyStar: {
    fontSize: 20, // Larger size for empty stars
    fontWeight: 'bold',
    color: '#D3D3D3', // Light gray color for empty stars
  },
  productImage: {
    width: 80,
    resizeMode:'contain',
    height: 70,
    top:-100,
    marginLeft: 250, // Add some space between image and details
    borderRadius: 4, // Optional: add border radius to the image
  marginBottom:-60
  },
});

export default OrderHistoryScreen;


