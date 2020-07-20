import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonCircle from './components.buttoncircle';

export default function ButtonArea() {
    //Method
    const onClickLap = () => {
        console.log('On click lap');
    }

    const onClickStart = () => {
        console.log('On click start');
    }

    return (
        <View
            style={styles.contain}
        >
            <ButtonCircle
                title={'Lap'}
                handleFunc={onClickLap}
                buttonState='normal'
            />
            <ButtonCircle
                title={'Start'}
                handleFunc={onClickStart}
                buttonState='success'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
})