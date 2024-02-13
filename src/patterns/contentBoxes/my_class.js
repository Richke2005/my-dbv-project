import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import * as RootNavigation from "../../navigation/root_navigation";
import ProgressBar from "../../components/progress-icons/progress_bar";
import image from "../../../assets/images/pathfinders_lenço.png"
import textStyle from "../../components/texts/text_styles";

// eslint-disable-next-line react/prop-types
const MyClass = ({className, task})=>{
	return<Pressable
	 	style={style.myClassView}
		onPress={()=> RootNavigation.navigate("myClass")}>
		<View style={style.imageView}>
			<Image source={image} style={style.image}/>
			<Text style={textStyle.title}>My Class</Text>
		</View>
		<View style={style.contentView}>
		<Text style={textStyle.darkTitle}>{className}</Text>
		<Text>{task}</Text>
		<ProgressBar
		width={230}
		height={10}
		progress={30}
		/>
		</View>
	</Pressable>;
};

const style = StyleSheet.create({
	myClassView:{
		position: "relative",
		marginTop: 5,
		marginBottom: 5,
		width: "80%",
		borderRadius: 10,
		backgroundColor: "white"
	},

	imageView:{
		height: 150
	},

	image:{
		width: "100%", 
		height: "100%", 
		position: "absolute",
		borderTopLeftRadius: 10, 
		borderTopRightRadius: 10
	},

	contentView:{
		padding: 10
	}
});

export default MyClass;