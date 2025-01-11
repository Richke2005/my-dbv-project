import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import LoginBox from "../../patterns/loginBox/index.jsx";

export default function LoginScreen() {
    const navigation = useNavigation();
    
    return <SafeAreaView style={{flex: 1, height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <View style={{height: "60%", width: "90%"}}>
            <LoginBox 
                title="Login" 
                navigateTo={"HomeScreen"} />
        </View>
    </SafeAreaView>
}