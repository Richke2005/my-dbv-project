import React, { useRef, useMemo } from "react";
import { SafeAreaView, Pressable, ScrollView } from "react-native";
import { ClassService }from "../../infra/services/index.js";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Avatar, Card, IconButton, MD2Colors} from "react-native-paper"
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import ImageCard from "../../patterns/imageCard";
import { PressedAvatarGroup, SpacedAvatarGroup } from "../../patterns/avatarGroup/index.js";

const ClassScreen = ({route, navigation}) => {
	const { classId } = route.params;
	const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

	const [classData, setClassData] = React.useState({});
	
	const {users} = classData;

	console.log(users);
	
	// const leaderships = users.map((leadership) =>{
	// 	if(leadership.classification === "leadership"){
	// 		return leadership;
	// 	}
	// });

	const handleExpandAction = () => bottomSheetRef.current?.expand();
	const handleCloseAction = () => bottomSheetRef.current?.close();


	React.useEffect(() => fetchClassData(), []);

	function fetchClassData() {
		new ClassService()
			.getPathfindersByClassId(classId)
			.then((data) => setClassData(data))
			.catch((error) => console.error(error));
	}
		

	if (Object.keys(classData).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;
	
	return<SafeAreaView style={{position: "relative", flex: 1}}>
		{/* <ScrollView showsVerticalScrollIndicator={false}>
			<Pressable
				style={{
					alignSelf: "flex-end",
					marginTop: 20,
					paddingHorizontal: 10
					}}
				onLongPress={handleExpandAction}>
					<PressedAvatarGroup max={3}>
						{leaderships.map((leadership) => (
							<Avatar.Image
								key={leadership._id}
								size={50}
								source={{ uri: leadership.image }}
							/>
						))}
					</PressedAvatarGroup>
				</Pressable>

				<ImageCard
					img={classData.image}
					title={classData.name}
					subtitle={classData.type}
					style={{ minHeight: 300 }}
				/>
				
				
				<Card.Title 
				title="Desbravadores"
				titleStyle={{fontSize: 20, fontWeight: "bold"}}
				/>

				<Card.Content style={{paddingHorizontal: 0}}>
					<SpacedAvatarGroup max={5} spacement={10}>
						{pathfinders.map((pathfinder) => (
							<Avatar.Image
								key={pathfinder._id}
								size={70}
								source={{ uri: pathfinder.image }}
							/>
						))}
					</SpacedAvatarGroup>
				</Card.Content>

				<Card style={{ margin: 10 }}>
					<Card.Title
						title="Livro"
						subtitle={`${classData.name} - ${classData.type}`}
						titleStyle={{fontSize: 20}}
						left={(props) => <Avatar.Icon {...props} icon="book" />}
					/>
				</Card>
		</ScrollView>

		<BottomSheet
			ref={bottomSheetRef}
			index={-1}
			snapPoints={snapPoints}
			backgroundStyle={{backgroundColor: "#FFF"}}
			enablePanDownToClose={true}
			>
			<BottomSheetScrollView style={{
				flex: 1
				}}>
					<Card.Title
						title="Liderança"
						titleStyle={{fontSize: 20, fontWeight: "bold"}}
					/>
					{leaderships.map((leadership) => (
						<Card.Title
							key={leadership._id}
							title={leadership.name}
							subtitle={leadership.function}
							left={(props) => <Avatar.Image {...props} source={{uri: leadership.image}} />}
							right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
						/>
					))}
			</BottomSheetScrollView>
		</BottomSheet> */}
	</SafeAreaView>;
};

export default ClassScreen;