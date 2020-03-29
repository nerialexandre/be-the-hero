import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){

  const navigation = useNavigation();

  function navigateToDatail(){
    navigation.navigate('IncidentsDetail');
  }

  return(
    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={logoImg} />

        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0</Text> casos
        </Text>

      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

      <FlatList 
        data={[1, 2, 3, 4, 5, 6]}
        style={styles.IncidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.Incident}>
            <View style={styles.flex}>
            <View>
            <Text style={styles.IncidentProperty}>CASO:</Text>
          <Text style={styles.IncidentValue}>It is a long established.</Text>

          <Text style={styles.IncidentProperty}>ONG:</Text>
          <Text style={styles.IncidentValue}>Menino Jesus</Text>
            </View>
            <View>
            <Text style={styles.IncidentProperty}>VALOR:</Text>
          <Text style={styles.IncidentValue}>200,00</Text>
              
            </View>

            </View>
            
          

          

          <TouchableOpacity style={styles.detailsButton}
          onPress={navigateToDatail}>
            <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
            <Feather name='arrow-right' size={14} color='#e02041' />
          </TouchableOpacity>

          </View>
        )}
      />

      </View>
  );
}



