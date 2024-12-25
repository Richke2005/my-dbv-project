import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import PathfinderService from "../../infra/services/pathfinders_api/pathfinderService";
import Avatar from "../../components/avatar";
import { TextInput, Button } from 'react-native-paper';

export default function PersonalInfoScreen({route}) {
    const navigation = useNavigation();
    const {_id, name, last_name, email, age, blood_type, rg, image } = route.params?.pathfinderInfo;

    const [labelName, setName] = React.useState(name);
    const [labelLastname, setLastName] = React.useState(last_name);
    const [labelEmail, setEmail] = React.useState(email);
    const [labelAge, setAge] = React.useState(convertDateToAge(age).toString());
    const [labelBloodType, setBloodType] = React.useState(blood_type);
    const [labelRg, setRg] = React.useState(rg);

    function convertDateToAge(date) {
		return new Date().getFullYear() - new Date(date).getFullYear();
	}

    function convertAgeToDate(age) {
        return new Date(new Date().getFullYear() - age, new Date(age).getMonth(), new Date(age).getDay()).toISOString().split('T')[0];
    }

    function updateData() {
        const updatedUser = {
            name: labelName,
            last_name: labelLastname,
            email: labelEmail,
            age: convertAgeToDate(labelAge),
            blood_type: labelBloodType,
            rg: labelRg,
            image: image
        }

        new PathfinderService()
            .putData(_id, updatedUser)
            .then(() => {
                alert('atualizado com sucesso!');

                navigation.popTo('ProfileScreen', { 
                    pathfinderInfo: updatedUser})
            })
            .catch((error) => console.error(error));
    }
    
  return <ScrollView>
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Avatar 
        style={{marginTop: 20}}
        size={150}
        borderColor="purple"
        source={image}/>
    </View>

    <View style={styles.labelsContainer}>
        <TextInput
        style={styles.labels}
            label="Name"
            value={labelName}
            onChangeText={text => setName(text)}
        />

        <TextInput
        style={styles.labels}
            label="Last Name"
            value={labelLastname}
            onChangeText={text => setLastName(text)}
        />

        <TextInput
        style={styles.labels}
            label="Email"
            value={labelEmail}
            onChangeText={text => setEmail(text)}
        />

        <TextInput
        style={styles.labels}
            label="Data de Nascimento"
            value={labelAge}
            keyboardType="default"
            onChangeText={text => setAge(text)}
        />

        <TextInput
        style={styles.labels}
            label="Tipo Sanguíneo"
            value={labelBloodType}
            onChangeText={text => setBloodType(text)}
        />

        <TextInput
        style={styles.labels}
            label="RG"
            value={labelRg}
            onChangeText={text => setRg(text)}
        />

        <Button 
        style={{marginTop: 20}}
        icon="update" 
        mode="contained" 
        onPress={() => updateData()}>
            Atualizar Dados
        </Button>
    </View>

   
  </ScrollView>;
}

const styles = StyleSheet.create({
    labelsContainer: {
        padding: 20,
        marginTop: 30
    },

    labels: {
        marginBottom: 10,
        backgroundColor: 'transparent'
    }
});