import React from "react";
import { View, StyleSheet } from "react-native";
import MyClass from "../../../components/contentBox/my_class";
import Announcement from "../../../components/contentBox/announcement";

const WidgetWindow = ()=>{
	return<View style={style.window}>
		<Announcement/>
		<MyClass
			name="Pioneiros"
			task="Terminar leitura biblica"
		/>
		<MyClass
			name="Pesquisadores"
			task="Terminar pesquisa"/>
		<Announcement/>
		<Announcement/>
		<MyClass
			name="Guia"
			task="Acampar no mato"/>
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