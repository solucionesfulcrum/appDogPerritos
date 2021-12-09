import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';

const Splash = ({navigation}) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 1500,
        toValue: Dimensions.get('window').width / 1,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 1500,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1500,
      toValue: 1,
      delay: 1000,
      useNativeDriver: false,
    }).start();
    
    setTimeout(()=>{navigation.navigate('Principal')},
    3000)
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 300,height:300,borderRadius: 160, marginLeft: 10, backgroundColor: '#fbecd3'}}>
            </View>
            <View style={{width: 300,height:300,borderRadius: 160, marginLeft: -40, backgroundColor: '#fbecd3'}}>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.triangulo}>
            <TouchableOpacity>
            <Animated.Image
              style={[styles.image, {opacity: fadeAnim}]}
              source={require('../../resource/static/image/logo.png')}
            />
            </TouchableOpacity>
            <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
              <Text style={[styles.logoText]}>Adopta o Apadrina</Text>
              <Animated.Text style={[styles.logoTextSec, {opacity: fadeAnim}]}>
                Un Perrito
              </Animated.Text>
            </Animated.View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#376565',
  },
  logoText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 0,
    color: '#252122',
    fontWeight: '700',
    marginRight: -400
  },
  logoTextSec:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 0,
    color: '#252122',
    fontWeight: '700',
    marginRight: -400
  },
  contentContainer: {
    top: '20%',
    alignItems: 'center',
  },
  image: {
    width: 165,
    height: 181,
    marginTop: 250,
    marginLeft: -80,
    transform: [{ rotate: '180deg' }],
  },
  logoContainer: {
    flexDirection: 'column',
    width: 400,
    height: 100,
    marginLeft: 70,
    marginTop: 140,
    transform: [{ rotate: '180deg' }],
  },
  corazonContainer:{
    borderWidth: 1,
    backgroundColor: '#fbecd3',
    width: 300,
    height: 300
  },
  triangulo:{
    width: 0,
    height: 0,
    borderLeftWidth: 280,
    borderRightWidth: 280,
    borderBottomWidth: 310,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fbecd3',
    transform: [{ rotate: '180deg' }],
    marginTop: -80,
    marginLeft: 10
  }
});