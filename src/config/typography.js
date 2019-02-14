/**
 * @providesModule TextStyles
 */

import { StyleSheet, Dimensions } from 'react-native';

import fonts from 'C\:\\Users\\User\\helloworld\\src\\config\\fonts';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\colors';
import normalize from 'C\:\\Users\\User\\helloworld\\src\\normalize';

/*next I'll define the scale and normalize(size) function, which helps to obtain the fontSizes or other parameters
suitable for all screen sizes*/
/*const scale = Dimensions.get('window').width / 375;
normalize = (size) => {
  return Math.round(scale * size);
};*/

//fontSize constants
const veryLargeText = normalize(36); //smth like <h1>
const largeText = normalize(26); //smth like <h2> or <h3>, can be also used for buttons
const mediumText = normalize(20); //for buttons
const smallText = normalize(16); //for regular text
const heightScale = 1.6;
const heightScaleSmall = 1.1;
//fontFamily constants
const lightText = fonts.robotoLight;
const regularText = fonts.robotoRegular;
const boldText = fonts.robotoBold;
const italicText = fonts.robotoItalic;
const experimentalText = fonts.chantelliAntiqua;

const textStyles = StyleSheet.create({
	veryLargeText: {
	    fontFamily: lightText,
	    fontSize: veryLargeText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * veryLargeText),
  	},
  	veryLargeTextBold: {
  		fontFamily: boldText,
  		fontSize: veryLargeText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * veryLargeText),
  	},
  	largeText: {
  		fontFamily: lightText,
  		fontSize: largeText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * largeText),
  	},
  	largeTextBold: {
  		fontFamily: boldText,
  		fontSize: largeText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * largeText),
  	},
  	mediumText: {
  		fontFamily: lightText,
  		fontSize: mediumText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * mediumText),
  	},
  	mediumTextBold: {
  		fontFamily: boldText,
  		fontSize: mediumText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * mediumText),
  	},
  	smallText: {
  		fontFamily: lightText,
  		fontSize: smallText,
      color: colors.black,
      lineHeight: Math.round(heightScale * smallText),
  	},
  	smallTextBold: {
  		fontFamily: boldText,
  		fontSize: smallText,
      color: colors.black,
      lineHeight: Math.round(heightScale * smallText),
  	},
  	smallTextItalic: {
  		fontFamily: italicText,
  		fontSize: smallText,
      color: colors.black,
      lineHeight: Math.round(heightScale * smallText),
  	},
  	veryLargeTextExperimental: {
  		fontFamily: experimentalText,
  		fontSize: veryLargeText,
      color: colors.black,
      lineHeight: Math.round(heightScaleSmall * veryLargeText),
  	},
});

export default textStyles;