import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function IncidentsDetail(){

  const navigation = useNavigation();

  const route = useRoute();
  const incident = route.params.incident;

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "exemplo" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)} reais`

  function navigateBack(){
    navigation.goBack();
  }

  function sendEmail(){
    MailComposer.composeAsync({
      subject: `Heroi do caso "${incident.title}"`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp(){
    Linking.openURL(`https://api.whatsapp.com/send?phone=55${incident.whatsapp}6&text=${message}`);
  }

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
        style={styles.detailsButton}
        onPress={navigateBack}>
            
            <Feather name='arrow-left' size={24} color='#e02041' />
            <Text style={styles.detailsButtonText} >Voltar</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.title}>Detalhes do Caso</Text>

      <View style={styles.Incident}>
        <View style={styles.flex}>
          <View style={styles.incidentText}>
            <Text style={styles.IncidentProperty}>CASO:</Text>
            <Text style={styles.IncidentValue}>{incident.title}</Text>     
          </View>

          <View>
            <Text style={styles.IncidentProperty}>VALOR:</Text>
            <Text style={styles.IncidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
          </View>

        </View>


        <Text style={styles.IncidentProperty}>ONG:</Text>
        <Text style={styles.IncidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>  

        <Text style={styles.IncidentProperty}>DESCRIÇÃO:</Text>
        <Text style={styles.IncidentValue}>{incident.description}</Text>


      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroTitle}>Seja o Herói desse caso!</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsButtons} onPress={sendWhatsapp}>
            <Text style={styles.actionsText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsButtons} onPress={sendEmail}>
            <Text style={styles.actionsText}>E-mail</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}



// asdasdasdasd