import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const Counter = () =>{
    const [count, setCount] = useState(0)

    return(
        <View style={styles.container}>
            <Text>You clicked the button {count} times</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)} title='Click me'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ef476f',
    },
    button: {
        
        backgroundColor: '#073b4c',
        padding: 10,
        marginBottom: 10
    }
})

export default Counter