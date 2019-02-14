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
		backgroundColor: colors.white,
	},
	viewContainer: {
		backgroundColor: colors.white,
		justifyContent:'center',
		alignItems: 'center',
		margin: customMargin,
	},
	modal: {
		backgroundColor: colors.white,
		borderColor: colors.charcoal,
		margin: modalMargin,
		borderRadius: 3,
	}
});


export default myStyles;