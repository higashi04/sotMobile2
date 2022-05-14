import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";

const List = (props) => {
    <View>

    </View>
}

const Buses = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getBuses() {
            const response = await fetch(`http://localhost:8083/buses/getBuses`)
            if (!response.ok) {
                const message =`Se produjo un error: ${response.statusText}`
                window.alert(message)
                return
            }
            const buses = await response.json()
            setItems(buses)
            console.log(items)
        }
        getBuses()
        return
    }, [items.length])

    return(
        <ScrollView style={styles.body}>
            <View>
                <Text style={styles.h1}>Camiones asignados a P L A C E H O L D E R</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#669BC7",
      },
      h1: {
          fontSize: 30,
          marginTop: 20
      }
})

export default Buses