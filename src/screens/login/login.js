import { View, Text, TextInput, StyleSheet } from "react-native";

const Login = ()=>{
    return<View style={styles.container}>
        <View style={styles.loginBox}>
            <TextInput 
            onChangeText={(target)=> console.log(target)}
            style={styles.input}
            placeholder="Your email here"/>
            <TextInput
            onChangeText={(target)=> console.log(target)}
            style={styles.input}
            placeholder="password"
            />
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
        width: "60%",
        borderBottomWidth: 1,
        margin: 12,
        padding: 10
      }
  });

export default Login;