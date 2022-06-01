import React from 'react'
import { ScrollView, StyleSheet, Pressable, View, Image, Text, Alert } from 'react-native'



import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";

const Home = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View>
                <Image source={logo} style={styles.img} />
            </View>
            <View style={styles.box}>
                <Pressable style={styles.btn} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.btnText}>Iniciar Sesión</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={()=> navigation.navigate('User')}>
                    <Text style={styles.btnText}>Placeholder, gotta remove</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={()=> navigation.navigate('Register')}>
                    <Text style={styles.btnText}>Register</Text>
                </Pressable>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#669BC7',
        paddingTop: 30,

    },
    img: {
        width: 350,
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        marginRight: "auto",
      },
      box: {
          height: 300,
          marginVertical: 10,
          marginHorizontal: 25,
          backgroundColor: '#fff',
          borderRadius: 50,
          display: 'flex',
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
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


export default Home;