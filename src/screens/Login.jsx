import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

const Login = () => {
    const [text, SetText] = useState('')

    return(
        <View style={styles.body}>
            <Text style={styles.login}>Login</Text>
            <Text style={styles.feedback}>{text}</Text>
            <Text>Machu Pichu</Text>
            <TextInput onChangeText={SetText} style={styles.input} value={text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    login: {
        paddingLeft: 35,
        paddingTop: 15,
        fontSize: 15
    },
    feedback: {
        fontSize: 25,
        color: 'magenta',
        padding: 25
    },
    body: {
        backgroundColor: '#669BC7'
    }
})
export default Login