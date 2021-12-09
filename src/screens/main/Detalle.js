import React,{useEffect,useState} from 'react';
import {
  StyleSheet, View, Text, Image, FlatList, Animated
} from 'react-native';
import axios from 'axios';
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import CardComent from '../../component/card/CardComent'
import Button from '../../component/button/Button';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const styles = StyleSheet.create({  
  containerInit:{
    flex: 0.50,
    backgroundColor: '#c7d3d7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerEnd:{
    flex: 0.50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  datosGenerales:{
    width: windowWidth/1.2,
    height: windowHeight/8,  
    borderRadius: 5, 
    marginTop: -50,    
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    paddingLeft: 20,
    borderBottomWidth: 0.1,
  },
  nombre:{
    fontSize: 18,
    fontWeight: 'bold',  
  },
  edad:{
    paddingRight: 20 
  },
  gps:{
    width: 20,
    height: 20,  
  },
  direccion:{
    color: '#94aaad'  
  },
  containerImagen:{
    width: windowWidth,
    height: windowHeight/2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen:{
    width: windowWidth/3,
    height: windowHeight/3,
  },
  comentarios:{
    flex: 0.7,
  },
  containerbuton:{
    flex: 0.3,
    width: windowWidth,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#e1e9ef',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginBottom: 70,
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  share:{
    flex: 0.1,
    width: windowWidth/15,
    height: windowHeight/25,
    marginTop: 30,
    marginRight: 30
  },
});

const Detalle = ({navigation, route}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, windowWidth);
  console.log('datoscard',route)
  const [coment,setComent] = useState()
  const [imagen, setImagen] = useState([])

  useEffect (()=>{
        axios.post('http://167.172.238.188:8000/api/token/',{
            "username": 'Fulcrum',
            "password": '123456'
          })
          .then(
          (res)=>{
            const auth="Bearer "+res.data.access
            axios.get('http://167.172.238.188:8000/comentario/?search='+route.params.id,
            {              
              headers : {'Authorization': auth,}
            }
            )
            .then(
              (res)=>{
                console.log("data", res.data)
                setComent(res.data)
              }
            )
            .catch(
              (res)=>{
                console.warn('Error:', res)
              }
            )
          }
          )
          .catch(
            (response)=>{
              response===404 ? console.warn('lo sientimos no tenemos servicios') :console.warn('Error:' ,response)
            }
          )       
    },[])

    useEffect (()=>{
      axios.post('http://167.172.238.188:8000/api/token/',{
          "username": 'Fulcrum',
          "password": '123456'
        })
        .then(
        (res)=>{
          const auth="Bearer "+res.data.access
          axios.get('http://167.172.238.188:8000/imagen/?search='+route.params.id,
          {              
            headers : {'Authorization': auth,}
          }
          )
          .then(
            (res)=>{
              console.log("imagen", res.data)
              setImagen(res.data)
            }
          )
          .catch(
            (res)=>{
              console.warn('Error:', res)
            }
          )
        }
        )
        .catch(
          (response)=>{
            response===404 ? console.warn('lo sientimos no tenemos servicios') :console.warn('Error:' ,response)
          }
        )       
  },[])

  console.log('dd',route.params)

const action = ()=>{
    axios.post('http://167.172.238.188:8000/api/token/',{
        "username": 'Fulcrum',
        "password": '123456'
      })
      .then(
      (res)=>{
        const auth="Bearer "+res.data.access
        axios.get('http://167.172.238.188:8000/video?search='+route.params.id,
        {              
          headers : {'Authorization': auth,}
        }
        )
        .then(
          (res)=>{
            console.log("video", res.data)
            let lista1 = [];
            for(let lista of res.data){
              //setListVideoIds(lista.enlace)
              console.log("++++++++++---------",lista.enlace)
              lista1.push(lista.enlace)
              //setData(res.data)
            }  
            console.log("++++++++++-----+++--",lista1)
            navigation.navigate('Videos', lista1)           
          }
        )
        .catch(
          (res)=>{
            console.warn('Error:', res)
          }
        )
      }
      )
      .catch(
        (response)=>{
          response===404 ? console.warn('lo sientimos no tenemos servicios') :console.warn('Error:' ,response)
        }
      )   
}


  return (
      <>
      <View style={styles.containerInit}>
        <View style={{flexDirection: 'row-reverse',width: windowWidth,height: windowHeight/50}}>
          <Image
            source={require('../../resource/static/image/share2.png')}
            style={styles.share}>  
          </Image>
        </View>
        <AnimatedFlatList
          data={imagen}
          keyExtractor={(Data, index) => 'key' + index}
          scrollEnabled
          showsHorizontalScrollIndicator = {false}
          horizontal 
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          renderItem={(item, index) => {        
          return (
            <View style={styles.containerImagen}>
              <Image
              source={{
              uri: item.item.imagen,
              }}
              style={styles.imagen}> 
              </Image>
            </View>                  
          );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {listener: (event) => console.log(event), useNativeDriver: true},
          )}
        />
        <View style={styles.dot}>
          {imagen.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#151515',
                  margin: 8,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#376565',
                }}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.containerEnd}>
        <View style={styles.datosGenerales}>
            <Text style={styles.nombre}>{route.params.nombre}</Text>
            <View style={{flexDirection: 'row',justifyContent:'space-between' }}>
                <Text style={styles.raza}>{route.params.raza}</Text> 
                <Text style={styles.edad}>{route.params.edad[0]} años,{route.params.edad[1]} meses</Text>  
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-between' }}></View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    source={require('../../resource/static/image/gps.png')}
                    style={styles.gps}>  
                </Image>
                <Text style={styles.direccion}>{route.params.ubicacion}</Text> 
            </View>
        </View>
        <View style={styles.comentarios}>
        <FlatList
          data={coment}
          keyExtractor={(Data, index) => 'key' + index}
          scrollEnabled
          showsVerticalScrollIndicator = {false}
          horizontal = {false}
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          renderItem={(item, index) => {        
          return (
              <CardComent coment={item.item}></CardComent>                  
          );
          }}
        />
        </View>
        <View style={styles.containerbuton}>
          <View style={{flex:0.3, marginLeft:50}}>
            <Button windowHeight={windowHeight/16} windowWidth={windowWidth/5} onPress={action}></Button>
          </View>
          {route.params.grupo==='AD'?
          <View style={{flex:0.7, alignItems: 'flex-end',marginRight: 50}}>
            <Button windowHeight={windowHeight/16} windowWidth={windowWidth/2} text={'Adopción'}></Button>
          </View>
          :route.params.grupo==='AP'?
          <View style={{flex:0.7, alignItems: 'flex-end',marginRight: 50}}>
           <Button windowHeight={windowHeight/16} windowWidth={windowWidth/2} text={'Apadrinar'}></Button>
          </View>:
          <View style={{flex:0.7, alignItems: 'flex-end',marginRight: 50}}>
          <Button windowHeight={windowHeight/16} windowWidth={windowWidth/2} text={'Conoceme'}></Button>
          </View>
          }
        </View>
      </View>
      </>
  );
  }
export default Detalle;