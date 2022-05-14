import React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";

const Buses = () => {

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