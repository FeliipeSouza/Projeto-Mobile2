import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Alert, StyleSheet, Text,TextInput, TouchableOpacity,Image, View } from 'react-native';

// import Title from './src/components/Title';
// import Main from './src/components/main';
export  function Fav() {
    const navigation = useNavigation()
      const imgHome =  require('./src/components/drawble/home.png')
      const imgHeart =  require('./src/components/drawble/heart.png')
      const imgProf =  require('./src/components/drawble/profile.png')
  
  return (
    <View style={styles.container}>
        <View>
          <Text style = {[styles.title,{width:200,textAlign:'center'}]}>
            Meus Favs</Text>
        </View>
   
    <View style = {styles.bottomBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} > 
      <Image source={imgHome} style={styles.imgTool}></Image>
      </TouchableOpacity>

      <TouchableOpacity>
      <Image source={imgHeart} style={styles.ImgHP}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <Image source={imgProf} style={styles.ImgHP} ></Image>
      </TouchableOpacity>
    
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    flexDirection: "column",
    backgroundColor:'#B01E68'
  },title :{
    color:"#FFE15D",
    fontSize:60,
    fontWeight:"bold",
    alignSelf: 'center',
    marginTop:25
  },botaoBuscar :{
    backgroundColor : "#018789",
    width:120,
    height:70,
    marginTop:30,
    marginEnd:20,
    borderRadius:10,
    padding: 20
  },title2:{
    color:"#FFFFFF",
    fontSize:25,
    fontWeight:"bold",
    alignSelf: 'center',
    marginTop:30,
    marginLeft:30
  },title3:{
    color:"#F49D1A",
    fontSize:34,
    fontWeight:"bold",
    alignSelf: 'baseline',
    marginStart: 20,
    marginTop:25
  },bottomBar:{
    flexDirection:'row',
    marginBottom:15,
    position:'absolute',
    alignItems:'center',
    justifyContent:'space-around',
    alignSelf: 'center',
    bottom: 0,
    height:65,
    width:'85%',
    borderRadius:50,
    backgroundColor: '#FFE15D'
  },imgTool:{
    flexDirection:'row',
    resizeMode:'contain',
    height:45
  },ImgHP:{
    flexDirection:'row',
    resizeMode:'contain',
    height:55
  }
});
export default Fav;