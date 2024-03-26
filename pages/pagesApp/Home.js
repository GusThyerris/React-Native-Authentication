import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import Firebase from '../Firebase';
import { MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [diario, setDiario] = useState([]);
  function deleteDiario(id){
    Firebase.collection("diario").doc(id).delete();

    Alert.alert("O diário foi deletado.");
  }

  useEffect(() => {
    Firebase.collection("diario").onSnapshot((query) => {
      const lista = [];
      query,forEach((doc) => {
        lista.push({...doc.data(), id: DOMRectList.id});
      });
    setDiario(lista);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}> Lista de Dias</Text>
      </View>

      <FlatList
      data={diario}
      renderItem={({item}) => {
        return(
          <View style={styles.musicas}>

            <TouchableOpacity onPress={() => navigation.navigate("ChangeApp", {
              id: item.id,
              banda: item.artistabanda,
              genero: item.genero,
              musica: item.musica
            })}>

              <View style={styles.itens}>

                <Text style={styles.titulobanda}> Artista/Banda: <Text style={styles.textobanda}> {item.artistabanda} </Text></Text>
                <Text style={styles.titulobanda}> Genêro: <Text style={styles.textobanda}> {item.genero} </Text></Text>
                <Text style={styles.titulobanda}> Música: <Text style={styles.textobanda}> {item.musica} </Text></Text>
              
              </View>

            </TouchableOpacity>

            <View style={styles.botaodeletar}>

              <TouchableOpacity onPress={() => {deleteMusica(item.id)}}>
                <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
              </TouchableOpacity>
            
            </View>

          </View>
        );
      }}
      />
      <TouchableOpacity style={styles.addbutton} onPress={() => navigation.navigate("RegisterApp")}>
        <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B0000'
  },
  titulo: {
    marginTop: 50,
    fontSize: 35,
    color: "#ffff"
  },
  itens: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10
  },
  titulobanda: {
    fontSize: 13,
    color: '#fff'
  },
  textobanda: {
    fontFamily: 15,
    fontWeight: "bold"
  },
  musicas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#0000CD',
    borderRadius: 10
  },
  botaodeletar: {
    textAlignVertical: 'center',
    marginVertical: 10
  },
  addbutton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    position: 'absolute',
    left: 20,
    bottom: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
