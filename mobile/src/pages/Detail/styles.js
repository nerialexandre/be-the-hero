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
    marginTop:5,
    backgroundColor: '#ffffff',
    padding:20,
    borderRadius: 8,
    marginBottom:16
  },
  flex:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})