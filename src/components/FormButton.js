import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import { windowHeight, windowWidth} from '../utils/Dimensions'

const FormButton = (props) => {
    return(
        <Pressable >
            <Text style={styles.btnText}> {props.text} </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 15
    },
    btnContainer: {
        marginTop: 10,
        width: windowWidth / 2,
        height: windowHeight / 15,
        backgroundColor: '#2a9d8f',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})

export default FormButton;