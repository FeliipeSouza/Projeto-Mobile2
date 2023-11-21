import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Alert, StyleSheet, Text,TextInput, TouchableOpacity,Image, View, ScrollView } from 'react-native';

// import Title from './src/components/Title';
// import Main from './src/components/main';
export  function Perfil() {
    const navigation = useNavigation()
      const imgHome =  require('./src/components/drawble/home.png')
      const imgHeart =  require('./src/components/drawble/heart.png')
      const imgProf =  require('./src/components/drawble/profile.png')
      const imgMod =  require('./src/components/drawble/jack.jpeg')
      const imgInsta =  require('./src/components/drawble/insta.png')
      const imgTwit =  require('./src/components/drawble/twit.png')
      const imgFace =  require('./src/components/drawble/face.png')
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        
    <View>
      <Text style = {styles.title}> DOWNTOWN </Text>
    </View>



    <View style = {{marginBottom:20}}> 
      <Text style = {styles.title3}>
        Perfil
      </Text>
       </View>

    <View >
      <Image source={imgMod} style={{width:'95%',alignSelf:'center',borderRadius:150, height:300, resizeMode:'stretch'}}></Image>
    </View>
    <View>
<Text style={[styles.Txt,{fontSize:25,fontWeight:'bold'}]}>USUARIO</Text>
<Text style={[styles.Txt,{marginBottom:25,fontSize:18}]}>Salvador - BA</Text>
    
<View style={[styles.viewCont]}>
<Image source={imgInsta} style={styles.imgCont}></Image>
<Image source={imgTwit} style={styles.imgCont}></Image>
<Image source={imgFace} style={styles.imgCont}></Image>

</View>
<View style={{marginBottom:110,marginTop:20,alignItems:'center'}}>
  <Text style = {[styles.Txt,{width:300,fontSize:16}]}>
  Todavia, o surgimento do comércio virtual talvez venha a ressaltar a relatividade do investimento em reciclagem técnica.
  </Text>
</View>

    </View>



    </ScrollView> 
    {/* ToolBar: */}
    <View style = {styles.bottomBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} > 
      <Image source={imgHome} style={styles.imgTool}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Fav')}> 
      <Image source={imgHeart} style={styles.ImgHP}></Image>
      </TouchableOpacity>

      <TouchableOpacity>
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
    backgroundColor: "#B01E68",
    flexDirection: "column"
  },title :{
    color:"#FFE15D",
    fontSize:60,
    fontWeight:"bold",
    alignSelf: 'center',
    marginTop:30
  },title2:{
    color:"#FFFFFF",
    fontSize:25,
    fontWeight:"bold",
    alignSelf: 'center',
    marginTop:30,
    marginLeft:30
  },title3:{
    color:"#ffff",
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
  },viewCont:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },imgCont:{
    resizeMode:'contain',
    height:40,
    width: 40,
    marginRight:0
  },ImgHP:{
    flexDirection:'row',
    resizeMode:'contain',
    height:55
  },Txt:{
    textAlign:'center',
    color:'#ffff',
    marginTop:15
  }
});
export default Perfil;