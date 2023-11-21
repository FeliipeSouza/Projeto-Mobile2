import { useNavigation } from '@react-navigation/native';
import React , {useState} from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity,Image, View, ImageBackground, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export  function Home() {
  const SLIDER_WIDTH = Dimensions.get('window').width
  const ITEM_WIDTH = SLIDER_WIDTH * 0.95
  const navigation = useNavigation()
  const imgHome =  require('./src/components/drawble/home.png')
  const imgHeart =  require('./src/components/drawble/heart.png')
  const imgProf =  require('./src/components/drawble/profile.png')

  const dataCarro = [
    { img: require('./src/components/drawble/jack.jpeg'), text: '#Banda1' },
    { img: require('./src/components/drawble/heart.png'), text: '#Banda2' },
    { img: require('./src/components/drawble/profile.png'), text: '#Banda3' },
  ];
        

  const renderCardItem = ({item,index}) => {
    return(
      <View >
        <ImageBackground source={item.img} 
      style={{height: 250, width: 300}}
      resizeMode='cover'
      borderRadius={10}>
        
        <Text style={styles.txtImgBack}>
            {item.text}</Text>
        
      </ImageBackground>
      </View>
    )
  }
     
  return (
    <View style={styles.container}>
<ScrollView>
    <View style= {styles.topBar}>
      <Text style = {styles.title}> Downtown </Text>
      <Text style = {styles.title2}> Ola Usuario </Text>
    </View>

    <View> 
      <Text style = {styles.title3}>
        Artistas
      </Text>
       </View>
{/* ------CARROSSEL------ */}
<View style={{marginTop:30}}>
<Carousel 
data={dataCarro}
 renderItem={renderCardItem}
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
    alignSelf:'center',
    position:'absolute',
    bottom:0,
    color:'#B01E68',
    fontWeight:'bold',
    borderRadius:5,
    width:'auto'
  }
});
export default Home;