import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, ScrollView, Image, Alert, Pressable } from "react-native";

import logo from '../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png'



const Login = () => {
    const [text, SetText] = useState('')

    return(
        <ScrollView style={styles.body}>
            <View>
                <Image source={logo} style={styles.img} />
            </View>
            <View style={styles.loginBox} >
                <Text style={styles.login}>Iniciar Sesión</Text>
                <Text style={styles.passw}>Usuario</Text>
                <TextInput style={styles.input} placeholder='Usuario'/>
                <Text style={styles.passw}>Contraseña</Text>
                <TextInput onChangeText={SetText} secureTextEntry={true} style={styles.input} value={text} placeholder={'Password'}/>

                <Pressable title='Iniciar Sesión' onPress={() => Alert.alert('Button press')} style={styles.submit} > 
                    <Text>Iniciar Sesión  </Text>
                </Pressable>
            </View>

            <Text style={styles.feedback}>{text}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#779'
    },
    login: {
        paddingLeft: 35,
        paddingTop: 15,
        fontSize: 35,
        marginBottom: 30
    },
    feedback: {
        fontSize: 25,
        color: 'magenta',
        padding: 25
    },
    body: {
        backgroundColor: '#669BC7'
    },
    img: {
        width: 350,
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 'auto'
    },
    loginBox: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 50,
        height: 400
    },
    passw: {
        paddingLeft: 50,
        fontSize: 20
    },
    submit: {
        backgroundColor: '#2a9d8f',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginHorizontal: 100,
        marginVertical: 20
    }
})
export default Login