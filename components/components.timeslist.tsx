import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

/* INTERFACE */
interface IProps {
    data: number[]
}

interface IItemProps {
    index: number,
    time: number,
}

function TimeListItem({ time, index }: IItemProps) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{`Lap ${index.toString()}`}</Text>
            <Text style={styles.text}>{time.toString()}</Text>
        </View>
    )
}

export default function TimeList({ data }: IProps) {
    return (
        <View style={styles.contain}>
            <FlatList
                data={data.map((o, i) => Object.assign(o, { key: i })).reverse()}
                renderItem={({ item }) => (<TimeListItem time={item} index={item.key} />)}
                keyExtractor={o => o.key.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 0.23,
        width: '100%',
    },
    item: {
        padding: 8,
        flexDirection: "row",
        justifyContent: 'space-between',
        borderTopColor: 'rgba(255,255,255,0.1)',
        borderTopWidth: 0.3,
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})