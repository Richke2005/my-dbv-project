import React from "react";
import { ScrollView, StyleSheet, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BibleServices from "../../infra/services/digital_bible_api/bible_services";
import PathfinderService from "../../infra/services/pathfinders_api/pathfinderService";
import ImageCard from "../../patterns/imageCard";
import { ActivityIndicator, MD2Colors, Card, Avatar, IconButton, Button } from "react-native-paper";

export default function HomeScreen() {
	const [pathfinderData, setPathfinderData] = React.useState({});
	const [checkButton, setCheckButton] = React.useState(false);
	const navigation = useNavigation();
	const scaleValue = React.useRef(new Animated.Value(1)).current;

	React.useEffect(() => {
		fetchPathfinderData();
	}, []);

	function fetchPathfinderData() {
		new PathfinderService()
			.getDataById("6750f5f8a03995fe58ea69a2")
			.then((data) => setPathfinderData(data))
			.catch((error) => console.error(error));
	}

	function animateButton() {
		Animated.sequence([
			Animated.timing(scaleValue, {
				toValue: 1.2,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: true,
			}),
			Animated.timing(scaleValue, {
				toValue: 1,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: true,
			}),
		]).start();
	}

	function completeReading() {
		if (!checkButton) {
			setCheckButton(true);
			const currentTalents = pathfinderData.talents;
			new PathfinderService()
				.putData("6750f5f8a03995fe58ea69a2", { talents: currentTalents + 10 })
				.then(() => {
					fetchPathfinderData();
					animateButton();
				});
		}
	}

	if (Object.keys(pathfinderData).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;

	return <ScrollView>
			<ImageCard
				title="Proverbs 3:5-6"
				text="Trust in the Lord with all your heart
    			and lean not on your own understanding;
				in all your ways submit to him,
    			and he will make your paths straight."
				img="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80"
			>
				<Animated.View
					style={{
						transform: [{ scale: scaleValue }],
						alignSelf: "flex-end"
					}}
				>
					<Button
						icon="check"
						mode="contained"
						style={{
							width: 150,
							marginTop: 5,
							marginBottom: 10,
							marginRight: 5,
						}}
						onPress={() => completeReading()}
					>
						Complete
					</Button>
				</Animated.View>
			</ImageCard>

			<Card style={{ margin: 10 }}
			onPress={() => navigation.navigate("NewsScreen")}>
				<Card.Title
					title="News"
					titleStyle={{ fontSize: 20 }}
					subtitle="Tomorrow we have a special event that you can't miss!"
					left={(props) => <Avatar.Icon {...props} icon="newspaper" />}
					right={(props) => <IconButton {...props} icon="chevron-right" onPress={() =>  navigation.navigate("NewsScreen")}/>}
				/>
			</Card>

			<ImageCard
				title={pathfinderData.class.name}
				subtitle={pathfinderData.club.name}
				img={pathfinderData.class.image}
				style={{ minHeight: 400 }}
				onPress={() => navigation.navigate("ClassScreen")}
			/>

			<ImageCard
				title={pathfinderData.unit.name}
				subtitle={pathfinderData.club.name}
				img={pathfinderData.unit.image}
				style={{ minHeight: 400 }}
				onPress={() => navigation.navigate("UnitScreen")}
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
