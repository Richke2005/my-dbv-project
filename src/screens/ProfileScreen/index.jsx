import React from 'react';
import { ScrollView } from 'react-native';
import PathfinderService from '../../infra/services/pathfinders_api/pathfinderService';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from '../../patterns/profilePicture/index.jsx';
import { ActivityIndicator, MD2Colors, Card, Avatar, IconButton} from "react-native-paper";

export default function ProfileScreen({route}) {
	const navigation = useNavigation();
	const [info, setInfo] = React.useState({});

    React.useEffect(() =>{ 
		if(route.params?.pathfinderInfo)
			setInfo(route.params?.pathfinderInfo);
		else
			fetchPathfinderData()

	}, [route.params?.pathfinderInfo]);

    function fetchPathfinderData() {
        new PathfinderService()
            .getDataById("6750f5f8a03995fe58ea69a2")
            .then((data) => setInfo(data))
            .catch((error) => console.error(error));
    }

	function convertDateToAge(date) {
		return new Date().getFullYear() - new Date(date).getFullYear();
	}

	if (Object.keys(info).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;


	return <ScrollView>
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
		right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate("PersonalInfoScreen", {pathfinderInfo: info})} />}
		/>

		<Card.Title
		title="Settings"
		left={(props) => <Avatar.Icon {...props} icon="cog" />}
		right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate("PersonalInfoScreen", {pathfinderInfo: info})} />}
		/>

		<Card.Title
		title="Shoppings"
		left={(props) => <Avatar.Icon {...props} icon="shopping" />}
		right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate("PersonalInfoScreen", {pathfinderInfo: info})} />}
		/>

		<Card.Title
		title="Logout"
		left={(props) => <Avatar.Icon {...props} icon="logout" />}
		right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
		/>
	</ScrollView>
}