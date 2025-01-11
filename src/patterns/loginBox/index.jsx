import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';

const LoginBox = ({title, navigateTo}) => {
    const [labelEmail, setEmail] = useState("");
    const [labelPassword, setPassword] = useState("");
    const navigation = useNavigation();

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.labelsContainer}>
            <TextInput
            style={styles.labels}
                label="Email"
                value={labelEmail}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
            style={styles.labels}
                label="Password"
                mode="outlined"
                value={labelPassword}
                onChangeText={text => setPassword(text)}
            />
        </View>
        <View>
            <Button
                style={{marginTop: 20}}
                icon="login" 
                mode="contained" 
                onPress={() => navigation.navigate(navigateTo) }>Login</Button>
        </View>
    </View>
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