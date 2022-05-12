import { Text, StyleSheet, View, Image } from "react-native";
import logo from '../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png'

export default function Hello (props) {
    return(
        <View>
            <Text style={styles.text}> Hello, {props.name}. </Text>
            <Image style={styles.img} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        color: 'white',
        borderWidth: 25,
        borderColor: '#ffd166',
        paddingLeft: 55,
        paddingTop: 50,
        backgroundColor: 'red'
    },
    img: {
        width: 350,
        height: 150,
        marginLeft: 20,
        marginRight: 'auto'
    }
})