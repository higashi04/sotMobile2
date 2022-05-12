import { Text, StyleSheet, View } from "react-native";

export default function Hello (props) {
    return(
        <View>
            <Text style={styles.text}> Hello, {props.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        borderWidth: 25,
        borderColor: '#ffd166'
    }
})