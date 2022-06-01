import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as StoreProvider } from "react-redux";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Buses from "./src/screens/Buses";
import BusDetail from "./src/screens/BusDetail";
import Drivers from "./src/screens/Drivers";
import DriverDetail from "./src/screens/DriverDetail";
import UserOpts from "./src/screens/UserOpts";
import RegisterScreen from "./src/screens/Register";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.droidSafeArea}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "transparent",
                marginBottom: 20,
              },
              headerTintColor: "#fff",
              headerTransparent: true,
              headerTitle: "",
              headerLeftContainerStyle: {
                paddingLeft: 50,
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Buses" component={Buses} />
            <Stack.Screen name="BusDetail" component={BusDetail} />
            <Stack.Screen name="Drivers" component={Drivers} />
            <Stack.Screen name="DriverDetail" component={DriverDetail} />
            <Stack.Screen name="User" component={UserOpts} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </SafeAreaView>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#669BC7",
    paddingTop: Platform.OS === "android" ? 55 : 30,
  },
});

export default App;
