import React, { useState } from 'react';
import { View, text, TextInput, Stylesheet, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../Firebase';

export default function RegisterApp({ navigation }){
    const [musica, setMusica] = useState(null);
    const [genero, setGenero] = useState(null);
    const [banda, setBanda] = useState(null);

    function RegisterApp() {
        Firebase.collection('musica').add({
            artistabanda: banda,
            genero: genero,
            musica: musica
        });

        setBanda({ banda: '' })
        setGenero({ genero: '' })
        setMusica({ musica: '' })
        Alert.alert("Cadastro", "Música cadastrada com sucesso")
        navigation.navigate("Home")
    }

    return (
        <View>

            <View style={styles.container}>
                <Text style={styles.titulo}> Cadastre suas {'\n'} Músicas </Text>
            </View>

            <TextInput autoCapitalize='words' style={styles.input} placeholder="Digite a Banda/Artista" onChangeText={setBanda} value={banda} />

            <TextInput style={styles.input} placeholder="Digite a Genêro da música" onChangeText={setGenero} value={genero} />

            <TextInput style={styles.input} placeholder="Digite a Música" onChangeText={setMusica} value={musica} />

            <TouchableOpacity

                style={style.btnenviar}
                onPress={() => {
                    addMusica();
                }}>

                <Text style={styles.btntxtenviar}> Enviar </Text>

            </TouchableOpacity>

        </View>
    );

}

const styles = Stylesheet.create({
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
})