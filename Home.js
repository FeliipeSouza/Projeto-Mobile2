import { useNavigation } from '@react-navigation/native';
import React , {useEffect, useState,Component} from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity,Image, View, ImageBackground, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from "axios";
import App from './Code';


// ------------COMPONENTE-----------------
export  function  Home   (props) {
  const SLIDER_WIDTH = Dimensions.get('window').width
  const ITEM_WIDTH = SLIDER_WIDTH * 0.95
  const navigation = useNavigation()
  const imgHome =  require('./src/components/drawble/home.png')
  const imgHeart =  require('./src/components/drawble/heart.png')
  const imgProf =  require('./src/components/drawble/profile.png')

  const [nomes, setNome] = useState([]);

// --------REQUISIÇAO API ------------
  // useEffect(() => {
  //   axios
  //    .get("https://raw.githubusercontent.com/FelipeSmX/Projeto-Mobile/main/json2")
  //     .then((response) => {
        
  //       console.log(response.data.pessoas);
  //       setNome(response.data.pessoas);
  //     })
  //     .catch((error) => {
  //       console.log(error + ' erro');
  //     });
  // }, []);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/FelipeSmX/Projeto-Mobile/main/json2');
        const data = await response.json();
        
          setNome(data.pessoas); // Os dados são colocados em um array
          console.log(data.pessoas)
       }catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
      }
    fetchDataFromApi();
  }, []);


  const handleActionPress = (actions,itemData) => {
    // Lógica específica com base nas ações
    if (actions.includes('favoritar')) {
      alert('Você pressionou Favoritar!');
      navigation.navigate('Fav', {itemData: nomes.nome});
    }
  };


 
// --------RENDERCARD----------
  const renderCardItem = ({item}) => {
    return(
      <View >
        
         <ImageBackground source={{uri: item.imagem}} 
      style={{height: 250, width: 300,position:'relative',flex:1}}
      resizeMode='cover'
      borderRadius={10}
      > 
      <TouchableOpacity  onPress={() => handleActionPress(item.action)} >
       <Image source={imgHeart} style={styles.imgFav}></Image>
       </TouchableOpacity>
       <Text style={styles.txtImgBack}>
          {item.nome}</Text>
          
       </ImageBackground> 
       
      </View>
    );
  };

// ---------------INTERFACE-------------
  return (

    <View style={styles.container}>
<ScrollView>
    <View style= {styles.topBar}>
      <Text style = {styles.title}> Downtown </Text>
      <Text style = {styles.title2}> Ola Usuario </Text>
    </View>



    <View>
      {/* {nomes.map((nome) => ( 
      <Text style = {styles.title3} key={nome.id}> {nome.nome} </Text>
      ))} */}
     <Text style = {styles.title3}> Artistas </Text>
       </View>

{/* ------CARROSSEL------ */}
<View style={{marginTop:30}}>
<Carousel 
data={nomes}
 renderItem={renderCardItem}
//  keyExtractor={(item) => item}
 sliderWidth={SLIDER_WIDTH}
 itemWidth={SLIDER_WIDTH-90}
 > </Carousel>
</View>
</ScrollView>
{/* ----------------------- */}

    <View style = {styles.bottomBar}>
      <TouchableOpacity >
      <Image source={imgHome} style={styles.imgTool}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Fav')}>
      <Image source={imgHeart} style={styles.ImgHP}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <Image source={imgProf} style={styles.ImgHP} ></Image>
      </TouchableOpacity>
    </View>

  </View>
  );
  // s
  }

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    flexDirection: "column"
  }, topBar:{
    flexDirection:"column",
    height: 256,
    backgroundColor: "#B01E68",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20

  },title :{
    color:"#FFE15D",
    fontSize:65,
    fontWeight:"bold",
    alignSelf: 'center',
    marginTop:35
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
  },card: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
  txtImgBack:{
     backgroundColor:'rgba(255,255,255,0.5)',
     textAlign:'center',
     fontSize:20 ,
     alignSelf:'center',
     position:'absolute',
    bottom:0,
    color:'#B01E68',
    fontWeight:'bold',
    borderRadius:5,
    width:'auto'
  },imgFav:{
    resizeMode:'contain',
    height:45,
    alignSelf:'flex-end'
  }
});
export default Home;