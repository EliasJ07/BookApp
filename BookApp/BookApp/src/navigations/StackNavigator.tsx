
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Login from "../screens/Login";
import TabsNavigator from "./TabsNavigator";
import UseEffectScreen from "../screens/UseEffectScreen";

//1. Declara el tipado de las pantallas con sus parametros


export type RootStackParamList = {
  Login: undefined,
  Home: {email: string},
  Register: undefined
    UserTabs: undefined,
    UseEffect: undefined,
};

//2. crear el stack navigator encargado de manejar la navegacion 

const Stack = createNativeStackNavigator<RootStackParamList>();

//3. utlizar el stack navigator en la aplicacion

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UserTabs" component={TabsNavigator} options={{ headerShown: false }} />
      
      <Stack.Screen
        name="UseEffect"
        component={UseEffectScreen}
        options={{ title: "useEffect" }}
      />
    </Stack.Navigator>

  
    
  );
}