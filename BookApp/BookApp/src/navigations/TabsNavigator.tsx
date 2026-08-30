import React from "react";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";

//1. Declara el tipado de las pantallas con sus parametros
export type TabsParamList = {
  Profile: undefined,
  Settings: undefined,
    HomeTab: {email: string},
  
};

//2. crear el tab navigator encargado de manejar la navegacion 
const Tab = createNativeBottomTabNavigator<TabsParamList>();

//3. utlizar el tab navigator en la aplicacion

export default function TabsNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
      {/* <Tab.Screen name="HomeTab" component={HomeScreen} /> */}
    </Tab.Navigator>
  );
}