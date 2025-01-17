import React, { useState } from "react";
import { AuthService } from "../../infra/services/index"
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';

const LoginBox = ({title, navigateTo}) => {
    const [labelEmail, setEmail] = useState("");
    const [labelPassword, setPassword] = useState("");
    const navigation = useNavigation();
    const authService = new AuthService();

    function isEmptyCamps(){
        if(labelEmail === "" || labelPassword === ""){
            alert("Preencha todos os campos");
            return true;
        }
        return false;
    }

    return<KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}>   
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.labelsContainer}>
                <TextInput
                style={styles.labels}
                    label="Email"
                    value={labelEmail}
                    mode="outlined"
                    textContentType="emailAddress"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                style={styles.labels}
                    label="Password"
                    mode="outlined"
                    textContentType="password"
                    secureTextEntry={true}
                    passwordRules="required: lower; required: upper; required: digit; required: [-]; minlength: 8;"
                    value={labelPassword}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View>
                <Button
                    style={{marginTop: 20}}
                    icon="login" 
                    mode="contained" 
                    onPress={async () => {
                        if(!isEmptyCamps()){
                            const response = await authService.login({email: labelEmail, password: labelPassword});
                            if(response.status === 200){
                                const data = await response.json();
                                try {
                                    await AsyncStorage.setItem('token', data.accessToken);
                                    navigation.navigate(navigateTo);
                                }catch(e){
                                    console.log(e);
                                }
                            }else{
                                alert("Usuário ou senha inválidos");
                            }
                        }
                    }}>Login</Button>
            </View>
        </View>
    </KeyboardAvoidingView> 
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        width: "100%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: "#fff",
        justifyContent: "space-around"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold"
    },

    labelsContainer: {
        marginTop: 30
    },

    labels: {
        marginBottom: 10,
        backgroundColor: 'transparent'
    }
});

export default LoginBox;