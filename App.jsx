import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import MyTabs from "./src/navigation/tabNavigator/index.js";

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<MyTabs/>
			</NavigationContainer>
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => App);