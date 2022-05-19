import React, { useState } from 'react'
import { Text, ScrollView, Image, StyleSheet, View, Pressable, Button } from 'react-native'

import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";

const UserOpts = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View>
                <Image source={logo} />
            </View>
            <View style={styles.box}>
                <Text>Bienvenido</Text>
                <View>
                    <Pressable style={styles.btn} onPress={() => navigation.navigate('Buses')}>
                        <Text style={styles.btnText}>Camiones</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={() => navigation.navigate('Drivers')}>
                        <Text style={styles.btnText}>Choferes</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: "#669BC7",
        paddingTop: 30
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
        marginTop: 50
    },
    btnText: {
        fontSize: 15
    },
    btn: {
        backgroundColor: '#2a9d8f',
        padding: 10,
        borderRadius: 50,
        margin: 10 
    }
})

export default UserOpts;