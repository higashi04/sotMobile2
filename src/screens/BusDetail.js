import React, { useState, useEffect } from "react";
import { FlatList, Text, Pressable, View, StyleSheet } from "react-native";

const BusDetail = ({route, navigation}) => {
    const {itemId, unit} = route.params
    return(
        <View style={styles.body} >
            <Text style={styles.h1}> {JSON.stringify(itemId)} </Text>
            <Text style={styles.h1}> Unidad: {JSON.stringify(unit).replace(/"/g, '')} </Text>
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
})

export default BusDetail