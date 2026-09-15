import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Inicio from "../screens/features/Inicio";
import Explorar from "../screens/features/Explorar";
import Settings from "../screens/features/Settings";
import { useTheme } from "../context/ThemeContext";

export type TabsParamList = { Inicio: undefined; Explorar: undefined; Settings: undefined };
const Tab = createBottomTabNavigator<TabsParamList>();
type IconName = React.ComponentProps<typeof Ionicons>["name"];

export default function TabsNavigator() {
  const { colors } = useTheme();
  const icons: Record<keyof TabsParamList, IconName> = { Inicio: "home-outline", Explorar: "search-outline", Settings: "settings-outline" };
  return <Tab.Navigator screenOptions={({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.active,
    tabBarInactiveTintColor: colors.inactive,
    tabBarStyle: { backgroundColor: colors.tabBar, borderTopColor: colors.border, height: 64, paddingBottom: 8, paddingTop: 6 },
    tabBarLabelStyle: { fontSize: 12 },
    tabBarIcon: ({ color, size }) => <Ionicons name={icons[route.name]} size={size} color={color} />,
  })}>
    <Tab.Screen name="Inicio" component={Inicio} />
    <Tab.Screen name="Explorar" component={Explorar} />
    <Tab.Screen name="Settings" component={Settings} options={{ title: "Configuración" }} />
  </Tab.Navigator>;
}
