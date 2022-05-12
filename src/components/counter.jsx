import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const Counter = () =>{
    const [count, setCount] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.text}>You clicked the button {count} times, like the moron you are.</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)} title='Click me'>
                <Text style={styles.btnText}>Click me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ef476f',
        margin: 10
    },
    button: {
        backgroundColor: '#073b4c',
        padding: 15,
        margin: 15
    },
    text: {
        padding: 20,
        fontSize: 25,
        color: 'white'
    },
    btnText : {
        color: 'magenta',
        fontSize: 20,
        paddingLeft: 55
    }
})

export default Counter