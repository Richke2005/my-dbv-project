/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";

const Login = ({navigation})=>{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [placeholder, setPlaceholder] = useState("your email here");

	return<View style={styles.container}>
		<View style={styles.loginBox}>
			<Text style={{fontSize: 30, color: "black", letterSpacing: 3, textAlign: "center"}}>Primícias do amanhã</Text>
			<TextInput
				//Animate with push up
				onFocus={()=> console.log("Enter email")}
				onChangeText={(target)=> setEmail(target)}
				style={styles.input}
				placeholder={placeholder}/>
			<TextInput
				//Animate with push up
				onFocus={()=> console.log("Enter password")}
				onChangeText={target=> setPassword(target)}
				style={styles.input}
				placeholder="password"
			/>
			<Icon.Button
				name="login" 
				size={30}
				backgroundColor="black"
				style={{width: 200}}
				onPressIn={()=>{
					if(email == "richardke18@gmail.com" && password == "Kend2005@"){
						navigation.navigate("home");
					}else{
						setPlaceholder("wrong email");
					}
				}}>Login</Icon.Button>
		</View>
	</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	loginBox:{
		width: 300,
		height: 400,
		borderRadius: 10,
		padding: 10,
		backgroundColor: "#fff",
		boxShadow: `3px ${StyleSheet.hairlineWidth}px ${StyleSheet.hairlineWidth}px #0000001A`,
		alignItems: "center",
		justifyContent: "space-around"
	},

	input: {
		height: 40,
		width: "70%",
		borderBottomWidth: 1,
		margin: 12,
		padding: 10
	}
});

export default Login;