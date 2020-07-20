import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function ClockDisplay() {
    return (
        <View style={styles.contain}>
            <Text style={styles.text}>00:00.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: '200',
        fontSize: 90,
    },
})