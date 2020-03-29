import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import api from '../../services/api'

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
  const [incidents, setIncidents]= useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDatail( incident ){
    navigation.navigate('IncidentsDetail', {incident});
  }

  async function loadIncidents(){
    if(loading){
      return;
    }
    if(total >0 && incidents.length === total){
      return;
    }

    setLoading(true);
    const response = await api.get('incidents', {
      params: {page}
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page +1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return(
    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={logoImg} />

        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total}</Text> casos
        </Text>

      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

      <FlatList 
        data={incidents}
        style={styles.IncidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.1}
        renderItem={({item: incident}) => (
          <View style={styles.Incident}>
            <View style={styles.flex}>
              <View>
                <Text style={styles.IncidentProperty}>CASO:</Text>
                <Text style={styles.IncidentValue}>{incident.title}</Text>

                <Text style={styles.IncidentProperty}>ONG:</Text>
                <Text style={styles.IncidentValue}>{incident.name}</Text>
              </View>
              <View>
                <Text style={styles.IncidentProperty}>VALOR:</Text>
                <Text style={styles.IncidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
              </View>

            </View>
            
          

          

          <TouchableOpacity style={styles.detailsButton}
          onPress={() => navigateToDatail(incident)}>
            <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
            <Feather name='arrow-right' size={14} color='#e02041' />
          </TouchableOpacity>

          </View>
        )}
      />

      </View>
  );
}



