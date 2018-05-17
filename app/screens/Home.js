import React, { Component } from 'react';

import {Actions} from 'react-native-router-flux';

import { Button } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage,
} from 'react-native-elements'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  Animated,
  Keyboard
} from 'react-native';

import {
	LinearGradient
} from 'expo';

import EvilIcons	from 'react-native-vector-icons/EvilIcons';
import Icon			from 'react-native-vector-icons/EvilIcons';

import Metrics		from '../helpers/Metrics'
import Hr			from '../components/Hr'
import Background	from '../components/Background'

// import users from '../data/users'

let backgroundImage;

export default class Home extends Component {
	constructor() {
		super();

		this.state = {
			loading: false
		}

		this.keyboardHeight = new Animated.Value(0);
		this.imageHeight = new Animated.Value(Metrics.logo.height);
		this.imageWidth = new Animated.Value(Metrics.logo.width);
	}
	componentWillMount() {
		StatusBar.setHidden(true);
		backgroundImage = require('../img/bg-tiny.png')

		this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
		this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
	}

	componentWillUnmount() {
		this.keyboardWillShowSub.remove();
		this.keyboardWillHideSub.remove();
	}

	keyboardWillShow = (event) => {
		Animated.parallel([
			Animated.timing(this.keyboardHeight, {
				duration: event.duration,
				toValue: event.endCoordinates.height,
			}),
			Animated.timing(this.imageHeight, {
				duration: event.duration,
				toValue: Metrics.logoSmall.height,
			}),
			Animated.timing(this.imageWidth, {
				duration: event.duration,
				toValue: Metrics.logoSmall.width,
			}),
		]).start();
	}

	keyboardWillHide = (event) => {
		Animated.parallel([
			Animated.timing(this.keyboardHeight, {
				duration: event.duration,
				toValue: 0,
			}),
			Animated.timing(this.imageHeight, {
				duration: event.duration,
				toValue: Metrics.logo.height,
			}),
			Animated.timing(this.imageWidth, {
				duration: event.duration,
				toValue: Metrics.logo.width,
			}),
		]).start();
	}

	goTo = () => {
		Actions.Options();
	}

	pressLogin = () => {
		this.setState({loading: true});
		setTimeout(() => {
			this.setState({loading: false});
			Actions.Options();
		}, 1000)
	}

	render() {
		return (
			<Background>
				<View style={styles.homeView}>
					<Animated.View style={{ flex: 1, paddingBottom: this.keyboardHeight }}>
					<View style={styles.logo}>
						<Animated.Image source={require('../img/logo.png')} style={[styles.image, { height: this.imageHeight, width: this.imageWidth }]} />
					</View>
					<View style={styles.loggingView}>{/* Bloc connexion */}
						<View style={styles.loginView}>
								<View style={styles.loginIcon}>
									<Icon color={'white'} name="user" size={60} />
								</View>
								<View>
									<FormLabel containerStyle={styles.loginFormContainer} labelStyle={styles.loginFormLabel}>IDENTIFIANT</FormLabel>
									<FormInput containerStyle={styles.loginInputContainer} placeholder="Entrez vos identifiants" inputStyle={styles.loginInput} onChangeText={() => {}}/>
								</View> {/* Identifiant */}
						</View>
						<Hr/>
						<View style={styles.passwordView}>
							<View style={styles.passwordIcon}>
								<Icon color={'white'} name="lock" size={60} />
							</View>
							<View style={styles.passwordFormView}> {/* Mot de passe */}
								<FormLabel labelStyle={styles.passwordFormLabel}>MOT DE PASSE</FormLabel>
								<FormInput containerStyle={styles.passwordInputContainer} placeholder="******" inputStyle={styles.passwordInput} secureTextEntry={true} onChangeText={() => {}}/>
							</View>
						</View>
						<Hr/>
						<View style={styles.buttonLoggingView}>  {/* Connexion */}
							<Button
								title="CONNEXION"
								loading={this.state.loading}
								loadingProps={{size: "large", color: "rgba(111, 202, 186, 1)"}}
								textStyle={styles.buttonLoggingText}
								buttonStyle={styles.buttonText}
								containerStyle={styles.buttonLoggingContainer}
								onPress={this.pressLogin}
							/>
						</View>
					</View>
				</Animated.View>
				<View style={styles.informationView}>
					<Text style={styles.areYouRegistered}>VOUS N'ETES PAS ENCORE INSCRIT ?</Text>
					<Text style={styles.registerButton} onPress={this.goTo}>S'INSCRIRE</Text>
				</View>
			</View>
		</Background>
		);
	}
}

const styles = StyleSheet.create({
	homeView: {
		flex: 1, flexDirection:'column', justifyContent: 'space-between', backgroundColor: 'transparent'
	},
	loggingView: {
		flex: 1, marginTop: 30
	},
	loginView: {
		flexDirection:'row'
	},
	loginIcon: {
		justifyContent: 'center', marginTop: 10, marginLeft: 10
	},
	loginFormContainer: {
		marginLeft: 0
	},
	loginFormLabel: {
		fontFamily: 'Futura-Medium', fontWeight: '200', color: '#fff', marginLeft: 10
	},
	loginInputContainer: {
		marginLeft: 10, width: '10%', borderBottomColor: 'transparent'
	},
	loginInput: {
		color: '#fff'
	},
	passwordView: {
		flexDirection:'row', 'borderColor': 'transparent', 'borderBottomColor': 'white', borderWidth: 0
	},
	passwordIcon: {
		justifyContent: 'center', marginTop: 10, marginLeft: 10
	},
	passwordFormView: {
		'borderColor': 'white', borderWidth: 0
	},
	passwordFormLabel: {
		fontFamily: 'Futura-Medium', fontWeight: '200', color: '#fff', marginLeft: 10
	},
	passwordInputContainer: {
		marginLeft: 10, width: '60%', borderBottomColor: 'transparent'
	},
	passwordInput: {
		color: '#fff'
	},
	buttonLoggingView: {
		borderColor: 'transparent', borderStyle: 'solid', borderWidth: 3, alignItems: 'center', marginTop: '6%'
	},
	buttonLoggingText: {
		fontFamily: 'Futura-Medium', fontWeight: "600"
	},
	buttonLoggingContainer: {
		marginTop: 20
	},
	informationView: {
		alignItems: 'center', marginTop: 10, marginLeft: 10, marginBottom: Metrics.marginBottom20
	},
	areYouRegistered: {
		fontSize: 13,
		fontFamily: 'Futura-Medium',
		color: 'white',
		fontWeight: 'normal',
		marginTop: 15
	},
	registerButton: {
		fontSize: 13,
		fontFamily: 'Futura-Medium',
		color: 'white',
		fontWeight: 'bold',
		marginTop: 5
	},
	logo: {
		justifyContent: 'center',
		marginTop: Metrics.logo.marginTop,
		alignItems: 'center',
	},
	image: {
		width: Metrics.logo.width,
		height: Metrics.logo.height,
	},
	buttonText: {
		width: 300,
		height: 45,
		borderRadius: 50,
		backgroundColor: "transparent",
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
	},
});
