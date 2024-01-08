import React from "react";
import { View, StyleSheet } from "react-native";
import MyClass from "../../../components/contentBox/my_class";

const WidgetWindow = ()=>{
	return<View style={style.window}>
		<MyClass/>
	</View>;
};

const style = StyleSheet.create({
	window: {
		flex: 1,
		width: "85%",
		minWidth: "50%",
		flexDirection: "row",
		flexWrap: "wrap"
	}
});

export default WidgetWindow;