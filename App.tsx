// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import Home from './src/home';
import Users from './src/users';

const Stack = createNativeStackNavigator();
// https://reactnavigation.org/docs/headers
// https://reactnavigation.org/docs/stack-navigator/

const defaultHeader = {
  headerStyle:{ backgroundColor:'#ffa3f388' }, 
  headerBlurEffect:'light', 
  // headerTransparent:true // cu true devine pozitionat absolute
  headerTintColor:'#ffffff', // culoare titlu si sageata
  headerTitleStyle:{
    fontWeight:'bold',
    color:'#0000ff' // culoare titlu
  }
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{
          ...defaultHeader
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Users" 
          component={Users} 
          initialParams={{ id:1, codeName:'Iron Horse' }}
          options={{
            title:'x-users'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;