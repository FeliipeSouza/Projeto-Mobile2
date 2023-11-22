import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Alert, StyleSheet, Text,TextInput, TouchableOpacity,Image, View } from 'react-native';
import AppRoutes from './Route' 
import { ThemeProvider } from '@react-navigation/native';

export  function App() {

      return (
        <ThemeProvider>
        <AppRoutes />
        </ThemeProvider>
      );

      }
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "co"
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
  }
});
export default App;
