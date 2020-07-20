import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { TEXT, BACKGROUND } from "../define/define.color";
import { BUTTON } from "../define/define.fontSize";
import { BUTTON_STATE } from "../define/define.key";

interface IProps {
    title: string,
    handleFunc: Function,
    buttonState: BUTTON_STATE,
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
    disable: { color: TEXT.DISABLE },
    normal: { color: TEXT.NORMAL },
    success: { color: TEXT.SUCCESS },
    danger: { color: TEXT.DANGER },
})

const colorsButton = StyleSheet.create({
    disable: { backgroundColor: BACKGROUND.DISABLE },
    normal: { backgroundColor: BACKGROUND.NORMAL },
    success: { backgroundColor: BACKGROUND.SUCCESS },
    danger: { backgroundColor: BACKGROUND.DANGER },
})

const colorsBorder = StyleSheet.create({
    disable: { borderColor: BACKGROUND.DISABLE },
    normal: { borderColor: BACKGROUND.NORMAL },
    success: { borderColor: BACKGROUND.SUCCESS },
    danger: { borderColor: BACKGROUND.DANGER },
})

//-Style
const styles = StyleSheet.create({
    title: {
        fontSize: BUTTON,
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