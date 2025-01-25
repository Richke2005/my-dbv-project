import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "../../../screens/LibraryScreen/index.jsx";



const Stack = createNativeStackNavigator();

export default function ClassBookStack() {
    return (
        <Stack.Navigator initialRouteName="LibraryScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="LibraryScreen" component={LibraryScreen} options={{title: "Livros"}} />
        </Stack.Navigator>
    );
}
