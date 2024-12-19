// src/screens/OnboardingScreen1.js
import React from 'react';
import { View, Text, Button, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen4 = ({ navigation }) => (
  <View style={styles.screen}>
    <ImageBackground 
    source={require('./onboard4.webp')} // Your local image path
    style={styles.background}
    >
        {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('UserType')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.layout}>
        <Text style={styles.title}>Ratings and Reviews</Text>
        <Text style={styles.description}>
        Choose from highly rated pet care professionals based on other owners' experiences.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('UserType')}>
            <Text style={styles.btnText}> Get Started</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 20,
  // },
  background: {
    flex: 1,
    justifyContent: 'center', 
    width: '100%',
    height:'100vh',
    top:'2px',
    alignItems: 'center', 
  },

  layout:{
    width: '350px',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    position:'absolute',
    top:'460px',
    borderRadius:'32px',
    height:'300px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  title: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily:'Filson pro',
    alignItems:'center',
    textAlign:'center',
    color:'#000000',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 18,
    color:'red',
    fontWeight: 'bold',
  },
  btn:{
    paddingTop:12,
    paddingRight:80,
    paddingLeft:80,
    paddingBottom:12,
    gap:10,
    backgroundColor: '#FFCC00',
    borderRadius: 10,
    marginTop:20,      
    elevation: 3,           
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8,         
    shadowRadius: 2,   
  },
  btnText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
});

export default OnboardingScreen4;
