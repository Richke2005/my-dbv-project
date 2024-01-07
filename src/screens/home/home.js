import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import VerseOfDay from "../../components/contentBox/verse_of_day";

function Home() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<VerseOfDay />
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
});

export default Home;
