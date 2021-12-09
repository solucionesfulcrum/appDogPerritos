import React from 'react';
import {
  StyleSheet, View, Text, Touchable, TouchableOpacity
} from 'react-native';
import {windowHeight,windowWidth} from '../../resource/Dimensions'

const styles = StyleSheet.create({  
  container:{
    width: windowWidth/1.2,
    height: windowHeight/3.5,
    marginHorizontal: 18,
    borderRadius: 4,
    marginTop: 10,
  },
  top:{
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent:'space-between',
  },
  rol:{
    marginLeft: 15,
  },
  coment:{
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  nombre:{
    fontWeight: 'bold'
  },
  roldato:{
    color: '#94aaad'
  },
  comentarioletra:{
    color: '#686464',
    fontFamily: 'fantasy'
  },
});

const CardComent = ({coment}) => {
  return (
      <>
        <TouchableOpacity style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.nombre}>{coment.nombre_persona}</Text>
              <Text>{coment.fecha_reg}</Text>
            </View>
            <View style={styles.rol}>
              <Text style={styles.roldato}>{coment.rol}</Text>
            </View>
            <View style={styles.coment}>
              <Text style={styles.comentarioletra}>{coment.comentario}</Text>
            </View>
        </TouchableOpacity>
      </>
  );
}
export default CardComent;