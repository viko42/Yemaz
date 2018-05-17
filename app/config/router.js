import React from 'react'

import { StackNavigator }	from 'react-navigation'

import Home					from '../screens/Home'
import Options				from '../screens/Options'
import PhaseOne				from '../screens/PhaseOne'

import Icon from 'react-native-vector-icons/Entypo';

import {
	LinearGradient
} from 'expo'

import {
	View,
	Header,
	Text,
	ImageBackground,
	YellowBox,
	StyleSheet
} from 'react-native'

import {
	Scene,
	Router,
	Modal,
	Actions
} from 'react-native-router-flux'

import NavbarBackground from '../components/NavbarBackground'

const ImageHeader = (title, typeScreen) => (
	<View style={styles.imageHeader.mainView}>
		<NavbarBackground />

		{typeScreen && typeScreen === 'modal' &&
			<View>
				<View style={styles.imageHeader.modalChevron}>
					<Icon name="chevron-thin-up" size={20} onPress={() => Actions.pop()} />
				</View>
				<View style={styles.imageHeader.modalTitleView}>
					<Text style={styles.imageHeader.modalTitle}>{title || 'None'}</Text>
				</View>
			</View>
		}

		{typeScreen && typeScreen === 'screen' &&
			<View style={styles.imageHeader.screenView}>
				<View style={styles.imageHeader.screenChevron}>
					<Icon name="chevron-thin-left" size={20} onPress={() => Actions.pop()} />
				</View>
				<View style={styles.imageHeader.screenTitleView}>
					<Text style={styles.imageHeader.screenTitle}>{title || 'None'}</Text>
				</View>
			</View>
		}
	</View>
);

export const Root = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="tabBar" hideNavBar>
					<Modal>
						<Scene key="Home" component={Home} hideNavBar initial/>
						<Scene key="Options" navBar={ImageHeader.bind(null, 'PERSONNALITÉ', 'modal')} component={Options}/>
					</Modal>
					<Scene key="PhaseOne" navBar={ImageHeader.bind(null, 'PHASE 1', 'screen')} hideNavBar={false} component={PhaseOne} />
				</Scene>
			</Scene>
		</Router>
	)
}

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const styles = {
	imageHeader: StyleSheet.create({
		mainView: {
			backgroundColor: 'transparent', height: 80, justifyContent: 'center'
		},
		modalChevron: {
			justifyContent: 'flex-start', alignItems: 'center'
		},
		modalTitleView: {
			alignItems: 'center', borderColor: 'white', borderWidth: 0, borderStyle: 'solid'
		},
		modalTitle: {
			fontFamily: 'Futura-Medium', color: 'white', fontSize: 17, fontWeight: '700'
		},
		screenView: {
			flexDirection: "row", flex: 1, alignItems: 'center', width: '100%'
		},
		screenChevron: {
			flex: 1, borderColor: 'white', borderWidth: 0, borderStyle: 'solid', margin: 20
		},
		screenTitleView: {
			flex: 2, alignItems: 'flex-start', borderColor: 'white', borderWidth: 0, borderStyle: 'solid'
		},
		screenTitle: {
			fontFamily: 'Futura-Medium', color: 'white', fontSize: 17, fontWeight: '700'
		}
	}),

};
