import React from "react";
import { View, Text, StyleSheet } from "react-native";
import textStyle from "../../components/texts/text_styles";

const Announcement = ({title, text})=>{
	return<View style={style.announcementView}
		onPointerDown={()=>console.log("Anounccement")}>
		<Text style={textStyle.title}>{title}</Text>
		<Text style={textStyle.normalText}>{text}</Text>
	</View>;
};


const style = StyleSheet.create({
	announcementView:{
		position: "relative",
		margin: 5,
		width: "25%",
		height: 100,
		padding: 10,
		maxHeight: 300,
		borderRadius: 10,
		backgroundColor: "black"
	}
});

export default Announcement;