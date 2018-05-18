import { Dimensions, Platform } from 'react-native'
import NormalizeSize from './Normalize'

const { width, height } = Dimensions.get('window')

const metrics = {
	marginHorizontal: NormalizeSize.normalize(10),
	marginVertical: NormalizeSize.normalize(10),
	marginBottom20: NormalizeSize.normalize(20),
	logo: {
		height: NormalizeSize.normalize(200),
		width: NormalizeSize.normalize(200),
		marginTop: NormalizeSize.normalize(30),
	},
	logoSmall: {
		height: NormalizeSize.normalize(100),
		width: NormalizeSize.normalize(100),
		marginTop: NormalizeSize.normalize(1),
	},
	margin: {
		bottom: {
			"5": NormalizeSize.normalize(5),
			"10": NormalizeSize.normalize(10),
			"20": NormalizeSize.normalize(20),
			"30": NormalizeSize.normalize(30),
			"40": NormalizeSize.normalize(40),
		},
		top: {
			"5": NormalizeSize.normalize(5),
			"10": NormalizeSize.normalize(10),
			"20": NormalizeSize.normalize(20),
			"30": NormalizeSize.normalize(30),
			"40": NormalizeSize.normalize(40),
		},
		left: {
			"5": NormalizeSize.normalize(5),
			"10": NormalizeSize.normalize(10),
			"20": NormalizeSize.normalize(20),
			"30": NormalizeSize.normalize(30),
			"40": NormalizeSize.normalize(40),
		},
		right: {
			"5": NormalizeSize.normalize(5),
			"10": NormalizeSize.normalize(10),
			"20": NormalizeSize.normalize(20),
			"30": NormalizeSize.normalize(30),
			"40": NormalizeSize.normalize(40),
		},
		"5": NormalizeSize.normalize(5),
		"10": NormalizeSize.normalize(10),
		"15": NormalizeSize.normalize(15),
		"20": NormalizeSize.normalize(20),
		"25": NormalizeSize.normalize(25),
		"30": NormalizeSize.normalize(30),
		"35": NormalizeSize.normalize(35),
		"40": NormalizeSize.normalize(40),
	},
	phaseCircle: {
		"height": NormalizeSize.normalize(200),
		"width": NormalizeSize.normalize(200),
	},
}

export default metrics
