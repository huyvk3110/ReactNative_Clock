import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

interface IProps {
    title: string,
    handleFunc: Function,
    buttonState: 'normal' | 'success' | 'danger',
}

export default function ButtonCircle({ handleFunc, buttonState, title }: IProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { handleFunc() }}
            style={StyleSheet.flatten([styles.button, colorsBorder[buttonState]])}
        >
            <View style={StyleSheet.flatten([styles.buttonContent, colorsButton[buttonState]])}>
                <Text style={StyleSheet.flatten([styles.title, colorsText[buttonState]])}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

/* CONSTANT */
const SIZE = 95;

/* StyleSheet */
//-Color
const colorsText = StyleSheet.create({
    normal: { color: 'rgb(152,152,158)' },
    success: { color: 'rgb(102,203,102)' },
    danger: { color: 'rgb(228,81,67)' },
})

const colorsButton = StyleSheet.create({
    normal: { backgroundColor: 'rgb(28,28,30)' },
    success: { backgroundColor: 'rgb(19,41,20)' },
    danger: { backgroundColor: 'rgb(47,16,14)' },
})

const colorsBorder = StyleSheet.create({
    normal: { borderColor: 'rgb(28,28,30)' },
    success: { borderColor: 'rgb(19,41,20)' },
    danger: { borderColor: 'rgb(47,16,14)' },
})

//-Style
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
    },
    button: {
        height: SIZE,
        width: SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZE * 0.5,
        borderWidth: 2
    },
    buttonContent: {
        width: SIZE - 10,
        height: SIZE - 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (SIZE - 10) * 0.5,
    }
})