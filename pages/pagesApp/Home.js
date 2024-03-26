import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import Firebase from '../Firebase';
import { MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [diario, setDiario] = useState([]);
  function deleteDiario(id){
    Firebase.collection("diario").doc(id).delete();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Meu diário</Text>

      <TextInput
        style={styles.input}
        multiline = {true}
        numberOfLines = {6}
        placeholder='Querido diário...'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 35,
    color: "#ffff"
  },
  input: {
    backgroundColor: "#ffff",
    width: "80%",
    height: "80%",
    borderRadius: 10
  }
});
