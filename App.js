import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from './app/config/router'

import store from './app/reducers/store';
// const store = getStore();

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Root/>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
