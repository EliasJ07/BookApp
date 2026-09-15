import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import StackNavigator from "./src/navigations/StackNavigator";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";

function AppNavigation() {
  const { isDark } = useTheme();
  return <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}><StackNavigator /></NavigationContainer>;
}

export default function App() {
  return <ThemeProvider><AppNavigation /></ThemeProvider>;
}
