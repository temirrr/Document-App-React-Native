/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

let
  REM = BootstrapStyleSheet.DIMENSIONS_WIDTH < 360 ? 14 : 16,
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
let constants = {
  REM,
  BODY_COLOR, TEXT_MUTED,
};

// custom classes
let classes = {
  title: {
    color: 'red',
  }
};

let bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
let s = styles = bootstrapStyleSheet.create();
let c = constants = bootstrapStyleSheet.constants;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[s.container, s.justifyContentCenter]}>
          <Text style={[s.text, s.h3, s.textPrimary, s.myXs1, s.myMd3]}>Hello world!</Text>
          <Text style={[s.text, s.py3, {fontSize: 5 * c.REM}]}>🚀🚀🚀🚀🚀🚀</Text>
        </View>

        <View style={[s.container, s.justifyContentCenter]}>
          <Text style={s.text}>Welcome to React Native!</Text>
          <Text style={s.text}>Takes 1-2 mins to launch</Text>
        </View>
      </View>
    );
  }
}
