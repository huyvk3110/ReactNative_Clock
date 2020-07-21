import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ClockDisplay from '../components/components.clockdisplay';
import ButtonArea from '../components/components.buttonarea';
import TimeList from '../components/components.timeslist';

interface IProp {

}

interface IState {
    timeStart: number,
    timeEnd: number,
    laps: number[],
    isRunning: boolean,
}

let timeOutProcess: NodeJS.Timeout | undefined = undefined;

export default class StopWatch extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)

        this.state = {
            timeStart: Date.now(),
            timeEnd: Date.now(),
            laps: [],
            isRunning: false
        }

        this.onClickLap = this.onClickLap.bind(this);
        this.onClickStartStop = this.onClickStartStop.bind(this);
    }

    /* Handle */
    onClickLap() {
        let { isRunning, laps } = this.state;

        if (!isRunning && laps.length) {
            this.setState({
                laps: [],
                timeStart: Date.now(),
                timeEnd: Date.now(),
            })
        } else if (isRunning && laps.length) {
            this.setState({
                laps: laps.concat([laps[laps.length - 1]])
            })
        }
    }

    onClickStartStop() {
        let { isRunning, laps } = this.state;

        if (!isRunning) {
            if (!laps.length) {
                this.setState({
                    isRunning: true,
                    timeStart: Date.now(),
                    timeEnd: Date.now(),
                    laps: [0]
                })
            } else {
                this.setState({
                    isRunning: true,
                    timeStart: Date.now() - laps[laps.length - 1],
                    timeEnd: Date.now(),
                })
            }
        } else {
            this.setState({
                isRunning: false,
            })
        }
    }

    /* LIFE CIRCLE */
    componentDidUpdate() {
        let { isRunning } = this.state;

        if (timeOutProcess) {
            clearTimeout(timeOutProcess);
            timeOutProcess = undefined;
        }

        if (isRunning) {
            timeOutProcess = setTimeout(() => {
                let { laps, timeStart, timeEnd } = this.state;

                timeEnd = Date.now();
                laps[laps.length - 1] = timeEnd - timeStart;

                this.setState({ timeEnd, laps })
            }, 20)
        }
    }

    render() {
        const { laps, isRunning, timeEnd, timeStart } = this.state;

        return (
            <View style={styles.container}>
                <View
                    style={styles.topLayout}
                >
                    <ClockDisplay time={timeEnd - timeStart} />
                </View>
                <View
                    style={styles.botLayout}
                >
                    <ButtonArea onClickLap={this.onClickLap} onClickStartStop={this.onClickStartStop} laps={laps} isRunning={isRunning} />
                    <TimeList data={laps} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 15,
    },
    topLayout: {
        flex: 1,
    },
    botLayout: {
        justifyContent: 'flex-end',
    },
});