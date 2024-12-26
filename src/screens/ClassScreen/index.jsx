import React from "react";
import { View } from "react-native";
import ClassService from "../../infra/services/pathfinders_api/classService.js";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "../../patterns/imageCard";


const ClassScreen = ({route})=>{
	const navigation = useNavigation();
	const { classId } = route.params;

	const [classData, setClassData] = React.useState({});

	React.useEffect(() => fetchClassData(), []);

	function fetchClassData() {
		new ClassService()
			.getDataById(classId)
			.then((data) => setClassData(data))
			.catch((error) => console.error(error));
	}
	
	return<View>
		<ImageCard
			img={classData.image}
			title={classData.name}
			subtitle={classData.type}
			style={{ minHeight: 300 }}
		/>
	</View>;
};

export default ClassScreen;