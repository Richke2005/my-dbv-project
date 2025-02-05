import React, { useRef, useMemo, useEffect, useState } from "react";
import { SafeAreaView, Pressable, ScrollView } from "react-native";
import { ClassService } from "../../infra/services/index.js";
import { PressedAvatarGroup, SpacedAvatarGroup } from "../../patterns/avatarGroup/index.js";
import { ActivityIndicator, Avatar, Card, IconButton, MD2Colors} from "react-native-paper";
import BookCard from "../../patterns/imageCard/bookCard.jsx";
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import ImageCard from "../../patterns/imageCard/dailyVerse.jsx";

export default function ClassScreen({route, navigation}){
	const { classId } = route?.params;
	const pathfinders = [];
	const leaderships = [];
	const [classData, setClassData] = useState({});
	const [users, setUsers] = useState([]);
	const [books, setBooks] = useState([]);
	const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

	useEffect(() => {
		fetchClassUsers();
		fetchBooks();
	}, []);

	users.forEach((user) => {
		if(user.classification === "pathfinder"){
			pathfinders.push(user);
		}
		if(user.classification === "leadership"){
			leaderships.push(user);
		}
	});

	function fetchClassUsers() {
		new ClassService()
			.getPathfindersByClassId(classId)
			.then((data) => {
				setClassData(data);
				setUsers(data.users);
			})
			.catch((error) => console.error(error));
	}

	function fetchBooks(){
		new ClassService()
		.getBooksByClassId(classId)
		.then((data) => {
			setBooks(data);
		})
		.catch((error) => console.error(error));
	}

	const handleExpandAction = () => bottomSheetRef.current?.expand();
	const handleCloseAction = () => bottomSheetRef.current?.close();
		
	if (Object.keys(classData).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;
	
	return<SafeAreaView style={{position: "relative", flex: 1}}>
		<ScrollView showsVerticalScrollIndicator={false}>
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

			<Card.Content style={{paddingHorizontal: 0, marginBottom: 20}} t>
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


			<Card.Title 
					title="Livros Da Classe"
					titleStyle={{fontSize: 20, fontWeight: "bold"}}
					/>
			
			<Card.Content style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
				{books.map((book) => (
					<BookCard
						id={book._id}
						key={book._id}
						title={book.title}
						img={book.image}
						style={{width: "45%"}}
						/>)
					)
				}
			</Card.Content>
				
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
							left={(props) => <Avatar.Image {...props} source={{uri: leadership.image}} />}
							right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
						/>
					))}
			</BottomSheetScrollView>
		</BottomSheet>
	</SafeAreaView>;
};