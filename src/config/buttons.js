/**
* @providesModule ButtonStyles
*/

import colors from 'Colors';
import constants from 'Constants';
import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  buttonPrimary: {
    height: 35,
    borderRadius: 3
  },
  buttonOutline: {
    ...buttonPrimary,
    borderWidth: 2 
  },
  buttonOutlineDark: {
    ...buttonOutline,
    borderColor: colors.black
  },
  buttonOutlineWhite: {
    ...buttonOutline,
    borderColor: colors.white
  },
  buttonFull: {
    width: '100%',
    marginLeft: 0,
    marginRight: 0
});

export default buttonStyles;