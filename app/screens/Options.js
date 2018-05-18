import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

import { Button }	from 'react-native-elements';
import { Actions }	from 'react-native-router-flux';

import {
	FormLabel, FormInput, FormValidationMessage,
} from 'react-native-elements'

import {
	LinearGradient
} from 'expo';

import Hr from '../components/Hr'
import Background from '../components/Background'

let backgroundImage

export default class Options extends Component {
	constructor() {
		super();

		this.state = {
			loading: false
		}
	}
	componentWillMount() {
		backgroundImage = require('../img/bg-tiny.png')
		StatusBar.setHidden(true);
	}
	goTo = () => {
		Actions.PhaseOne();
	}
	render() {
		return (
			<Background>
				<KeyboardAvoidingView
					resetScrollToCoords={{ x: 0, y: 0 }}
					scrollEnable={false}
					behavior="padding"
				>
					<ScrollView>
						<View>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QUEL EST TON FILM PRÉFÉRÉ ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Titanic" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QUEL EST TON REPAS PRÉFÉRÉ ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Pâtes" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QUEL EST TON TA MUSIQUE PRÉFÉRÉ ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Brel - La mer" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QU'EST-CE QUE TU AIMES LE PLUS CHEZ TOI ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Mes cheveux" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QU'EST-CE QUE TU AIMES LE PLUS CHEZ TON/TA PARTENAIRE ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Son rire" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QU'EST-CE QUE TU AIMES LE MOINS CHEZ TOI ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Ton rire" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View style={{paddingBottom: 20}}>
							<FormLabel containerStyle={styles.questionFormContainer} labelStyle={styles.questionFormLabel}>QU'EST-CE QUE TU AIMES LE MOINS CHEZ TON/TA PARTENAIRE ?</FormLabel>
							<FormInput containerStyle={styles.questionInputContainer} placeholder="eg: Son rire" inputStyle={styles.questionInput} onChangeText={() => {}}/>
							<Hr />
						</View>
						<View style={styles.nextButton}>
							<Button
								title="Suivant"
								large={false}
								textStyle={styles.nextButtonFont}
								buttonStyle={styles.buttonText}
								onPress={this.goTo}
							/>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
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
	},
	nextButtonFont: {
		fontFamily: 'Futura-Medium', fontWeight: "600"
	},
	nextButton: {
		borderColor: 'transparent', borderStyle: 'solid', borderColor: '#fff', borderWidth: 0, alignItems: 'center', margin: 10
	},
	questionFormContainer: {
		alignItems: 'flex-start'
	},
	questionFormLabel: {
		fontFamily: 'Futura-Medium', fontWeight: '200', color: '#fff'
	},
	questionInputContainer: {
		borderBottomColor: 'transparent'
	},
	questionInput: {
		color: '#fff'
	},
});
