// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utlis/logoTitle';

const Stack = createNativeStackNavigator();
// https://reactnavigation.org/docs/headers
// https://reactnavigation.org/docs/stack-navigator/

const defaultHeader = {
  headerTitleAlign:'center',
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
          ...defaultHeader, 
          headerTitle: props => LogoTitle(props)
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Users" 
          component={Users} 
          initialParams={{ id:1, codeName:'Iron Horse' }}           
          options={({navigation})=>({
            
            headerLeft:()=><Button
              title="go home"
              onPress={ () => navigation.navigate('Home') }
            />
          })}
            
            
          //   {
          //   headerLeft:()=><Button
          //     title="do less"
          //     onPress={ () => alert('less') }
          //   />,
          //   headerRight:()=><Button
          //     title="do more"
          //     onPress={ () => alert('more') }
          //   />

          //   // this is replacing the structure of the title so the styling is no longer applied
          //   // headerTitle: props => LogoTitle(props)
          //   // title:'x-users'
          //   // headerShown:false 
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;