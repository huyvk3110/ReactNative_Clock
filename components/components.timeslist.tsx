import React from "react";
import { StyleSheet, FlatList, View, Text, PixelRatio } from "react-native";
import { CONTENT } from "../define/define.fontSize";
import { timeFormat } from "../utils/utils.string";

/* INTERFACE */
interface IProps {
    data: number[]
}

interface IItemProps {
    lap?: number,
    time?: number,
}

function TimeListItem({ time, lap }: IItemProps) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{typeof lap == 'number' ? `Lap ${lap.toString()}` : ''}</Text>
            <Text style={styles.text}>{typeof time == 'number' ? timeFormat(time) : ''}</Text>
        </View>
    )
}

export default function TimeList({ data }: IProps) {
    //Add lap
    let handledData: IItemProps[] = data.map((o, i) => ({ time: o, lap: i + 1 }));
    //Check list data length
    handledData = Array(handledData.length < 8 ? 8 - handledData.length : 0).fill('').concat(handledData)

    //Render
    return (
        <View style={styles.contain}>
            <FlatList
                data={handledData.map((o, i) => Object.assign(o, { key: i })).reverse()}
                renderItem={({ item }) => (<TimeListItem time={item.time} lap={item.lap} />)}
                keyExtractor={o => o.key.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        height: 320/PixelRatio.get(),
    },
    item: {
        padding: 8,
        flexDirection: "row",
        justifyContent: 'space-between',
        borderTopColor: 'rgba(255,255,255,0.1)',
        borderTopWidth: 0.3,
        minHeight: 40
    },
    text: {
        fontSize: CONTENT,
        color: '#fff'
    }
})