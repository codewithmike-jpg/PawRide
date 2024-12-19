import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image, Animated } from 'react-native';
const SplashScreen = ({ navigation }) => {
  const [animatedLetters, setAnimatedLetters] = useState([]);

  const title = "PAWRIDE.";

  useEffect(() => {
    const animations = title.split("").map(() => new Animated.Value(0)); // Initial opacity for each letter
    setAnimatedLetters(animations);

    // Animate each letter with a delay
    title.split("").forEach((_, index) => {
      setTimeout(() => {
        Animated.timing(animations[index], {
          toValue: 1, // Fade to visible
          duration: 200, // Each letter fades in over 200ms
          useNativeDriver: true,
        }).start();
      }, index * 500); // Delay each letter by 300ms
    });

    // Navigate after all animations complete
    setTimeout(() => {
      navigation.replace('Onboarding1');
    }, title.length * 200 + 2000); // Total time (letters + 2 seconds)

  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        {title.split("").map((letter, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.text,
              { opacity: animatedLetters[index] || 0 }, // Bind opacity to animation
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>
      <Text style={styles.para}>One Dog at a time.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
  },
  textRow: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 2, // Space between letters
  },
  para:{
    fontSize:20,
    color:'#000',
    marginTop:20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  
});

export default SplashScreen;