import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import axios from 'axios';
import Footer from '../../component/footer/Footer';
import CardVideo from '../../component/card/CardVideo'

const Videos = ({navigation, route}) => {
    console.log("------asdsadsad----", route.params)
    //const [listVideoIds, setListVideoIds] = useState([])
    //let listVideoIds = []
    const styles = StyleSheet.create({
        container: {
            flex: 0.9,
            flexDirection:'row',
        },
        containerEnd:{
            flex: 0.1
        },
    });  

    /*useEffect (()=>{
        axios.post('http://167.172.238.188:8000/api/token/',{
            "username": 'Fulcrum',
            "password": '123456'
          })
          .then(
          (res)=>{
            const auth="Bearer "+res.data.access
            axios.get('http://167.172.238.188:8000/video?search='+route.params,
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
                  //console.log("++++++++++---------",lista.enlace)
                  lista1.push(lista.enlace)
                  //setData(res.data)
                }
                setListVideoIds(lista1)                
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
      },[route.params])*/
      //console.log("+++++--------+++++-----------",listVideoIds)
    return (
        <>
        <View style={styles.container}>
        {/*<FlatList
            data={data}
            keyExtractor={(Data, index) => 'key' + index}
            scrollEnabled
            horizontal = {false}
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            renderItem={(item, index) => {
            console.log("datositem: ", item.item.id)  
            console.log("IMAgenes: ", imagenes)  
            const imagen = imagenes.filter((e)=>{ return e.mascotas.id == item.item.id })      
            //console.log("-----", imagen)        
            return (
            <>
                <CardList text={'Adopatanos'} imagenes={imagen} onPress={()=>{navigation.navigate('Detalle', item.item)}}></CardList>                  
            </>
            );
            }}
        />*/}
        <CardVideo listVideoIds={route.params}></CardVideo>
        </View>
        <View style={styles.containerEnd}>
            <Footer navigation={navigation} home={2} estrella={2} video={1} person={2}></Footer>
        </View>
        </>
    )
};


export default Videos;