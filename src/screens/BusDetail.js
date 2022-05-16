import React, { useState, useEffect } from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";

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
            <Text style={styles.h1}> Unidad: {JSON.stringify(unit).replace(/"/g, '')} </Text>
            <Text style={styles.text}> Chofer: {data.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#669BC7",
      },
      h1: {
          fontSize: 30,
          marginTop: 20,
          marginHorizontal: 10
      },
      text: {
          fontSize: 25,
          margin: 25
      }
})

export default BusDetail