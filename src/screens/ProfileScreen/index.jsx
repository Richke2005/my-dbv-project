import React from 'react';
import { ScrollView, Text, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileService } from '../../infra/services/index.js';
import ProfilePicture from '../../patterns/profilePicture/index.jsx';
import { ActivityIndicator, MD2Colors, Card, Avatar, Button, IconButton, Portal, Dialog } from "react-native-paper";

export default function ProfileScreen({route, navigation, onLogout}) {
	const [info, setInfo] = React.useState({});
	const [visible, setVisible] = React.useState(false);


	const handleLogout = async () => {
		await AsyncStorage.removeItem('token');
		onLogout();
	}

    React.useEffect(() =>{ 
		if(route.params?.userInfo)
			setInfo(route.params?.userInfo);
		else
			fetchUserData()

	}, [route.params?.userInfo]);

    function fetchUserData() {
        new ProfileService()
            .getProfile()
            .then((data) => setInfo(data))
            .catch((error) => console.error(error));
    }

	function convertDateToAge(date) {
		return new Date().getFullYear() - new Date(date).getFullYear();
	}


	if (Object.keys(info).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;


	return <SafeAreaView>
		<ScrollView scrollEnabled={true}>
			<ProfilePicture
			style={{marginTop: 20}} 
			name={info.name} 
			source={info.image}
			info={[`${info.email}`, `${convertDateToAge(info.age)} Anos`]}
			size={200} 
			borderColor="purple"
			/>
			
			<Card.Title
			title="Edit Profile"
			left={(props) => <Avatar.Icon {...props} icon="account" />}
			right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate("PersonalInfoScreen", {userInfo: info})} />}
			/>

			<Card.Title
			title="Settings"
			left={(props) => <Avatar.Icon {...props} icon="cog" />}
			right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate("PersonalInfoScreen", {userInfo: info})} />}
			/>

			<Card.Title
			title="Shoppings"
			left={(props) => <Avatar.Icon {...props} icon="shopping" />}
			right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate("PersonalInfoScreen", {userInfo: info})} />}
			/>

			<Card.Title
			title="Logout"
			left={(props) => <Avatar.Icon {...props} icon="logout" />}
			right={(props) => <IconButton {...props} icon="chevron-right" onPress={()=> setVisible(true)} />}
			/>
		</ScrollView>
		<Portal>
			<Dialog visible={visible} onDismiss={() => setVisible(false)}>
			<Dialog.Content>
				<Text variant="bodyMedium" style={{color: "red"}}> Tem certeza que deseja sair ?</Text>
			</Dialog.Content>
			<Dialog.Actions>
				<Button onPress={() => setVisible(false)}>Cancel</Button>
				<Button onPress={() => handleLogout()}>Ok</Button>
			</Dialog.Actions>
			</Dialog>
        </Portal>
	</SafeAreaView>
}