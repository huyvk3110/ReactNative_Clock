import React from "react"
import { View, Text, StyleSheet, PixelRatio } from "react-native"
import { CLOCK } from "../define/define.fontSize"
import { timeFormat } from "../utils/utils.string"

interface IProps {
    time: number
}

export default function ClockDisplay({ time }: IProps) {
    let arr = timeFormat(time).split(':');

    return (
        <View style={styles.contain}>
            <View style={styles.time}>
                <View style={styles.number}>
                    <Text style={styles.text}>{arr[0]}</Text>
                </View>
                <View style={styles.symbol}>
                    <Text style={styles.text}>:</Text>
                </View>
                <View style={styles.number}>
                    <Text style={styles.text}>{arr[1]}</Text>
                </View>
                <View style={styles.symbol}>
                    <Text style={styles.text}>.</Text>
                </View>
                <View style={styles.number}>
                    <Text style={styles.text}>{arr[2]}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        fontWeight: '200',
        fontSize: CLOCK,
    },
    number: {
        flex: 0.3,
        alignItems: 'center',
    },
    symbol: {
        flex: 0.05,
        alignItems: 'center',
    }
})