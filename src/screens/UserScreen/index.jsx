import React from "react";
import { SafeAreaView, ScrollView, Animated, Easing } from "react-native";
import { ProfileService } from "../../infra/services/index.js";
import ImageCard from "../../patterns/imageCard/dailyVerse.jsx";
import { ActivityIndicator, MD2Colors, Card, Avatar, IconButton, Button } from "react-native-paper";

export default function UserScreen({route, navigation}) {
	const [userData, setUserData] = React.useState({});
	const [checkButton, setCheckButton] = React.useState(false);
	const scaleValue = React.useRef(new Animated.Value(1)).current;

	React.useEffect(() => {
		fetchUserData();
	}, []);

	function fetchUserData() {
		new ProfileService()
		.getProfile()	
		.then((data) => {
			setUserData(data);
		})
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
			const currentTalents = userData.talents;
			new ProfileService().updateProfile({ talents: currentTalents + 10 })
				.then(() => {
					fetchUserData();
					animateButton();
				});
		}
	}

	if (Object.keys(userData).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;

	return <SafeAreaView style={{ flex: 1 }}>
		<ScrollView>
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
			
			{ userData.class &&
			//se condição então renderiza o componente
			<ImageCard
				title={userData.class.name}
				subtitle={userData.club.name}
				img={userData.class.image}
				style={{ minHeight: 400 }}
				onPress={() => {
					if(!userData.class._id)
						alert("You haven't a class yet");
					else
						navigation.navigate("ClassScreen", { classId: userData.class._id })
			}}
			/>}

			{ userData.unit &&
			<ImageCard
				title={userData.unit.name}
				subtitle={userData.club.name}
				img={userData.unit.image}
				style={{ minHeight: 400 }}
				onPress={() => {
					if(!userData.unit._id)
						alert("You haven't a unit yet");
					else
						navigation.navigate("ClassScreen", { classId: userData.unit._id })
				}}
			/>}
			</ScrollView>
	</SafeAreaView>;
}