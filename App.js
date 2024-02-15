import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/navigation/root_navigation";
import Login from "./src/screens/login/";
import Home from "./src/screens/home/";
import MyClass from "./src/screens/my-class";
import NavBar from "./src/patterns/navBar/";

const Stack = createNativeStackNavigator();


export default function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<StatusBar barStyle="dark-content" />
			<Stack.Navigator initialRouteName="login">
				<Stack.Screen 
					name="login"
					component={Login} 
					options={{title: "Login"}}/>
				<Stack.Screen 
					name="home"
					component={Home}
					options={{title: "Home"}}
				/>
				<Stack.Screen
				name="myClass"
				component={MyClass}
				options={{title: "My class", }}/>
			</Stack.Navigator>
			<NavBar/>
		</NavigationContainer>
	);
}

