import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import image from "../../../assets/images/pathfinders_lenço.png"
import textStyle from "../../components/texts/text_styles";

// eslint-disable-next-line react/prop-types
const MyClass = ({name, task})=>{
	return<View style={style.myClassView}>
		<View style={{ height: 150}}>
			<Image source={image} style={{width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
		</View>
		<View style={{padding: 10, }}>
		<Text style={textStyle.darkTitle}>{name}</Text>
		<Text>{task}</Text>
		</View>
	</View>;
};

const style = StyleSheet.create({
	myClassView:{
		position: "relative",
		margin: 5,
		width: "80%",
		borderRadius: 10,
		backgroundColor: "white"
	}
});

export default MyClass;