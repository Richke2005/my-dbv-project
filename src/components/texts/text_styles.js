import { StyleSheet } from "react-native";


const textStyle = StyleSheet.create({
	VerseOfDay:{
		margin: 2,
		fontSize: 30,
		fontWeight: "bold",
		color: "white"
	},

	title:{
		margin: 2,
		fontSize: 20,
		fontWeight: "bold",
		color: "white"
	},

	darkTitle: {
		margin: 2,
		fontSize: 20,
		fontWeight: "bold",
		color: "black"
	},

	lightText:{
		margin: 2,
		fontSize: 15,
		fontWeight: "normal",
		color: "white"
	},

	italicText:{
		margin: 2,
		fontSize: 15,
		fontWeight: "normal",
		fontStyle: "italic"
	},

	italicLihgtText: {
		margin: 2,
		fontSize: 15,
		fontWeight: "normal",
		color: "white",
		fontStyle: "italic"
	}

});

export default textStyle;