import React from "react";
import { useEffect, useState } from "react";
import {
	StyleSheet, Image, Text, View,
} from "react-native";
import { getRandomVerse, curatedPhoto } from "../../infra/services/";
import background from "../../../assets/images/verse_of_day_image.jpg"
import Loading from "../../components/loading/loading";
import textStyle from "../../components/texts/text_styles";

//TODO: remake the requests when app is advenced
function VerseOfDay() {
	const [verseData, setVerse] = useState([]);
	//const [imageData, setImage] = useState([]);
	const {
		book, chapter, number, text,
	} = verseData;

	// const searchedImages = imageData.map( image => {
	// 	const { src: photoSources } = image;
	// 	const { original: originalPhoto } = photoSources;
	// 	return originalPhoto;
	// });

	
	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {	
		/*getRandomVerse("acf")
			.then((data) =>*/ setVerse({ 
				book: {
					name: "Isaias"
				},
				chapter: "4",
				number: "5",
				text: " E criará o Senhor sobre todo o lugar do monte de Sião, e sobre as suas assembléias, uma nuvem de dia e uma fumaça, e um resplendor de fogo flamejante de noite; porque sobre toda a glória haverá proteção."
			})//);

		// curatedPhoto(1)
		//  	.then(data => {
		//  		const { photos } = data;
		//  		setImage();
		//  	});
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
			<View
				style={style.contentView}
			>
				<View>
					<Text style={textStyle.lightText}>versículo do dia:</Text>
					<Text style={textStyle.VerseOfDay}>{`${book.name} ${chapter}:${number}`}</Text>
				</View>
				<View>
					<Text style={textStyle.italicLihgtText}>{text}</Text>
				</View>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	verseView: {
		position: "relative",
		marginTop: 10,
		marginBottom: 5,
		width: "85%",
		height: 200,
		maxHeight: 300,
		color: "white"
	},

	backgroundImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		objectFit: "cover",
		borderRadius: 10,
	},

	contentView: {
		height: "100%",
		padding: 15,
		display: "flex",
		justifyContent: "space-around",
	},
});

export default VerseOfDay;
