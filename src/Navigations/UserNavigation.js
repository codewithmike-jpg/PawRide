import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/HomeScreen';
import Trips from '../screens/Trips';

// Import screens


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserNavigation = () => {
  return (
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ color, size }) => {
           let iconName;
   
           if (route.name === 'Home') iconName = 'home-outline';
           else if (route.name === 'Trips') iconName = 'person-outline';
           else if (route.name === 'Profile') iconName = 'settings-outline';
   
           return <Icon name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
       })}
     >
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Profile" component={Profile} />
       <Tab.Screen name="Trips" component={Trips} />
     </Tab.Navigator>
   
  )
}

export default UserNavigation