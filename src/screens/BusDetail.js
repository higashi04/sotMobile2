import React, { useState, useEffect } from "react";
import { Text, Pressable, View, StyleSheet, Image } from "react-native";

import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";


const BusDetail = ({route, navigation}) => {
    const {unit, driver} = route.params
    const [data, setData] = useState('')

    const getDriver = async() => {
        try {
            const response = await fetch(`https://transportes-villarreal.herokuapp.com/drivers/getDrivers/${JSON.stringify(driver).replace(/"/g, '')}`)
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        getDriver()
    })
    

    return(
        <View style={styles.body} >
            <View>
              <Image source={logo} style={styles.img} />
            </View>
            <View>
                <Text style={styles.h1}> Unidad: {JSON.stringify(unit).replace(/"/g, '')} </Text>
                <Text style={styles.text}> Chofer: {data.name} </Text>
                <Text style={styles.text}> Empresa: {data.company}</Text>
            </View>
            <View>
                <Pressable 
                    style={styles.btn}
                    onPress={()=> { navigation.goBack()}}
                >
                    <Text style={styles.btnText}>Atrás</Text>
                </Pressable>
            </View>
        </View>
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
      }
})

export default BusDetail