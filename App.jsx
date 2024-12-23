import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/tabNavigator/index.js";

export default function App() {
	return (
		<NavigationContainer>
			<MyTabs/>
		</NavigationContainer>
	);
}

