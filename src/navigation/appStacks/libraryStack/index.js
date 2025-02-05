import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "../../../screens/LibraryScreen/index.jsx";
import BookScreen from "../../../screens/BookScreen/index.jsx";


const Stack = createNativeStackNavigator();

export default function LibraryStack() {
    return (
        <Stack.Navigator initialRouteName="LibraryScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="LibraryScreen" component={LibraryScreen} options={{title: "Livros"}} />
            <Stack.Screen name="BookScreen" component={BookScreen} options={{title: "Livro"}}/>
        </Stack.Navigator>
    );
}
