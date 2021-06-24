import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import { Home, Restaurant, OrderDelivery } from "./screens";
import Tabs from './navigation/tabs';

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
