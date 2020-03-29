import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#c9e7fc'
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  title:{
    fontSize:20,
    marginTop: 20,
    marginBottom:10,
    color: '#13131a',
    fontWeight: 'bold'
  },

  detailsButton:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },

  detailsButtonText:{
    fontSize: 14,
    marginBottom:0,
    color:'#e02041',
    fontWeight: 'bold'
  },
  Incident:{
    marginTop:10,
    backgroundColor: '#ffffff',
    padding:16,
    borderRadius: 8,
    marginBottom:16
  },

  IncidentProperty:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#41414d',
  },

  IncidentValue:{
    fontSize: 14,
    marginTop:0,
    marginBottom:12,
    color: '#737380'
  },

  contactBox:{
    backgroundColor: '#ffffff',
    padding:16,
    borderRadius: 8,
    marginBottom:16
  },
  flex:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  heroTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
  },

  heroDescription:{
    marginVertical:8,
    color: '#737380'
  },

  actions:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  actionsButtons:{
    marginHorizontal: 20,
    backgroundColor: '#e02041',
    padding:8,
    width: '40%',
    alignItems:"center",
    borderRadius: 8,
    marginTop:8
  },

  actionsText:{
    fontSize:12,
    fontWeight: 'bold',
    color:'#ffff'
  },
  incidentText:{
    maxWidth: '70%'
  }
})