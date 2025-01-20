import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../../screens/ProfileScreen/index.jsx";
import PersonalInfoScreen from "../../../screens/PersonalInfoScreen/index.jsx";

const Stack = createNativeStackNavigator();

export default function ProfileStack({logout}) {

    const executeApp = () => {
        logout()
    }

    return (
        <Stack.Navigator initialRouteName="ProfileScreen" 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name="ProfileScreen" options={{headerShown: false}}>
                {(props) => <ProfileScreen {...props} onLogout={executeApp}/>}
            </Stack.Screen>
            <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} options={{title: "Informations"}}/>
        </Stack.Navigator>
    );
}
