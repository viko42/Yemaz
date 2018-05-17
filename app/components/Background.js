import React, { Component } from 'react'

import {
	View
} from 'react-native'

import {
	LinearGradient
} from 'expo';

export default class Background extends Component {
	render() {
		return (
			<LinearGradient style={{flex: 1}} colors={[ '#f25177', '#f5774a' ]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
				{this.props.children}
			</LinearGradient>
		)
	}
}
