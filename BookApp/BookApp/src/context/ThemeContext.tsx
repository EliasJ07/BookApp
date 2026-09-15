import React, { createContext, useContext, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeColors = { background: string; card: string; text: string; secondaryText: string; border: string; primary: string; tabBar: string; active: string; inactive: string };
type ThemeContextType = { theme: Theme; isDark: boolean; toggleTheme: () => void; colors: ThemeColors };

const lightColors: ThemeColors = { background: "#F5F7FA", card: "#FFFFFF", text: "#17202A", secondaryText: "#667085", border: "#D9E0E7", primary: "#206291", tabBar: "#FFFFFF", active: "#206291", inactive: "#8A96A3" };
const darkColors: ThemeColors = { background: "#111827", card: "#1F2937", text: "#F9FAFB", secondaryText: "#AEB8C5", border: "#374151", primary: "#70B7E8", tabBar: "#18212F", active: "#70B7E8", inactive: "#7D8998" };
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const value = useMemo(() => ({ theme, isDark: theme === "dark", toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light"), colors: theme === "dark" ? darkColors : lightColors }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe utilizarse dentro de ThemeProvider");
  return context;
}
