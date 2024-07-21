import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import VerseOfDay from "../../patterns/contentBoxes/verse_of_day";
import Announcement from "../../patterns/contentBoxes/announcement";
import MyClass from "../../patterns/contentBoxes/my_class";
import announcement from "../../mocks/announcements";
import dbvData from "../../mocks/dbv";


function Home() {
	return<ScrollView>
		<View style={styles.container}>
			<View style={styles.verseOfDayBox}>
				<VerseOfDay/>
			</View>

			<View style={styles.announcementBox}>
				<Announcement 
					{...announcement}
				/>
			</View>

			<View style={styles.window}>
				<View style={styles.myClassBox}>
					<MyClass
						{...dbvData}
					/>
				</View>
				<View style={{ width: "30%", backgroundColor: "blue", padding: 5, borderRadius: 10, alignItems: "center", justifyContent: "center"}}><Text>Hello</Text></View>
			</View>

		</View>
	</ScrollView>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		paddingTop: 20,
		paddingBottom: 90,
		flexWrap: "wrap",
		alignItems: "center"
	},

	verseOfDayBox: {
		margin: 5,
		width: "95%",
		height: 200
	},

	announcementBox: {
		margin: 5,
		width: "95%"
	},

	myClassBox: {
		padding: 5,
		width: "70%"
	},

	window: {
		margin: 5, 
		width: "95%",
        flexDirection: "row",
        justifyContent: "space-between"
	}
});

export default Home;
