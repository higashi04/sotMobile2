import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Buses from './src/screens/Buses';
import BusDetail from './src/screens/BusDetail';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.droidSafeArea}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component = {Home}/>
          <Stack.Screen name='Login' component = {Login}/>
          <Stack.Screen name='Buses' component = {Buses}/>
          <Stack.Screen name='BusDetail' component={BusDetail}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    droidSafeArea: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});
