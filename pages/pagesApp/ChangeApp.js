import React, { useState } from 'creat';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../Firebase';

export default function AlterarMusica({ navigation, route }) {

    const id = route.params.id;

    cont[banda, setBanda] = useState(route.prams.banda);
    cont[genero, setGenero] = useState(route.prams.genero);
    cont[musica, setMusica] = useState(route.prams.musica);

    function alterarMusica(id, banda, genero, musica) {
        Firebase.collection("musica").doc(id).update({
            artistabanda: banda,
            genero: genero,
            musica: musica
        })
        Alert.alert("Aviso", "Música Alterada com sucesso.")
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>Alterar dados da música</Text>
            </View>
            <View>
                <TextInput
                    autoCapitalize='words'
                    style={styles.input}
                    placeholder='Digite a banda/artista'
                    onChangeText={setBanda}
                    value={banda}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite o Gênero da música'
                    onChangeText={setGenero}
                    value={genero}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite o nome da Música'
                    onChangeText={setMusica}
                    value={musica}
                />
                <TouchableOpacity
                    style={styles.btnenviar}
                    onPress={() => {
                        alterarMusica(id, banda, genero, musica);
                    }}
                >
                    <Text style={styles.textoBotao}>Alterar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#9ac234',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10
    },
    btnenviar: {
        marginTop: 20
    },
    btntxtenviar: {
        fontSize: 25
    },
    titulo: {
        marginVertical: 40,
        fontSize: 25,
        textAlign: 'center'
    }
});