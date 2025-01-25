import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SocialClubScreen from "../../../screens/SocialClubScreen/index.jsx";


const Stack = createNativeStackNavigator();

export default function SocialClubStack() {
    return (
        <Stack.Navigator initialRouteName="SocialClubScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="SocialClubScreen" component={SocialClubScreen} options={{title: "Clubs"}}/>
        </Stack.Navigator>
    );
}
