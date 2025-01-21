import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import carDetails from './carDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Initial D">
      <Stack.Screen name="Initial D" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="Details" component={carDetails} />
    </Stack.Navigator>
  );
}
