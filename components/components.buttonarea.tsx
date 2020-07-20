import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonCircle from './components.buttoncircle';
import { BUTTON_STATE } from '../define/define.key';

interface IProps {
    onClickLap: Function,
    onClickStartStop: Function,
    laps: number[],
    isRunning: boolean
}

export default function ButtonArea({ onClickLap, onClickStartStop, laps, isRunning }: IProps) {
    return (
        <View
            style={styles.contain}
        >
            <ButtonCircle
                title={!isRunning && laps.length ? 'Reset' : 'Lap'}
                handleFunc={onClickLap}
                buttonState={!isRunning && !laps.length ? BUTTON_STATE.DISABLE : BUTTON_STATE.NORMAL}
            />
            <ButtonCircle
                title={isRunning ? 'Stop' : 'Start'}
                handleFunc={onClickStartStop}
                buttonState={isRunning ? BUTTON_STATE.DANGER : BUTTON_STATE.SUCCESS}
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