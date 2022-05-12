import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import Hello from '../components/Hello'
import Counter from '../components/counter'

const HomeScreen = () => {
    return(
        <ScrollView style={styles.body}>
            <Hello name={'userName'} />
            <Counter/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#669BC7'
    }
})


export default HomeScreen