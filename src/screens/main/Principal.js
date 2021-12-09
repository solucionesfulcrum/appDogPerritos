import React,{useState,useEffect} from 'react';
import {
  StyleSheet, View, Text, FlatList, Image
} from 'react-native';
import CardGroup from '../../component/card/CardGroup'
import CardList from '../../component/card/CardList'
import axios from 'axios';
import Footer from '../../component/footer/Footer';
import SkeletonShimer from '../../component/skeleton/SkeletonShimer'

const Principal = ({navigation}) => {

  const [data, setData] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const [actionAp, setActionAp] = useState(2);
  const [actionAd, setActionAd] = useState(1);
  const [actionCo, setActionCo] = useState(2);
  const [visibleSkel,setVisibleSkel] = useState(false);
 
  useEffect (()=>{
    axios.post('http://167.172.238.188:8000/api/token/',{
            "username": 'Fulcrum',
            "password": '123456'
          })
          .then(
          (res)=>{
            const auth="Bearer "+res.data.access
            axios.get('http://167.172.238.188:8000/mascota/Adoptanos/',
            {              
              headers : {'Authorization': auth,}
            }
            )
            .then(
              (res)=>{
                axios.get('http://167.172.238.188:8000/imagen/',
                { headers : {'Authorization': auth,} 
                })
                .then(
                  (resp)=>{
                  setImagenes(resp.data)
                  setData(res.data)
                  setActionAp(2)
                  setActionAd(1)
                  setActionCo(2)
                  setVisibleSkel(true)
                  console.log('pedido',resp.data)
                })
                .catch(
                  (res)=>{
                    console.warn('Error:', res.response.status)
                  }
                )
              }
            )
            .catch(
              (res)=>{
                console.warn('Error:', res.response.status)
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

  const Apadrinanos=()=>{
    setActionAp(1)
    setActionAd(2)
    setActionCo(2)
    setData([])
    setVisibleSkel(false)
    axios.post('http://167.172.238.188:8000/api/token/',{
            "username": 'Fulcrum',
            "password": '123456'
          })
          .then(
          (res)=>{
            const auth="Bearer "+res.data.access
            axios.get('http://167.172.238.188:8000/mascota/Apadrinanos/',
            {              
              headers : {'Authorization': auth,}
            }
            )
            .then(
              (res)=>{
                console.log("data", res.data)
                setData(res.data)
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

  const Adoptanos=()=>{
    setActionAp(2)
    setActionAd(1)
    setActionCo(2)
    setData([])
    setVisibleSkel(false)
    axios.post('http://167.172.238.188:8000/api/token/',{
            "username": 'Fulcrum',
            "password": '123456'
          })
          .then(
          (res)=>{
            const auth="Bearer "+res.data.access
            axios.get('http://167.172.238.188:8000/mascota/Adoptanos/',
            {              
              headers : {'Authorization': auth,}
            }
            )
            .then(
              (res)=>{
                axios.get('http://167.172.238.188:8000/imagen/',
                { headers : {'Authorization': auth,} 
                })
                .then(
                  (resp)=>{
                  //console.log("-----------",resp.data.filter((e)=>{ return e.mascotas.id == '2' }))
                  setImagenes(resp.data)
                  console.log("data", res.data)
                  setData(res.data)
                })
                .catch(
                  (res)=>{
                    console.warn('Error:', res)
                  }
                )
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

  const Conocenos=()=>{
    setActionAp(2)
    setActionAd(2)
    setActionCo(1)
    setData([])
    setVisibleSkel(false)
    axios.post('http://167.172.238.188:8000/api/token/',{
            "username": 'Fulcrum',
            "password": '123456'
          })
          .then(
          (res)=>{
            const auth="Bearer "+res.data.access
            axios.get('http://167.172.238.188:8000/mascota/Conocenos/',
            {              
              headers : {'Authorization': auth,}
            }
            )
            .then(
              (res)=>{
                console.log("data", res.data)
                setData(res.data)
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
      <View style={styles.containerinit}>
          <Image
            source={require('../../resource/static/image/logo.png')}
            style={styles.logo}>  
          </Image>
      </View>
      <View style={styles.containerGroup}>
        <View style={{flex: 0.33,justifyContent: 'center',alignItems: 'center'}}>
          <CardGroup onPress={Apadrinanos} color={actionAp} imagen={actionAp==1?require('../../resource/static/image/ad1.png'):require('../../resource/static/image/ad2.png')}></CardGroup>
          <Text style={{marginTop: 10, fontSize: 14, fontWeight: 'bold'}}>Apadrinanos</Text>
        </View>
        <View style={{flex: 0.33,justifyContent: 'center',alignItems: 'center'}}>
          <CardGroup onPress={Adoptanos} color={actionAd} imagen={actionAd==1?require('../../resource/static/image/ap1.png'):require('../../resource/static/image/ap2.png')}></CardGroup>
          <Text style={{marginTop: 10, fontSize: 14, fontWeight: 'bold'}}>Adoptanos</Text>
        </View>
        <View style={{flex: 0.33,justifyContent: 'center',alignItems: 'center'}}>
        <CardGroup onPress={Conocenos} color={actionCo} imagen={actionCo==1?require('../../resource/static/image/co1.png'):require('../../resource/static/image/co2.png')}></CardGroup>
          <Text style={{marginTop: 10, fontSize: 14, fontWeight: 'bold'}}>Conocenos</Text>
        </View>
      </View>
      <View style={styles.containerLista}>
      <FlatList
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
      />
        {data.length!=0?null:
        <>
        <SkeletonShimer visible={visibleSkel}></SkeletonShimer>
        <SkeletonShimer visible={visibleSkel}></SkeletonShimer>
        </>
        }
      </View>
      <View style={styles.containerEnd}>
        <Footer navigation={navigation} home={1} estrella={2} video={2} person={2}></Footer>
      </View>
      </>
  );
  }

  const styles = StyleSheet.create({  
  containerinit:{
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerGroup:{
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: '#e1e9ef',
    justifyContent: 'center',
  },
  containerLista:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e9ef',
  },
  containerEnd:{
    flex: 0.1,
  },
  logo:{
    width: 135,
    height: 145,
  },
  });
export default Principal;