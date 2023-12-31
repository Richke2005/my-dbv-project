import { View, Text, Button, StyleSheet } from "react-native"

const Home = ({navigation})=>{
    return<View style={styles.container}>
        <Text >Welcome to the home page</Text>
        <Button 
        title="Login"
        onPress={()=> navigation.navigate("Login") }
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;