import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import StopWatch from './views/views.stopwatch';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StopWatch/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'rgb(13,13,13)',
    padding: 20,
  },
});
