// src/screens/OnboardingScreen1.js
import React from 'react';
import { View, Text, Button, StyleSheet,ImageBackground, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen3 = ({ navigation }) => (
  <View style={styles.screen}>
    <ImageBackground 
    source={require('./onboard2.png')} // Your local image path
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
        <Text style={styles.title}>Real-time updates</Text>
        <Text style={styles.description}>
        Receive live tracking and photos during walks or appointments,
        ensuring your dog's safety and happiness.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Onboarding4')}>
            <Text style={styles.btnText}>Next</Text>
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
    top:'460px',
    position:'absolute',
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
    color:'#FFFFFF',
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

export default OnboardingScreen3;
