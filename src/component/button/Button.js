import React from 'react';
import {
  StyleSheet, View, Text, Touchable, TouchableOpacity,Image
} from 'react-native';

const Button = ({windowWidth,windowHeight,onPress,text}) => {

     const styles = StyleSheet.create({  
        container:{
          width: windowWidth,
          height: windowHeight,
          borderRadius: 20,
          backgroundColor: '#376565',
          justifyContent: 'center',
          alignItems: 'center',
        },
        text:{
          color: '#f5f5f5',
          fontWeight: 'bold', 
          fontSize: 20, 
        },
        imagen:{
          width:20,
          height:18,
        },
      });

  return (
      <>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {text!=null?
            <Text style={styles.text}>{text}</Text>
            :
            <Image
              source={require('../../resource/static/image/cora.png')}
              style={styles.imagen}>  
            </Image>
            }
        </TouchableOpacity>
      </>
  );
}
export default Button;