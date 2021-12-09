import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {windowHeight,windowWidth} from '../../resource/Dimensions'

const Footer = ({navigation, route, home, estrella, video, person}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection:'row',
        },
        containerIcon1:{
            flex: 0.25,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            marginHorizontal: 15,
            marginVertical: 15,
            borderColor: '#376565',
            borderRadius: 10,
            backgroundColor: home==2?'#f5f5f5':'#376565',
        },
        containerIcon2:{
            flex: 0.25,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            marginHorizontal: 15,
            marginVertical: 15,
            borderColor: '#376565',
            borderRadius: 10,
            backgroundColor: estrella==2?'#f5f5f5':'#376565',
        },
        containerIcon3:{
            flex: 0.25,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            marginHorizontal: 15,
            marginVertical: 15,
            borderColor: '#376565',
            borderRadius: 10,
            backgroundColor: video==2?'#f5f5f5':'#376565',
        },
        containerIcon4:{
            flex: 0.25,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            marginHorizontal: 15,
            marginVertical: 15,
            borderColor: '#376565',
            borderRadius: 10,
            backgroundColor: person==2?'#f5f5f5':'#376565',
        },
        image:{
            width: 35,
            maxHeight: 35,
        },
        
    });  

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Principal')}} style={styles.containerIcon1}><Image source={home==1?require('../../resource/static/image/home1.png'):require('../../resource/static/image/home2.png')} style={styles.image}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Principal')}} style={styles.containerIcon2}><Image source={estrella==1?require('../../resource/static/image/estrella1.png'):require('../../resource/static/image/estrella2.png')} style={styles.image}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Videos')}} style={styles.containerIcon3}><Image source={video==1?require('../../resource/static/image/video1.png'):require('../../resource/static/image/video2.png')} style={styles.image}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Person')}} style={styles.containerIcon4}><Image source={person==1?require('../../resource/static/image/person1.png'):require('../../resource/static/image/person2.png')} style={styles.image}/></TouchableOpacity>
        </View>
    )
};


export default Footer;