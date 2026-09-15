import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

const books = [
  { title: "El Principito", author: "Antoine de Saint-Exupéry", icon: "planet-outline" as const },
  { title: "1984", author: "George Orwell", icon: "eye-outline" as const },
  { title: "Orgullo y Prejuicio", author: "Jane Austen", icon: "heart-outline" as const },
];

export default function Explorar() {
  const { isDark, colors } = useTheme();
  return <View style={[styles.container, { backgroundColor: colors.background }]}>
    <StatusBar style={isDark ? "light" : "dark"} />
    <Text style={[styles.title, { color: colors.text }]}>Explorar</Text>
    <Text style={[styles.subtitle, { color: colors.secondaryText }]}>Encuentra una nueva historia.</Text>
    {books.map((book) => <View key={book.title} style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[styles.iconBox, { backgroundColor: colors.background }]}><Ionicons name={book.icon} size={28} color={colors.primary} /></View>
      <View style={styles.info}><Text style={[styles.bookTitle, { color: colors.text }]}>{book.title}</Text><Text style={[styles.author, { color: colors.secondaryText }]}>{book.author}</Text></View>
    </View>)}
  </View>;
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 24 }, title: { fontSize: 32, fontWeight: "700", marginTop: 20 }, subtitle: { fontSize: 16, marginTop: 6, marginBottom: 22 }, card: { flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, borderWidth: 1, marginBottom: 12 }, iconBox: { width: 54, height: 54, borderRadius: 12, alignItems: "center", justifyContent: "center" }, info: { flex: 1, marginLeft: 14 }, bookTitle: { fontSize: 17, fontWeight: "700" }, author: { fontSize: 14, marginTop: 4 } });
