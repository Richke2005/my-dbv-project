import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../../screens/HomeScreen/index.jsx";
import NewsScreen from "../../../screens/NewsScreen/index.jsx";
import UnitScreen from "../../../screens/unitScreen/index.jsx";
import ClassScreen from "../../../screens/ClassScreen/index.jsx";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home"}} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} options={{title: "News"}} />
            <Stack.Screen name="ClassScreen" component={ClassScreen} options={{title: "Class"}} />
            <Stack.Screen name="UnitScreen" component={UnitScreen} options={{title: "Unit"}} />
        </Stack.Navigator>
    );
}
