import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/home";
import Login from "./src/screens/login/login";

const Stack = createNativeStackNavigator();


export default function App() {
	return (
		<NavigationContainer>
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
		</NavigationContainer>
	);
}


