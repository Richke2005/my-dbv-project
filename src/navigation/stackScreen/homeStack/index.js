import React from "react";
import { Text, View } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../../screens/LoginScreen/index.jsx";
import HomeScreen from "../../../screens/HomeScreen/index.jsx";
import NewsScreen from "../../../screens/NewsScreen/index.jsx";
import UnitScreen from "../../../screens/unitScreen/index.jsx";
import ClassScreen from "../../../screens/ClassScreen/index.jsx";
import PathfinderScreen from "../../../screens/PathfinderScreen/index.jsx";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Login", headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home", headerBackVisible: false, headerBackButtonMenuEnabled: false}} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} options={{title: "News"}} />
            <Stack.Screen name="ClassScreen" component={ClassScreen} options={{title: "Class"}} />
            <Stack.Screen name="UnitScreen" component={UnitScreen} options={{title: "Unit"}} />
            <Stack.Screen name="PathfinderScreen" component={PathfinderScreen} options={{title: "Pathfinder"}} />
        </Stack.Navigator>
    );
}
