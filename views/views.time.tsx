import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CLOCK } from "../define/define.fontSize";
import { pad } from "../utils/utils.string";

interface IProps {

}

interface IState {
    time: Date
}

export default class Time extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        let { time } = this.state;
        let [hh, mm, ss] = ["", "", ""];

        hh = pad(time.getHours(), 2);
        mm = pad(time.getMinutes(), 2);
        ss = pad(time.getSeconds(), 2);

        return (
            <View style={styles.contain}>
                <View style={styles.time}>
                    <View style={styles.number}>
                        <Text style={styles.text}>{hh}</Text>
                    </View>
                    <View style={styles.symbol}>
                        <Text style={styles.text}>:</Text>
                    </View>
                    <View style={styles.number}>
                        <Text style={styles.text}>{mm}</Text>
                    </View>
                    <View style={styles.symbol}>
                        <Text style={styles.text}>:</Text>
                    </View>
                    <View style={styles.number}>
                        <Text style={styles.text}>{ss}</Text>
                    </View>
                </View>
            </View>
        )
    }
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