import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function Settings() {
  const { isDark, colors, toggleTheme } = useTheme();
  return <View style={[styles.container, { backgroundColor: colors.background }]}>
    <StatusBar style={isDark ? "light" : "dark"} />
    <Text style={[styles.title, { color: colors.text }]}>Configuración</Text>
    <Text style={[styles.subtitle, { color: colors.secondaryText }]}>Personaliza la apariencia de BookApp.</Text>
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[styles.iconBox, { backgroundColor: colors.background }]}><Ionicons name={isDark ? "moon" : "sunny-outline"} size={26} color={colors.primary} /></View>
      <View style={styles.info}><Text style={[styles.label, { color: colors.text }]}>Modo oscuro</Text><Text style={[styles.description, { color: colors.secondaryText }]}>{isDark ? "Activado" : "Desactivado"}</Text></View>
      <Switch value={isDark} onValueChange={toggleTheme} trackColor={{ false: "#B9C3CE", true: colors.primary }} thumbColor="#FFFFFF" />
    </View>
  </View>;
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 24 }, title: { fontSize: 32, fontWeight: "700", marginTop: 20 }, subtitle: { fontSize: 16, marginTop: 6, marginBottom: 24 }, card: { flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, borderWidth: 1 }, iconBox: { width: 50, height: 50, borderRadius: 12, alignItems: "center", justifyContent: "center" }, info: { flex: 1, marginLeft: 14 }, label: { fontSize: 17, fontWeight: "700" }, description: { fontSize: 14, marginTop: 4 } });
