/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { Button } from 'react-native-elements';

import { FormLabel, FormInput, FormValidationMessage,
} from 'react-native-elements'

import {LinearGradient} from 'expo';

import Hr from '../components/Hr'
import Background from '../components/Background'

export default class PhaseOne extends Component {
	constructor() {
		super();

		this.state = {
			// loading: false
		}
	}
	goTo = () => {
		this.props.navigation.navigate('PhaseTwo')
	}
	render() {
		return (
			<Background>

				<ScrollView>
					<View style={{
						flex: 1,
				        flexDirection: 'column',
				        alignItems: 'center',
						margin: 10}}>
						<View style={{margin: 40, width: 200, height: 200, borderRadius: 200/2, 'borderColor': 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
							<Text style={{fontFamily: 'Futura-Medium', fontSize: 50, color: 'white'}}>1</Text>
						</View>
						<View style={{width: '80%', alignItems: 'center', justifyContent: 'center', 'borderColor': 'white', borderWidth: 0}}>
							<Text style={{textAlign: 'center', fontFamily: 'Futura-Medium', fontSize: 18, color: 'white'}}>Préparez-lui un tajin et 'regardez' titanic</Text>
						</View>
					</View>
					<Hr/>
				<View style={{borderColor: 'white', borderStyle: 'solid', borderColor: '#fff', borderWidth: 0, alignItems: 'center', marginTop: 40}}>
					<Button
						title="Ça va mieux"
						large={false}
						textStyle={{fontFamily: 'Futura-Medium', fontWeight: "600"}}
						buttonStyle={styles.buttonText}
						containerStyle={{}}
						onPress={() => { this.props.navigation.navigate('PhaseOne') }}/>
					<Button
						title="Phase 2"
						large={false}
						textStyle={{fontFamily: 'Futura-Medium', fontWeight: "600", color: '#f25177'}}
						buttonStyle={styles.buttonTextWhite}
						containerStyle={{}}
						onPress={() => { this.props.navigation.navigate('PhaseOne') }}/>
					</View>

				</ScrollView>
			</Background>
		);
	}
}

const styles = StyleSheet.create({
	buttonText: {
		width: 150,
		height: 45,
		borderRadius: 50,
		backgroundColor: "transparent",
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
		margin: 10
		// fontFamily: 'Futura-Medium'
	},
	buttonTextWhite: {
		width: 150,
		height: 45,
		borderRadius: 50,
		backgroundColor: "white",
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
		margin: 10,
		// fontFamily: 'Futura-Medium'
	},
});
