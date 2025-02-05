import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "../../../screens/UserScreen/index.jsx";
import NewsScreen from "../../../screens/NewsScreen/index.jsx";
import UnitScreen from "../../../screens/unitScreen/index.jsx";
import ClassScreen from "../../../screens/ClassScreen/index.jsx";
import PathfinderScreen from "../../../screens/PathfinderScreen/index.jsx";
import BookScreen from "../../../screens/BookScreen/index.jsx";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="UserScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="UserScreen" component={UserScreen} options={{title: "Home", headerBackVisible: false, headerBackButtonMenuEnabled: false}} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} options={{title: "News"}} />
            <Stack.Screen name="ClassScreen" component={ClassScreen} options={{title: "Classe"}} />
            <Stack.Screen name="UnitScreen" component={UnitScreen} options={{title: "Unit"}} />
            <Stack.Screen name="BookScreen" component={BookScreen} options={{title: "Livro"}}/>
            <Stack.Screen name="PathfinderScreen" component={PathfinderScreen} options={{title: "Pathfinder"}} />
        </Stack.Navigator>
    );
}
