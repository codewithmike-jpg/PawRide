import React, { useState, createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Import screens
import SplashScreen from "./src/screens/SplashScreen";
import UserType from "./src/screens/UserType";

import OnboardingScreen1 from "./src/Onboarding/Onboarding1";
import OnboardingScreen2 from "./src/Onboarding/Onboarding2";
import OnboardingScreen3 from "./src/Onboarding/Onboarding3";
import OnboardingScreen4 from "./src/Onboarding/Onboarding4";
import UserSignup from "./src/Signups/UserSignup";
import UserNavigation from "./src/Navigations/UserNavigation";
import DriverSignup from "./src/Signups/DriverSignup";
import DriverNavigator from "./src/Navigations/DriverNavigation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const RoleContext = createContext();

// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName;

//         if (route.name === 'Home') iconName = 'home-outline';
//         else if (route.name === 'Trips') iconName = 'person-outline';
//         else if (route.name === 'Profile') iconName = 'settings-outline';

//         return <Icon name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: 'tomato',
//       tabBarInactiveTintColor: 'gray',
//     })}
//   >
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Profile" component={Profile} />
//     <Tab.Screen name="Trips" component={Trips} />
//   </Tab.Navigator>
// );

// Main App Component
const App = () => {
const [role, setRole] = useState(null); // 'user' or 'driver'
 return(
  <RoleContext.Provider >
  <NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
  <Stack.Screen name="Splash" component={SplashScreen} />
  <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
  <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
  <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
  <Stack.Screen name="Onboarding4" component={OnboardingScreen4} />
  <Stack.Screen name="UserType" component={UserType} />
  {role === "user" && (
    <>
      <Stack.Screen name="UserSignup" component={UserSignup} />
      <Stack.Screen name="UserNavigator" component={UserNavigation} />
    </>
  )}
  {role === "driver" && (
    <>
      <Stack.Screen name="DriverSignup" component={DriverSignup} />
      <Stack.Screen name="DriverNavigator" component={DriverNavigator} />
    </>
  )}
</Stack.Navigator>
    </NavigationContainer>
  </RoleContext.Provider>
  )
}

// Authentication Navigator for Login and Signup
// const AuthNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen name="Signup" component={Signup} />
//   </Stack.Navigator>
// );

export default App;
