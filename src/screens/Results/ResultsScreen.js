import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Modal, Alert, ScrollView} from 'react-native';
import { Divider, Button, Overlay } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

/*refer to https://github.com/facebook/react-native/issues/4968 . When I use "import smth from 'moduleName'",
there's an error, even though I properly use "@providesModule" in those modules
That's why I just found temporary workaround by specifying the full path to the module's js file*/
import CustomTop from 'C\:\\Users\\User\\helloworld\\src\\components\\CustomTop';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\colors';
import textStyles from 'C\:\\Users\\User\\helloworld\\src\\config\\typography';
import myStyles from 'C\:\\Users\\User\\helloworld\\src\\components\\myStyles';
import normalize from 'C\:\\Users\\User\\helloworld\\src\\normalize';
import {countries, documents} from 'C\:\\Users\\User\\helloworld\\src\\screens\\Configuration\\configConstants';

type Props = {};
export default class ResultsScreen extends Component<Props> {
  render() {
    const {getParam} = this.props.navigation; //the way of getting params when using react-navigation library
    const documentType = getParam('documentType');
    const documentCountry = getParam('documentCountry');

    return (
      <View style={[myStyles.container]}>
        <ScrollView>
          <CustomTop content={['Results', 'Screen', 'Soon']} />

          <Text style={[textStyles.smallText]}>{`You have taken picture of ${documentType}, which was issued in ${documentCountry}.`}</Text>

          <View style={[myStyles.viewContainer]}>
            <Text style={[textStyles.largeText]}>Here are your results:</Text>
            <Text style={[textStyles.smallText]}>Results Table will be displayed here.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}