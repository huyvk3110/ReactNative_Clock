import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClockDisplay from './components/components.clockdisplay';
import ButtonArea from './components/components.buttonarea';
import TimeList from './components/components.timeslist';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ClockDisplay />
        <ButtonArea />
        <TimeList data={[1,2,3,4,5,6,7,8]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'rgb(13,13,13)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
