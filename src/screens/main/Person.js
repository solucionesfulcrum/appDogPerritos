import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import SkeletonShimer from '../../component/skeleton/SkeletonShimer'

const Person = ({navigation, route}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection:'row',
        },
    });  

    return (
        <View style={styles.container}>
            <Text>hola</Text>
            <SkeletonShimer visible={false}></SkeletonShimer>
        </View>
    )
};


export default Person;