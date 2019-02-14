/**
 * @providesModule CustomTop
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import textStyles from 'C\:\\Users\\User\\helloworld\\src\\config\\typography';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\colors';
import normalize from 'C\:\\Users\\User\\helloworld\\src\\normalize';

const customStyles = StyleSheet.create({
	top: {
		backgroundColor: colors.orange,
		justifyContent:'space-around',
		alignItems: 'center',
	},
	text: {
		...textStyles.veryLargeTextBold,
		color: colors.black,
	},
});

class CustomTop extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
    /*textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,*/
  }

  render = () => {
  	const {content} = this.props;

  	return (
  		<View style={[customStyles.top]}>
  			<Text style={[customStyles.text]}>{content[0]}</Text>
  			<Text style={[customStyles.text]}>{content[1]}</Text>
  			<Text style={[customStyles.text]}>{content[2]}</Text>
  		</View>
  	);
  }
};

export default CustomTop;