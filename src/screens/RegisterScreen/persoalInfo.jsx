import React, {useState} from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { TextInput, HelperText, Button } from 'react-native-paper';


function PersonalInfo({navigation, route}) {
  const [labelName, setName] = useState("");
  const [labelLastName, setLastName] = useState("");
  const [labelEmail, setEmail] = useState("");
  const [labelPassword, setPassword] = useState("");
  const [errorPassword, setPassError] = useState(false);
  const [errorBlank, setBlankError] = useState(false);


  const hasErrorsPassword = () => {
    return !passwordVerify(labelPassword);
  };

  function passwordVerify(password){
    if(password.length > 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z\d]/))
      return true;
    else
      return false;
  }

  const hasErrorsBlank = ()=>{
    return verifyBlankCamps();
  }

  function verifyBlankCamps(){
    return labelName === "" || labelLastName === "" || labelEmail === "" || labelPassword === "";
  }

  return <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <View style={styles.labelsContent}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Informações Pessoais</Text>
          <HelperText type="error" visible={errorBlank}>
              *Preencha todos os campos indicados
          </HelperText>
        </View>
        <TextInput
          label={"*Nome"}
          mode="outlined"
          value={labelName}
          onChangeText={text => setName(text)}
          style={styles.labels}
        />

        <TextInput
          label={"*Último Nome"}
          mode="outlined"
          value={labelLastName}
          onChangeText={text => setLastName(text)}
          style={styles.labels}
        />

        <TextInput
          label={"*Email"}
          mode="outlined"
          textContentType="emailAddress"
          value={labelEmail}
          onChangeText={text => setEmail(text)}
          style={styles.labels}
        />

        <TextInput
          label={"*Senha"}
          mode="outlined"
          value={labelPassword}
          onChangeText={text => setPassword(text)}
          style={styles.labels}
        />
        <HelperText type="error" visible={errorPassword}>
          *A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.
        </HelperText>
      </View>
    </ScrollView>

    <Button mode="contained" style={styles.button} onPress={() => {
          const isBlank = (hasErrorsBlank()) ? true : false;
          const isErrPass = (hasErrorsPassword()) ? true : false;
          if(!isBlank && !isErrPass){
            navigation.navigate('BloodType', {register: {name: labelName, lastName: labelLastName, email: labelEmail, password: labelPassword}});
          }else{
            setBlankError(isBlank);
            setPassError(isErrPass);
          }
        }}>
          Próximo
        </Button>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  labelsContent: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 20
  },

  labels:{
    marginBottom: 10,
    backgroundColor: 'transparent'
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
  }
})

export default PersonalInfo;

