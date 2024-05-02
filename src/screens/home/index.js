import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import VerseOfDay from "../../patterns/contentBoxes/verse_of_day";
import Announcement from "../../patterns/contentBoxes/announcement";
import MyClass from "../../patterns/contentBoxes/my_class";
import announcement from "../../mocks/announcements";
import dbvData from "../../mocks/dbv";


function Home() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<VerseOfDay/>
				<View style={styles.window}>
					<Announcement 
						{...announcement}
					/>
					<MyClass
						{...dbvData}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		alignItems: "center",
	},
	window: {
		flex: 1,
		width: "85%",
		minWidth: "50%",
		flexDirection: "row",
		flexWrap: "wrap"
	}
});

export default Home;
