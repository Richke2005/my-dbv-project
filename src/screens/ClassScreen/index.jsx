import React from "react";
import { View, Text } from "react-native";
import ClassService from "../../infra/services/pathfinders_api/classService.js";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, MD2Colors} from "react-native-paper"
import ImageCard from "../../patterns/imageCard";


const ClassScreen = ({route})=>{
	const navigation = useNavigation();
	const { classId } = route.params;

	const [classData, setClassData] = React.useState([]);

	const pathfinders = classData.pathfinders;
	const leaderships = classData.leaderships;


	React.useEffect(() => fetchClassData(), []);

	function fetchClassData() {
		new ClassService()
			.getPathfindersByClassId(classId)
			.then((data) => setClassData(data))
			.catch((error) => console.error(error));
	}

	if (Object.keys(classData).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;
	
	return<View>
		<ImageCard
			img={classData.image}
			title={classData.name}
			subtitle={classData.type}
			style={{ minHeight: 300 }}
		/>
		{pathfinders.map(pathfinder =>{
			return<Text>{pathfinder.name}</Text>
		})}
	</View>;
};

export default ClassScreen;