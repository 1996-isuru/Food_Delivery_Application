import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import { Home, Restaurant, OrderDelivery } from "./screens";
import Tabs from './navigation/tabs';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrdNatCSunLGkGw8wBrXJhnzjxazM1Tlc",
  authDomain: "testproject01-1ac82.firebaseapp.com",
  projectId: "testproject01-1ac82",
  storageBucket: "testproject01-1ac82.appspot.com",
  messagingSenderId: "414885128485",
  appId: "1:414885128485:web:496309c2a3e122e07452cc",
  measurementId: "G-SGSTXRKV5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

  })

  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
      >
      <Stack.Screen options={{headerShown: false}} name="Home" component={Tabs} />
      <Stack.Screen options={{headerShown: false}} name="Restaurant" component={Restaurant} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
