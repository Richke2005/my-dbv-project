import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/navigation/root_navigation";
import Home from "./src/screens/home/home";
import Login from "./src/screens/login/login";
import NavBar from "./src/components/navBar/nav_bar";

const Stack = createNativeStackNavigator();


export default function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<StatusBar barStyle="dark-content" />
			<Stack.Navigator initialRouteName="home">
				<Stack.Screen 
					name="home"
					component={Home}
					options={{title: "Home"}}
				/>
				<Stack.Screen 
					name="login"
					component={Login} 
					options={{title: "Login"}}/>
			</Stack.Navigator>
			<NavBar/>
		</NavigationContainer>
	);
}

