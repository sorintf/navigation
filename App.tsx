// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import Home from './src/home';
import Users from './src/users';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Users" 
          component={Users} 
          initialParams={{
            id:1, 
            codeName:'Iron Horse'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;