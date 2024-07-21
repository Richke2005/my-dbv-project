/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextFild from "../../components/textfild";
import { AntDesign as Icon } from "@expo/vector-icons";

const LoginBox = ({title = "MyClub", navigation, navigateTo})=>{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	return<View style={styles.loginBox}>
			<Text style={{fontSize: 30, color: "black", letterSpacing: 3, textAlign: "center"}}>{title}</Text>
			<TextFild
				//Animate with push up
				onFocus={()=> console.log("Enter email")}
				textContentType="emailAddress"
				onChangeText={setEmail}
				placeholder={"Email address"}
				value={email}/>
			<TextFild
				//Animate with push up
				onFocus={()=> console.log("Enter password")}
				textContentType="password"
				secureTextEntry={true}
				onChangeText={setPassword}
				placeholder="Your password"
				value={password}
			/>
			<View style={styles.bottomView}>
				<Text style={{fontSize: 12, color: "grey"}}>Don't have an account? Sign up now</Text>
            	<Text onPress={()=> navigation.navigate(navigateTo)}>Sign up</Text>
        	</View>
			<Icon.Button
				name="login" 
				size={30}
				backgroundColor="black"
				style={{width: 200}}
				onPressIn={()=>{
					if(email == "richardke18@gmail.com" && password == "Kend2005@"){
						navigation.navigate(navigateTo);
					}else{
						setPlaceholder("wrong email");
					}
				}}>LOGIN</Icon.Button>
		</View>;
};

const styles = StyleSheet.create({
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

	bottomView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    }
});

export default LoginBox;