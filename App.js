import React from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { name as appName } from "./app.json";

import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootNavigator from "./src/navigation/rootNavigator.js";


export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider>
          <RootNavigator />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // Faz o GestureHandlerRootView ocupar toda a tela
  },
});

AppRegistry.registerComponent(appName, () => App);
