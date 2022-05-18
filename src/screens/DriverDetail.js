import React, { useState, useEffect } from "react";
import { Text, Pressable, View, StyleSheet, Image, ScrollView } from "react-native";

import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";
import noImg from '../assets/noimg.jpg'

const DriverDetail =({route, navigation}) => {
    const [data, setData] = useState('')
    const {unit, company, status, coordinator, driver, photo } = route.params
    // const [photo, setPhoto] = useState('')

    const getBus = async() => {
        try{
            const response = await fetch(`https://transportes-villarreal.herokuapp.com/buses/getBuses/${JSON.stringify(unit).replace(/"/g, '')}`)
            const json = await response.json()
            setData(json)
        } catch(err) {
            console.error(err);
        }
    }
    useEffect( () => { 
        getBus()
    })


 

    return(
        <ScrollView style={styles.body}>
                <View>
                    <Image source={logo} style={styles.img} />
                </View>
                    {
                        !photo ? <Image source={noImg} style={styles.img} />
                        : <Image source={{uri: `${JSON.stringify(photo).replace(/"/g, '')}`}} style={styles.gafete} />
                    }
                <View>
                    <Text style={styles.h1}>Chofer: {JSON.stringify(driver).replace(/"/g, '')}</Text>
                    <Text style={styles.text}>Empresa: {JSON.stringify(company).replace(/"/g, '')}</Text>
                    <Text style={styles.text}>Coordinador: {JSON.stringify(coordinator).replace(/"/g, '')}</Text>
                    <Text style={styles.text}>{!status ? 'Activo' : 'Inactivo'}</Text>
                    <Text style={styles.text}>Unidad: {data.unidad}</Text>
                    <Text style={styles.text}>{data.tipo}</Text>
                </View>
            <View>
                <Pressable 
                    style={styles.btn}
                    onPress={()=> { navigation.goBack()}}
                >
                    <Text style={styles.btnText}>Atrás</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#669BC7",
        height: 800
      },
      h1: {
          fontSize: 30,
          marginTop: 20,
          marginHorizontal: 10
      },
      text: {
          fontSize: 25,
          margin: 25
      },
      img: {
        width: 350,
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        marginRight: "auto",
      },
      btn: {
          borderRadius: 50,
          backgroundColor: '#2a9d8f',
          margin: 25,
          marginHorizontal: 105,
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      },
      btnText: {
        fontSize: 20
      },
      gafete:{
        width: 100,
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        marginRight: "auto",
      }
})

export default DriverDetail;