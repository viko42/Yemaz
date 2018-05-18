import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import { Button } from 'react-native-elements';
import { Actions }	from 'react-native-router-flux';

import {
	FormLabel, FormInput, FormValidationMessage
} from 'react-native-elements'

import {
	LinearGradient
} from 'expo';

import Hr			from '../components/Hr'
import Background	from '../components/Background'
import Metrics		from '../helpers/Metrics'

export default class PhaseOne extends Component {
	constructor() {
		super();

		this.state = {
			buttonNextTitle: "Phase 2",
			buttonSuccessTitle: "Ça va mieux",
			phaseText: "Préparez-lui un tajin et 'regardez' titanic",
			phaseNumber: "1",
		}
	}
	goTo = () => {
		Actions.PhaseTwo();
	}
	goToEnd = () => {
		Actions.PhaseFinal();
	}
	componentWillMount() {
		StatusBar.setHidden(true);
	}
	render() {
		return (
			<Background>
				<ScrollView contentContainerStyle={styles.mainScrollView}>
					<View style={styles.circleView}>
						<View style={styles.circleRound}>
							<Text style={styles.circleNumber}>{this.state.phaseNumber}</Text>
						</View>
						<View style={styles.circleBottomView}>
							<Text style={styles.circleBottomText}>{this.state.phaseText}</Text>
						</View>
					</View>
					<Hr/>
					<View style={styles.choiceView}>
						<Button
							title={this.state.buttonSuccessTitle}
							large={false}
							textStyle={styles.choiceButtonText}
							buttonStyle={styles.buttonText}
							onPress={this.goToEnd}/>
						<Button
							title={this.state.buttonNextTitle}
							large={false}
							textStyle={styles.choiceButton2Text}
							buttonStyle={styles.buttonTextWhite}
							onPress={this.goTo}/>
					</View>
				</ScrollView>
			</Background>
		);
	}
}

const styles = StyleSheet.create({
	mainScrollView: {
		flex: 1, flexDirection: 'column', justifyContent: 'center'
	},
	choiceButton2Text: {
		fontFamily: 'Futura-Medium', fontWeight: "600", color: '#f25177'
	},
	choiceButtonText: {
		fontFamily: 'Futura-Medium', fontWeight: "600"
	},
	choiceView: {
		borderColor: 'white', borderStyle: 'solid', borderColor: '#fff', borderWidth: 0, alignItems: 'center', marginTop: 40,
	},
	circleBottomText: {
		textAlign: 'center', fontFamily: 'Futura-Medium', fontSize: 18, color: 'white'
	},
	circleBottomView: {
		width: '80%', alignItems: 'center', justifyContent: 'center', 'borderColor': 'white', borderWidth: 0
	},
	circleNumber: {
		fontFamily: 'Futura-Medium', fontSize: 50, color: 'white'
	},
	circleRound: {
		margin: Metrics.margin['40'], marginTop: Metrics.margin.top['5'], width: Metrics.phaseCircle.width, height: Metrics.phaseCircle.height, borderRadius: Metrics.phaseCircle.height / 2, 'borderColor': 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center'
	},
	circleView: {
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 10
	},
	buttonText: {
		width: 150,
		height: 45,
		borderRadius: 50,
		backgroundColor: "transparent",
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
		margin: 10
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
	},
});
