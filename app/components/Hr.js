import React, { Component } from 'react'

import {
	View,
	StyleSheet
} from 'react-native'

import {LinearGradient} from 'expo';

type Props = {};
export default class Hr extends Component<Props> {
	render() {
		return (
			<View>
				<LinearGradient style={styles.gradient} colors={[ 'rgba(255,255,255,0)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	gradient: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		right: 0,
		height: 1,
	},
});
