import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import TextFild from "../../components/textfild";

const Profile = () => {
	const [newEmail, setEmail] = useState("")
	console.log(newEmail)
	return<ScrollView>
		<View>
            <Text>Name</Text>
            <Text>Email</Text>
            <Text>Phone Number</Text>
        </View>

        <View style={{
			padding: 20
			
		}}>
			<Text>Change Email</Text>
			<TextFild
			placeholder="Novo email"
			onChangeText={setEmail}/>
            <Text>Change Password</Text>
			<TextFild 
			placeholder="Nova Senha"/>
            <Text>Change Phone Number</Text>
			<TextFild 
			placeholder="celular"/>
            <Text>Change Address</Text>
			<TextFild 
			placeholder="Novo endereço"/>
		</View>
	</ScrollView>;
};

const styles = StyleSheet.create({

});

export default Profile;