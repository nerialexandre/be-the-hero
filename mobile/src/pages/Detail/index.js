import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function IncidentsDetail(){

  const navigation = useNavigation();

  function navigateToIncidents(){
    navigation.navigate('Incidents');
  }

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
        style={styles.detailsButton}
        onPress={navigateToIncidents}>
            
            <Feather name='arrow-left' size={24} color='#e02041' />
            <Text style={styles.detailsButtonText} >Voltar</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.title}>Detalhes do Caso</Text>

      <View style={styles.Incident}>
        <View style={styles.flex}>
        <View>
        <Text style={styles.IncidentProperty}>CASO:</Text>
        <Text style={styles.IncidentValue}> established</Text>

        <Text style={styles.IncidentProperty}>ONG:</Text>
        <Text style={styles.IncidentValue}>Menino Jesus</Text>

        
        </View>

        <View>
        <Text style={styles.IncidentProperty}>VALOR:</Text>
        <Text style={styles.IncidentValue}>200,00</Text>

        <Text style={styles.IncidentProperty}>CIDADE/UF:</Text>
        <Text style={styles.IncidentValue}>Fortaleza/CE</Text>

        
        </View>

        </View>
        <Text style={styles.IncidentProperty}>DESCRIÇÃO:</Text>
        <Text style={styles.IncidentValue}>Menino Jesus is a long establishedis a long establishedis a long establishedis a long established</Text>

        
        

        

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroTitle}>Seja o Herói desse caso!</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsButtons} onPress={()=>{}}>
            <Text style={styles.actionsText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsButtons} onPress={()=>{}}>
            <Text style={styles.actionsText}>E-mail</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}



// asdasdasdasd