import React,{useState,useEffect} from 'react';
import {
  StyleSheet, View, Text, Touchable, TouchableOpacity,Image
} from 'react-native';
import {windowHeight,windowWidth} from '../../resource/Dimensions'
import axios from 'axios';

const styles = StyleSheet.create({  
  container:{
    flex: 1,
    width: windowWidth/1.2,
    height: windowHeight/6,
    marginHorizontal: 18,
    marginTop: 35,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent:'space-between' ,
  },
  imagen:{
    width: windowWidth/7,
    height:  windowHeight/8,
  },
  containerImagen:{
    width: windowWidth/3.5,
    height: windowHeight/6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c7d3d7',
    borderRadius: 15
  },
  containerDatos:{
    width: windowWidth/1.8,
    height: windowHeight/7,
    borderTopRightRadius: 15,
    borderBottomEndRadius: 15,
    backgroundColor: '#f5f5f5',
  },
  nombre:{
    fontSize: 20,
    paddingLeft: 12,
    paddingTop: 12,
    fontWeight: 'bold'
  },
  raza:{
    paddingLeft: 12,
    paddingTop: 2,
  },
  ubicacion:{
    color: '#94aaad',
    paddingLeft: 12,
    paddingTop: 2,
  },
});

const CardLIst = ({onPress,text, imagenes}) => {
  console.log("IMAGENESprueba", imagenes)
  const [imagen, setImagen] = useState()

  return (
      <>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.containerImagen}>
              {imagenes[0].imagen?
              <Image
                source={{
                uri: imagenes[0].imagen,
                }}
                style={styles.imagen}> 
              </Image>:null}
            </View>
            <View style={styles.containerDatos}>
                <Text style={styles.nombre}>{imagenes[0].mascotas.nombre}</Text>  
                <Text style={styles.raza}>{imagenes[0].mascotas.raza}</Text>
                <Text style={styles.raza}>{imagenes[0].mascotas.edad[0]} años {imagenes[0].mascotas.edad[1]} meses</Text>
                <Text style={styles.ubicacion}>{imagenes[0].mascotas.ubicacion}</Text>
            </View>
        </TouchableOpacity>
      </>
  );
}
export default CardLIst;