import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';

import { Button } from 'react-native-elements';
import { Actions }	from 'react-native-router-flux';

import {
	FormLabel, FormInput, FormValidationMessage
} from 'react-native-elements'

import EntypoIcons	from 'react-native-vector-icons/Entypo';

import {
	LinearGradient
} from 'expo';

import Hr			from '../components/Hr'
import Background	from '../components/Background'
import Metrics		from '../helpers/Metrics'

export default class PhaseThreeGuide extends Component {
	constructor() {
		super();

		this.state = {
			buttonNextTitle: "GO !",
			phaseTitleText: "Yemaz est là pour vous guider",
			phaseText: "Vous êtes un couple parfait et des auto-stoppeurs de qualité, prenez votre envol !",
			listGuide: [
				"PRÉPARER VOS AFFAIRES",
				"FAIRE UNE BELLE PANCARTE LISIBLE POUR VOTRE PREMIÈRE ÉTAPE",
				"TROUVER L'ENTRÉE D'AUTOROUTE LA PLUS PROCHE",
				"GARDER VOTRE SOURIRE ET VOTRE POUCE LEVÉ",
			],
		}
	}
	goTo = () => {
		Actions.PhaseFinal();
	}
	componentWillMount() {
		StatusBar.setHidden(true);
	}
	render() {
		return (
			<Background>
				<ScrollView contentContainerStyle={styles.mainScrollView}>
					<View style={{borderColor: 'white', borderWidth: 0, borderStyle: 'solid', alignItems: 'center'}}>
						<View style={styles.listTitle}>
							<Text style={styles.listText}>{this.state.phaseTitleText}</Text>
						</View>
						<View style={{}}>
						{this.state.listGuide && this.state.listGuide.map((value, key) => (
							<View key={key} style={{ margin: 10, marginTop: 0 }}>
							  	<View style={{margin: 5, marginTop: 0, flexDirection: 'row', alignItems: 'center'}}>
									<Text style={styles.textBubble}>•</Text>
									<Text style={styles.text}>{value}</Text>
								</View>

							  <View style={{marginTop: 0}}>
								  <Hr/>
							  </View>

							</View>
						))}

						</View>

						<View style={styles.listSuccess}>
							<Text style={styles.listText}>{this.state.phaseText}</Text>
						</View>
					</View>
					<View style={styles.choiceView}>
						<Button
							title={this.state.buttonNextTitle}
							large={false}
							textStyle={styles.choiceButton2Text}
							buttonStyle={styles.buttonTextWhite}
							onPress={this.goTo}/>
							<Image source={require('../img/logo.png')} style={{ height: 50, width: 50 }} />
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
		borderColor: 'white', borderStyle: 'solid', borderColor: '#fff', borderWidth: 0, alignItems: 'center', marginTop: 30,
	},
	listText: {
		textAlign: 'center', fontFamily: 'Futura-Medium', fontSize: 14, color: 'white'
	},
	listTitle: {
		marginLeft: Metrics.margin.left['40'],
		marginRight: Metrics.margin.right['40'],
		marginBottom: Metrics.margin.bottom['10'],
	},
	listSuccess: {
		marginTop: 30,
		marginLeft: Metrics.margin.left['40'],
		marginRight: Metrics.margin.right['40'],
	},

	// circleBottomView: {
	// 	width: '80%', alignItems: 'center', justifyContent: 'center', 'borderColor': 'white', borderWidth: 0
	// },
	text: {
		textAlign: 'left', fontFamily: 'Futura-Medium', fontSize: 15, color: 'white',
	},
	textBubble: {
		fontFamily: 'Futura-Medium', fontSize: 25, color: 'white', marginRight: 5
	},
	// circleRound: {
	// 	margin: Metrics.margin['40'], marginTop: Metrics.margin.top['5'], width: Metrics.phaseCircle.width, height: Metrics.phaseCircle.height, borderRadius: Metrics.phaseCircle.height / 2, 'borderColor': 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center'
	// },
	// circleView: {
	// 	flexDirection: 'column',
	// 	alignItems: 'center',
	// 	marginBottom: 10
	// },
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
