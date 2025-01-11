import React, { useState } from "react";
import { Pressable, Text,  StyleSheet} from "react-native";
import { AntDesign as Button} from "@expo/vector-icons";

const CheckButton = ({children, ...props}) =>{
	const [buttonState, setButtonState] = useState(style);
	return<Pressable
		style = {{
			...props.style,
			...buttonState.contentView,
		}}
		onPress={()=> setButtonState({
			contentView: {
				...buttonState.contentView,
				backgroundColor: "lightgreen",
			}, 
			check: {
				...buttonState.check,
				color: "green" 
			},
		})
		}
	>
		<Text>{children}</Text>
		<Button style={buttonState.check}
			name="checkcircleo"
			size={24}
			color={buttonState.check.color}/>
	</Pressable>;
};
const style = StyleSheet.create({
	contentView: {
		padding: 5,
		width: 100,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	check:{
		marginLeft: 4,
		color: "black"
	}
});

export default CheckButton;
