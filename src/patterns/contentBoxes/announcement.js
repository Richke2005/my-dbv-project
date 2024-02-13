import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import textStyle from "../../components/texts/text_styles";

const Announcement = ({title, text})=>{
	return<View style={style.announcementView}>
		<View style={style.textView}>
			<Text style={{fontSize: 12, color: "grey"}}>Announcement</Text>
			<Text style={textStyle.darkTitle}>{title}</Text>
			<Text>{text}</Text>
		</View>
		<View style={style.imageView}>
			<Image style={style.image} source={{uri: "https://www.baptistpress.com/wp-content/uploads/2020/10/praying-hands-iStock.jpg"}}/>
		</View>
	</View>;
};


const style = StyleSheet.create({
	announcementView:{
		position: "relative",
		marginTop: 5,
		marginBottom: 5,
		width: "100%",
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "white"
	},

	textView: {
		width: "80%",
        display: "flex",
        flexDirection: "column"
	},

	imageView: {
		width: "20%",
		height: 70,
		alignItems: "center", 
		justifyContent: "center"
	},

	image: {
		width: "90%", 
		height: "90%", 
		borderTopLeftRadius: 10, 
		borderBottomRightRadius: 10
	}
});

export default Announcement;