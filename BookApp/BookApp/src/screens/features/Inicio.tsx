import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function Inicio() {
  const { isDark, colors } = useTheme();
  return <View style={[styles.container, { backgroundColor: colors.background }]}>
    <StatusBar style={isDark ? "light" : "dark"} />
    <Text style={[styles.title, { color: colors.text }]}>Inicio</Text>
    <Text style={[styles.subtitle, { color: colors.secondaryText }]}>Bienvenido a BookApp</Text>
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Ionicons name="book-outline" size={42} color={colors.primary} />
      <View style={styles.cardText}><Text style={[styles.cardTitle, { color: colors.text }]}>Tu biblioteca</Text><Text style={[styles.cardDescription, { color: colors.secondaryText }]}>Descubre y organiza tus libros favoritos.</Text></View>
    </View>
  </View>;
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 24 }, title: { fontSize: 32, fontWeight: "700", marginTop: 20 }, subtitle: { fontSize: 16, marginTop: 6, marginBottom: 24 }, card: { flexDirection: "row", alignItems: "center", padding: 20, borderRadius: 16, borderWidth: 1 }, cardText: { flex: 1, marginLeft: 16 }, cardTitle: { fontSize: 19, fontWeight: "700", marginBottom: 5 }, cardDescription: { fontSize: 14, lineHeight: 20 } });
