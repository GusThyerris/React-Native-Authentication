import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';  

export default function Register({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaC, setSenhaC] = useState('');

  const confirmPassw = () => {
    if(senha != senhaC){
      alert("Senhas não coincidem")
    }
    else if(senha == "" || senhaC == "" || email == ""){
      alert("Preencha todos os campos")
    }
    else{
      alert("Conta criada com sucesso");
      handleRegister()
      navigation.navigate("Login")
    }
  }

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorMessage);
        });
      }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Criar conta</Text>
        
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          placeholderTextColor={'black'}
          value={email}
          onChangeText={(val) => {setEmail(val);}}
        />

        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          placeholderTextColor={'black'}
          secureTextEntry={true}
          value={senha}
          onChangeText={(val) => {setSenha(val);}}
        />

        <TextInput
          style={styles.input}
          placeholder='Confirme a senha'
          placeholderTextColor={'black'}
          secureTextEntry={true}
          value={senhaC}
          onChangeText={(val) => {setSenhaC(val);}}
        />

        <TouchableOpacity style={styles.btn}
          onPress={confirmPassw}
        >
          <Text style={styles.btntxt} >Registrar</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B0082',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        marginTop: 40,
        fontWeight: 'bold',
        color: '#ffff'
    },
    input: {
      borderWidth: 1.2,
      borderColor: '#ffff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      width:  '80%',
      borderRadius: 10,
      margin: 15,
      fontSize: 20,
      backgroundColor: '#ffff',
      marginBottom: 20
  },
  btn: {
    borderWidth: 1,
    borderColor: '#ffff',
    paddingHorizontal: 10,
    paddingVertical: 8,    
    borderRadius: 30,
    width: "60%",
    backgroundColor: '#ffff',
    marginBottom: 20
  },
  btntxt: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
