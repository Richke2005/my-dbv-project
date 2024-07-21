import React from "react";
import { useEffect, useState } from "react";
import {
	StyleSheet, Image, Text, View,
} from "react-native";
import { BibleServices } from "../../infra/services/";
import background from "../../../assets/images/verse_of_day_image.jpg";
import CheckButton from "../../components/check-button/check_buton";
import Loading from "../../components/loading/loading";
import textStyle from "../../components/texts/text_styles";

//TODO: remake the requests when app is advenced
function VerseOfDay() {
	const [verseData, setVerse] = useState({});
	//const [imageData, setImage] = useState([]);
	const { book, chapter, number, text } = verseData;
	// const searchedImages = imageData.map( image => {
	// 	const { src: photoSources } = image;
	// 	const { original: originalPhoto } = photoSources;
	// 	return originalPhoto;
	// });
	
	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {	
		new BibleServices()
			.getVerseOfDay()
			.then( data => setVerse(data));
	}

	if (book == undefined && text == undefined) {
		return <View style={style.verseView}>
			<View style={{alignItems: "center"}}><Loading/></View>
		</View>;
	}

	return (
		<View style={style.verseView}>
			<Image
				source={background} 
				style={style.backgroundImage}
				//source={{uri: searchedImages[0]}}
			/>
			<View style={style.contentView}>
				<View>
					<Text style={textStyle.lightText}>versículo do dia:</Text>
					<Text style={textStyle.VerseOfDay}>{`${book.name} ${chapter}:${number}`}</Text>
				</View>
				<View>
					<Text style={textStyle.italicLihgtText}>{text}</Text>
				</View>
				<CheckButton style={style.checkButtonView}>Complete</CheckButton>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	verseView: {
		position: "relative",
		width: "100%",
		minHeight: 200,
		maxHeight: 350,
		color: "white"
	},

	backgroundImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		borderRadius: 10,
	},

	contentView: {
		height: "100%",
		padding: 15,
		display: "flex",
		justifyContent: "space-around",
	},

	checkButtonView: {
		alignSelf: "flex-end",
		
	},
});

export default VerseOfDay;
