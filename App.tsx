import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TEXT, NAVIGATOR } from './define/define.color';
import { NAVIGATOR as NAVIGATOR_FONTSIZE } from './define/define.fontSize';
import StopWatch from './views/views.stopwatch';
import Time from './views/views.time';

const Tab = createBottomTabNavigator();

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle='light-content' />
				<NavigationContainer theme={DarkTheme}>
					<Tab.Navigator
						tabBarOptions={{
							activeTintColor: TEXT.WARNING,
							inactiveTintColor: TEXT.NORMAL,
							labelStyle: {
								fontSize: NAVIGATOR_FONTSIZE,
								fontWeight: '600'
							},
							style: {
								backgroundColor: NAVIGATOR.BACKGROUND,
							},
						}}
					>
						<Tab.Screen
							name="Time"
							component={Time}
							options={{
								title: "Time",
								tabBarIcon: ({ focused }) => (<Image source={require('./icons/clock.png')} style={StyleSheet.flatten([styles.icon, focused ? colors.active : colors.inactive])} />),
							}}
						/>
						<Tab.Screen
							name="StopWatch"
							component={StopWatch}
							options={{
								title: "Stop Watch",
								tabBarIcon: ({ focused }) => (<Image source={require('./icons/stop-watch.png')} style={StyleSheet.flatten([styles.icon, focused ? colors.active : colors.inactive])} />),
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: '#fff',
		backgroundColor: 'rgb(13,13,13)',
	},
	icon: {
		width: 25,
		height: 25,
		tintColor: TEXT.NORMAL,
	},
});

const colors = StyleSheet.create({
	active: {
		tintColor: TEXT.WARNING,
	},
	inactive: {
		tintColor: TEXT.NORMAL,
	},
})
