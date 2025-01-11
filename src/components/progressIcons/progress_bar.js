import React from "react";
import { View, Text } from "react-native";
function ProgressBar({width, height, progress = 0, padding}) {
	if(progress > 0 && progress < 1.00)
		progress = (100 * progress);

	return<View style={{width: width, maxWidth: "100%", flex: 1, flexDirection: "row", alignItems: "center" }}>
		<View style={{
			width: "100%",
			height: height, 
			paddingTop: (padding !== undefined) ? padding : height * 0.6,
			paddingBottom: (padding !== undefined) ? padding : height * 0.6,
			paddingHorizontal: (padding !== undefined) ? padding : height * 0.2,
			flex: 1, 
			justifyContent: "center", 
			borderRadius: 10, 
			borderWidth: 1, 
			borderColor: "black" 
		}}>
			<View style={{
				width: `${progress}%`, 
				height: height * 0.9, 
				borderRadius:10, 
				backgroundColor: "black"
			}}/>
		</View><Text style={{marginStart: 5}}>{`${progress}%`}</Text>
	</View>;
}

export default ProgressBar;