import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassScreen from "../../../screens/ClassScreen/index.jsx";
import PathfinderScreen from "../../../screens/PathfinderScreen/index.jsx";

const Stack = createNativeStackNavigator();

export default function ClassStack() {
    return (
        <Stack.Navigator initialRouteName="ClassScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="ClassScreen" component={ClassScreen} options={{title: "Class"}}/>
        </Stack.Navigator>
    );
}
