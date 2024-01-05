import { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";

const Login = ({navigation})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return<View style={styles.container}>
        <View style={styles.loginBox}>
            <TextInput
            //Animate with push up
            onFocus={()=> console.log("Enter email")}
            onChangeText={(target)=> setEmail(target)}
            style={styles.input}
            placeholder="Your email here"/>
            <TextInput
            //Animate with push up
            onFocus={()=> console.log("Enter password")}
            onChangeText={target=> setPassword(target)}
            style={styles.input}
            placeholder="password"
            />
            <Pressable 
            onPressIn={()=> {
                if(email == "richardke18@gmail.com" && password == "Kend2005@"){
                    navigation.navigate("home");
                }else{
                    console.log("Wrong email or password");
                }
            }}>
                <Text>Login</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    loginBox:{
        width: 300,
        height: 400,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        width: "70%",
        borderBottomWidth: 1,
        margin: 12,
        padding: 10
      }
  });

export default Login;