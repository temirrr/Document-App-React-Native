/**
 * @providesModule AndrStyles
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import textStyles from 'C\:\\Users\\User\\helloworld\\src\\config\\typography';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\colors';
import normalize from 'C\:\\Users\\User\\helloworld\\src\\normalize';

//StyleSheet obtained from Andrew's project.
//It was transformed to JavaScript object by 'css-to-react-native' library and some manual work. 
let andrStyles = StyleSheet.create({
  body: { 
    backgroundColor: 'lightgrey' 
  },

  h1: { 
    fontSize: 32,
    fontFamily: 'Helvetica',
    color: 'black',
    backgroundColor: 'orange' 
  },

  h4: { 
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20 },

  headerNav: { 
    display: 'flex', 
    justifyContent: 'flex-end' },

  header: { 
    borderTopColor: 'black',
    borderRightColor: 'black',
    borderBottomColor: 'black',
    borderLeftColor: 'black' 
  },

  home: { 
    //backgroundImage: 'url("/assets/AndrewCapFalc.jpg")',
    //backgroundSize: '100% 100%',
    minHeight: 800 
  },

  jumbotron: { 
    display: 'flex',
    alignItems: 'center',
    textShadowOffset: { width: 0.25, height: 0.25 },
    textShadowRadius: 0.25,
    textShadowColor: '#000000' 
  },

  forMargin: { 
    marginLeft: 100 
  },

  marginZero: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
  },

  colorBlack: { 
    color: 'black' 
  },

  fa: { 
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    fontSize: 30,
    width: 30,
    textAlign: 'center',
    textDecorationLine: 'none',
    textDecorationColor: 'black',
    textDecorationStyle: 'solid',
    marginTop: 5,
    marginRight: 2,
    marginBottom: 5,
    marginLeft: 2,
    //borderTopLeftRadius: '50%',
    //borderTopRightRadius: '50%',
    //borderBottomRightRadius: '50%',
    //borderBottomLeftRadius: '50%' 
  },

  faHover: { 
    opacity: 0.7 
  },
});

export default andrStyles;