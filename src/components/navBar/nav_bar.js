/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";

const NavBar = ()=>{
	return<View style={style.navBarView}>
		<Pressable 
			onPress={()=>console.log("book")}> 
			<Icon
				name="book"
				size={30}
				color="black"
			/>
		</Pressable>

		<Pressable
			onPress={()=>console.log("home")}>
			<Icon
				name="home"
				size={30}
				color="black"
			/>
		</Pressable>
		
		<Pressable
			onPress={()=> console.log("pressed")}>
			<Icon
				name="user"
				size={30}
				color="black"
				backgroundColor="transparent"
			/>
		</Pressable>
	</View>;
};

const style = StyleSheet.create({
	navBarView:{
		width: "100%",
		height: 80,
		padding: 5,
		position: "absolute",
		bottom: 0,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "white"
	}
});

export default NavBar;