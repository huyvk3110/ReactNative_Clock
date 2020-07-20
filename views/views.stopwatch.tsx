import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ClockDisplay from '../components/components.clockdisplay';
import ButtonArea from '../components/components.buttonarea';
import TimeList from '../components/components.timeslist';

export default class StopWatch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.topLayout}
                >
                    <ClockDisplay />
                </View>
                <View
                    style={styles.botLayout}
                >
                    <ButtonArea />
                    <TimeList data={[1, 2, 3, 4, 5, 6, 7, 8]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topLayout: {
        flex: 0.5,
    },
    botLayout: {
        flex: 0.5,
        justifyContent: 'flex-end',
    },
});