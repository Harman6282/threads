import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
// @ts-ignore
import "../../global.css";
import { StatusBar } from "react-native";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    card: "#101010",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <StatusBar barStyle="light-content" />
      <Slot />
    </ThemeProvider>
  );
}
