import React from "react";
import { View, Text, StyleSheet } from "react-native";
import textStyle from "../texts/text_styles";

// eslint-disable-next-line react/prop-types
const MyClass = ({ name, task})=>{
	return<View
		style={style.myClassView}>
		<Text style={textStyle.title}>My Class</Text>
		<Text style={textStyle.normalText}>{name}</Text>
		<Text style={textStyle.normalText}>{task}</Text>
		<View style={{width: "100%", height: 5, borderRadius: 10, backgroundColor: "white"}}/>
	</View>;
};

const style = StyleSheet.create({
	myClassView:{
		position: "relative",
		margin: 5,
		width: "68%",
		height: 200,
		padding: 10,
		maxHeight: 300,
		borderRadius: 10,
		backgroundColor: "black"
	}
});

export default MyClass;