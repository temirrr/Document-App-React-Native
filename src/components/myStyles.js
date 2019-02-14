/**
 * @providesModule MyStyles
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import textStyles from 'C\:\\Users\\User\\helloworld\\src\\config\\typography';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\colors';
import normalize from 'C\:\\Users\\User\\helloworld\\src\\normalize';

const customMargin = normalize(25);
const modalMargin = normalize(18);

const myStyles = StyleSheet.create({
	container: {
		flex: 1, //this is not redundant due to bg color
		justifyContent: 'flex-start', //I guess it's default setting, but it's just a reminder for me.
		backgroundColor: colors.white,
	},
	viewContainer: {
		//there is no 'flex:1' property, cause I don't want subcontainers to strectch across the screen
		backgroundColor: colors.white,
		justifyContent:'center',
		alignItems: 'center',
		margin: customMargin,
	},
	unorderedList: {
		alignItems: 'flex-start',
	},
	modal: {
		backgroundColor: colors.white,
		borderColor: colors.charcoal,
		borderRadius: 3,
		//margin: modalMargin,
	},
	buttonDown: {
		flex: 1,
		justifyContent:'flex-end',
	}
});


export default myStyles;