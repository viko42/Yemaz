import React, { Component } from 'react'

import {
	View
} from 'react-native'

import {
	LinearGradient
} from 'expo';

export default class NavbarBackground extends Component {
	render() {
		return (
			<LinearGradient style={{
				flex: 1,
				flexDirection: 'row',
				position: 'absolute',
				left: 0,
				right: 0,
				height: '100%',
			}} colors={[ '#f5774a', '#f25177']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}/>
		)
	}
}
