/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet } from "react-native";
import LoginBox from "../../patterns/loginBox";

const Login = ({navigation})=>{
	return<View style={styles.container}>
		<LoginBox
		navigation={navigation} 
		navigateTo="home"/>
	</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	}
});

export default Login;