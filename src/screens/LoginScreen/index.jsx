import React from "react";
import { SafeAreaView, View } from "react-native";
import LoginBox from "../../patterns/loginBox/index.jsx";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({onStoreToken}) {
    const storeToken = async (token)=>{
        try {
            AsyncStorage.setItem('token', token).then(()=>{
                onStoreToken();
            });
        }catch(e){
            console.log(e);
        }
    }
    
    return <SafeAreaView style={{flex: 1, height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <View style={{height: "60%", width: "90%"}}>
            <LoginBox
                title="Login" 
                onLogin={storeToken} />
        </View>
    </SafeAreaView>
}