import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Modal, Alert, ScrollView} from 'react-native';
import { Divider, Button, Overlay } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
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
export default class ConfigurationScreen extends Component<Props> {
  constructor () {
    super();
    this.state = {
      documentCountry: null,
      documentType: null,
      docTypeObj: [],
      docTypeDisabled: true, //makes the second picker disabled until you choose the country
      docMatch: {
        'Kazakhstan': documents['Kazakhstan'],
        'South Korea': documents['South Korea'],
      },
      /*we don't need to define "documentCountry, documentType, docTypeObj"  variables here, 
      but this is just to know that they will be added to "this.state" later*/
      buttonDisabled: true, //makes the button disabled unless you fill everything out.
    };
    this.inputRefs = {
        documentCountry: null,
        documentType: null,
    };
  }

  render() {
    const placeholder1 = {
      label: 'Select document\'s country...',
      value: null,
      color: colors.gray,
    };

    const placeholder2 = {
      label: 'Select document\'s type...',
      value: null,
      color: colors.gray,
    };

    //this variable will be used for setting "useNativeAndroidPickerStyle" to false for iOS and vice-versa
    const androidPicker = Platform.select({
      ios: false,
      android: true,
    });

    return (
      <View style={[myStyles.container]}>
        <ScrollView>
          <View style={[myStyles.viewContainer]}>
            <Text style={[textStyles.largeText]}>
              Configuration
            </Text>
          </View>

          <Text style={[textStyles.smallText]}>1. Where was the document issued?</Text>
          <RNPickerSelect 
            placeholder={placeholder1}
            items={countries}
            value={this.state.documentCountry}
            onValueChange={(value) => {
              if (value !== null) {
                this.setState({
                  documentCountry: value,
                  docTypeDisabled: false,
                  docTypeObj: this.state.docMatch[value],
                });
              } else {
                this.setState({
                  documentCountry: null,
                  documentType: null,
                  docTypeDisabled: true,
                  docTypeObj: [],
                  //and thanks to the library, the second picker will automatically reset itself
                });
              }
            }}
            useNativeAndroidPickerStyle = {androidPicker}
            ref={(el) => {
                this.inputRefs.documentCountry = el;
                /*ref prop is for referring to input field, usually when switching between them*/
            }}
            onUpArrow={() => {
                this.inputRefs.documentCountry.togglePicker();
                /*onUpArrow and onDownArrow are iOS-only props*/
            }}
            onDownArrow={() => {
                this.inputRefs.documentType.togglePicker();
            }}
          />

          <View paddingVertical={normalize(5)} />

          <Text style={[textStyles.smallText]}>2. Which type of document are you going to use?</Text>
          <RNPickerSelect 
            placeholder={placeholder2}
            items={this.state.docTypeObj}
            value={this.state.documentType}
            onValueChange={(value) => {
              if (value !== null) {
                this.setState({
                    documentType: value,
                    buttonDisabled: false,
                });
              } else {
                this.setState({
                    documentType: null,
                    buttonDisabled: true,
                });
              }
            }}
            useNativeAndroidPickerStyle = {androidPicker}
            ref={(el) => {
                this.inputRefs.documentType = el;
                /*ref prop is for referring to input field, usually when switching between them*/
            }}
            onUpArrow={() => {
                this.inputRefs.documentCountry.togglePicker();
                /*onUpArrow and onDownArrow are iOS-only props*/
            }}
            onDownArrow={() => {
                this.inputRefs.documentType.togglePicker();
            }}
            disabled={this.state.docTypeDisabled}
          />

          <View style={[myStyles.viewContainer, myStyles.buttonDown]}>
            <View style={[myStyles.buttons]}>
              <Button
                title="Go to ResultsScreen"
                type="outline"
                disabled = {this.state.buttonDisabled}
                onPress={() => {
                  this.props.navigation.navigate('ResultsScreen', {
                    documentCountry: this.state.documentCountry,
                    documentType: this.state.documentType,
                    /*E.g. {documentCountry: 'docsKZ', documentType: 'idKZ'}*/
                  });
                }}
              />
            </View>

            <View style={[myStyles.buttons]}>
              <Button
                title="Back"
                onPress = {() => {
                  this.props.navigation.goBack();
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}