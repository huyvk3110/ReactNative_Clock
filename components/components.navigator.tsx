import React, { Component } from "react";
import { View, Text, StyleSheet, PixelRatio, Image, TouchableWithoutFeedback } from "react-native";
import { TEXT, NAVIGATOR } from "../define/define.color";
import { NAVIGATOR as NAVIGATOR_SIZE } from "../define/define.fontSize";

interface IItemProps {
    icon: any,
    title: string,
    handleFunc: Function,
}

function NavigatorItem({ icon, title, handleFunc }: IItemProps) {
    return (
        <TouchableWithoutFeedback onPress={() => { handleFunc() }}>
            <View style={styles.item}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default function NavigatorBar(props: any) {
    // const navigation = useNavigation();

    const onClickClock = () => {
        // navigation.navigate('Time')
    }

    const onClickStopWatch = () => {
        // navigation.navigate('StopWatch')
    }

    return (
        <View style={styles.container}>
            <NavigatorItem icon={require('../icons/clock.png')} title={"Clock"} handleFunc={onClickClock} />
            <NavigatorItem icon={require('../icons/stop-watch.png')} title={"Stop watch"} handleFunc={onClickStopWatch} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: NAVIGATOR.BACKGROUND
    },
    item: {
        flex: 1,
        alignItems: 'center',
        padding: 2,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: TEXT.NORMAL,
        margin: 5,
    },
    title: {
        color: TEXT.NORMAL,
        fontSize: NAVIGATOR_SIZE,
        fontWeight: '600',
    },
})