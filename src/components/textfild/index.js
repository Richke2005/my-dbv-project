import React from "react";
import { TextInput as ReactTextIput, StyleSheet } from "react-native";

const TextFild = (props) => {
	return<ReactTextIput
		{...props}
		style={style.input}
	/>;
};

const style = StyleSheet.create({
	input: {
		height: 40,
		width: "70%",
		borderBottomWidth: 1,
		margin: 12,
		padding: 10
	}
});


export default TextFild;