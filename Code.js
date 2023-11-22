import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const token = '77119a0135cc5cd5391c857f3c580398a47e369ee6f7f77874516f1d8dc78ed8';
const endpoint = 'https://api.sympla.com.br/public/v4/events';


const ButtonRequest = async () => {

  try {
    const response = await axios.get(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        's_token': token,
      },
    });

    // Verifica se há eventos na resposta
    if (response.data.data.length > 0) {
      // Itera sobre os eventos e imprime detalhes de localização
      response.data.data.forEach(evento => {
        const localizacao = evento.address;
        
        console.log('Nome do evento:', evento.name);
        console.log('Endereço:', localizacao.address);
        console.log('Número do local:', localizacao.address_num);
        console.log('Complemento:', localizacao.address_alt);
        console.log('Bairro:', localizacao.neighborhood);
        console.log('Cidade:', localizacao.city);
        console.log('Estado:', localizacao.state);
        console.log('CEP:', localizacao.zip_code);
        console.log('País:', localizacao.country);
        console.log('-------------------------');
      });
    } else {
      console.log('Nenhum evento encontrado.');
    }
  } catch (error) {
    console.error('Erro ao listar eventos:', error.message);
  }};

export  function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={ButtonRequest}>
        <Text>Clique-aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;