import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BibleServices from "../../infra/services/digital_bible_api/bible_services";
import PathfinderService from "../../infra/services/pathfinders_api/pathfinderService";
import ImageCard from "../../patterns/imageCard";
import {ActivityIndicator, MD2Colors, Card, Avatar, IconButton } from "react-native-paper";
import image1 from "../../../assets/images/verse_of_day_image.jpg";
import image2 from "../../../assets/images/pathfinders_lenço.png";

export default function HomeScreen() {
	const [verseData, setVerse] = React.useState({});
	const [pathfinderData, setPathfinderData] = React.useState({});
	const navigation = useNavigation();
	
	React.useEffect(() => {
		fetchVerse();
		fetchPathfinderData();
	}, []);

	function fetchVerse() {
		new BibleServices().getVerseOfDay()
			.then((data) => setVerse(data))
			.catch((error) => console.error(error));
	}
	
	function fetchPathfinderData() {
		new PathfinderService().getDataById("6750f5f8a03995fe58ea69a2")
			.then((data) => setPathfinderData(data))
			.catch((error) => console.error(error));
	}

	console.log(verseData)

	//if(Object.keys(pathfinderData).length === 0) return <ActivityIndicator size={50} style={{marginTop: 20}} animating={true} color={MD2Colors.red800} />;
	
	return <ScrollView>
			<ImageCard
			title="Proverbs 3:5-6"
			text="Trust in the Lord with all your heart
    		and lean not on your own understanding;
			6 in all your ways submit to him,
    		and he will make your paths straight."
			img={image1}
			/>

			<Card style={{margin: 10}}>
				<Card.Title
				title="Anounciment"
				titleStyle={{fontSize: 20}}
				subtitle="subTitle"
				left={(props) => <Avatar.Icon {...props} icon="folder" />}
    			right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}/>
			</Card>

			<ImageCard
			title={"Falcões"}
			subtitle={"Primímicias"}
			img={image2}
			style={{minHeight: 400}}
			onTouchEnd={() => navigation.navigate("UnitScreen")}
			/>

			<ImageCard
			title="Companheiros"
			img={image2}
			style={{minHeight: 400}}
			onTouchEnd={() => navigation.navigate("ClassScreen")}
			/>
	</ScrollView>;
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});