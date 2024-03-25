import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Home({ navigation }) {
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
