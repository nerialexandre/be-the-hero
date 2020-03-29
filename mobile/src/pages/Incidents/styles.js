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

  headerText:{
    fontSize:14,
    color: '#737380'
  },

  headerTextBold:{
    fontWeight: 'bold',
    color:'#000'
  },

  title:{
    fontSize:20,
    marginTop: 20,
    marginBottom:10,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description:{
    fontSize: 14,
    color: '#13131a',
    lineHeight:16
  },

  IncidentList:{
    marginTop: 15
  },

  Incident:{
    backgroundColor: '#ffffff',
    padding:20,
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
    marginTop:6,
    marginBottom:12,
    color: '#737380'
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
  flex:{
    flexDirection: 'row',
    justifyContent:'space-between'
  }

});