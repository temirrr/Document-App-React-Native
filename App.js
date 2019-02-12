/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Modal, ScrollView} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Divider } from 'react-native-elements';

/*refer to https://github.com/facebook/react-native/issues/4968 . When I use "import smth from 'moduleName'",
there's an error, even though I properly use "@providesModule" in those modules
That's why I just found temporary workaround by specifying the full path to the module's js file*/
import CustomTop from 'C\:\\Users\\User\\helloworld\\src\\components\\CustomTop';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\fonts';
import textStyles from 'C\:\\Users\\User\\helloworld\\src\\config\\typography';

//StyleSheet by 'react-native-bootstrap-styles' library
let
  REM = BootstrapStyleSheet.DIMENSIONS_WIDTH < 360 ? 14 : 16,
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';
// custom constants
let constants = {REM, BODY_COLOR, TEXT_MUTED,};
// custom classes
let classes = {
  title: {
    color: 'red',
  }
};

let bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
let s = bootstrapStyleSheet.create(); //styles
let c = bootstrapStyleSheet.constants; //constants

//StyleSheet obtained from Andrew's project.
//It was transformed to JavaScript object by 'css-to-react-native' library and some manual work. 
let myStyles = StyleSheet.create({
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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <ScrollView>
          <CustomTop content={['Document', 'Recognition', 'App']} />

          <View style={[s.justifyContentCenter, s.alignItemsCenter]}>
            <Text style={[textStyles.smallText]}>
              <Text>
              Welcome to Document Recognition app.
              </Text> 
              <Text>
              This app uses OpenCV's OCR (Optical Character Recognition) to help obtain the data from your document in digital form.
              </Text>
            </Text>
          </View>

          <Divider style={{backgroundColor: 'orange'}} />
        </ScrollView>
      </View>
    );
  }
}
