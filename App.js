import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from './src/components/Hello';
import Counter from './src/components/counter';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component = {Hello}>
             <Hello name='Cloud' />
          </Stack.Screen>
          <Stack.Screen name='Counter' component={Counter} />
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06d6a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
