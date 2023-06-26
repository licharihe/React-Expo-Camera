import React from 'react';
import { View, Text } from 'react-native';
import {Image } from 'react-native';

const HomeView = () => {
 return (
   <View style={styles.container}>
     <Text style={styles.title}>
       Welcome!!!
       <br/>
      <Image style={styles.logo} source={require('../assets/qr.png')} />
     </Text>
   </View>
 );
};


const styles = {
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 title: {
   fontSize: 24,
   fontWeight: 'bold',
 },
};


export default HomeView;