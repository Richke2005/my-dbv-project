import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../../screens/ProfileScreen/index.jsx";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName="ProfileScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: "Profile"}}/>
        </Stack.Navigator>
    );
}
