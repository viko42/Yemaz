import React, { Dimensions } from 'react-native'

const base_unit_height = 592
const base_unit_width = 360

const { width, height } = Dimensions.get('window')

class NormalizeSize {
	normalize = (size) => {
		return ((size / base_unit_height) * height)
	}
}

module.exports = new NormalizeSize();
