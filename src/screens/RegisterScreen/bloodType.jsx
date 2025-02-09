import React, {useState} from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { Button, Card, Checkbox } from 'react-native-paper';

function BloodType({navigation, route}) {
    const register = route.params?.register
    const [checked, setChecked] = useState(false);
    const [bloodType, setBloodType] = useState("");

    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    console.log(bloodType);

  return <SafeAreaView style={{flex: 1}}>
    <ScrollView>
        <View style={styles.content}>
            <View style={styles.titleContent}>
                <Text style={styles.title}>Tipo Sanguíneo</Text>
            </View>
        
            <View style={styles.bloodTypes}>
                {bloodTypes.map((blood, index) => {
                    return <Checkbox.Item 
                        key={blood} 
                        label={blood} mode="android" 
                        status={index ===  bloodTypes.indexOf(bloodType) ? 'checked' : 'unchecked'} onPress={() => {
                        setBloodType(bloodTypes[index]);
                    }}/>
                })}
            </View>
        </View>
    </ScrollView>

    <Button mode="contained" 
        style={styles.button} 
        onPress={() => navigation.navigate('PersonalInfo', {register: {...register, bloodType: bloodType}})}>
        Próximo
    </Button>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 20
    },

    titleContent: {
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    title: {
        fontSize: 24,
        marginBottom: 20
    },

    button: {
        margin: 20,
        bottom: 0
    },

    bloodTypes:{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 10
    }
})

export default BloodType;