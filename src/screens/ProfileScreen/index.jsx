import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function ProfileScreen() {
	return <ScrollView>
		<Card>
			<Card.Title title="Profile" />
			<Card.Content>
				<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
			</Card.Content>
		</Card>
	</ScrollView>
}