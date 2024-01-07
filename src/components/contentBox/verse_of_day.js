import React from "react";
import { useEffect, useState } from "react";
import {
	StyleSheet, Image, Text, View,
} from "react-native";
import { getRandomVerse, curatedPhoto } from "../../services/index";

function VerseOfDay() {
	const [verseData, setVerse] = useState([]);
	const [imageData, setImage] = useState([]);
	const {
		book, chapter, number, text,
	} = verseData;

	const searchedImages = imageData.map( image => {
		const { src: photoSources } = image;
		const { original: originalPhoto } = photoSources;
		return originalPhoto;
	});

	
	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {	
		getRandomVerse("acf")
			.then((data) => setVerse(data));

		curatedPhoto(1)
			.then(data => {
				const { photos } = data;
				setImage(photos);
			});
	}

	if (book == undefined && text == undefined) {
		return <Text>Loading...</Text>;
	}

	return (
		<View
			style={style.verseView}
			onTouchStart={() => console.log("ampliar")}
		>
			<Image
				style={style.backgroundImage}
				source={searchedImages[0]}
			/>
			<View
				style={style.contentView}
			>
				<View>
					<Text style={{ color: "white" }}>versículo do dia:</Text>
					<Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{`${book.name} ${chapter}:${number}`}</Text>
				</View>
				<View>
					<Text style={{ color: "white" }}>{text}</Text>
				</View>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	verseView: {
		position: "relative",
		margin: 10,
		width: "85%",
		height: 200,
		maxHeight: 300,
	},

	backgroundImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		objectFit: "fill",
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
