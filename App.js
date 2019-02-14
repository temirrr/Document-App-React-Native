/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Modal, Alert, ScrollView} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Divider, Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

/*refer to https://github.com/facebook/react-native/issues/4968 . When I use "import smth from 'moduleName'",
there's an error, even though I properly use "@providesModule" in those modules
That's why I just found temporary workaround by specifying the full path to the module's js file*/
import CustomTop from 'C\:\\Users\\User\\helloworld\\src\\components\\CustomTop';
import colors from 'C\:\\Users\\User\\helloworld\\src\\config\\colors';
import textStyles from 'C\:\\Users\\User\\helloworld\\src\\config\\typography';
import myStyles from 'C\:\\Users\\User\\helloworld\\src\\components\\myStyles';
import normalize from 'C\:\\Users\\User\\helloworld\\src\\normalize';

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

type Props = {};
export default class App extends Component<Props> {
  constructor () {
    super()
    this.state = {
      modalVisible: false,
    }
  }

  //"setModalVisible(true)" will make the modal visible.
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={[myStyles.container]}>
        <ScrollView>
          <CustomTop content={['Document', 'Recognition', 'App']} />

          <View style={[myStyles.viewContainer]}>
            <Text style={[textStyles.smallText]}>
              <Text>
              Welcome to Document Recognition app.
              </Text> 
              <Text>
              This app uses OpenCV's OCR (Optical Character Recognition) to help obtain the data from your document in digital form.
              </Text>
            </Text>
          </View>

          <Divider style={{backgroundColor: colors.orange}} />

          <View style={[myStyles.viewContainer]}>
            <Text style={[textStyles.smallText]}>
              I will have to insert the "Instructions" title later, probably using "Card".
            </Text>

            <View style={[myStyles.unorderedList]}>
              <Text style={[textStyles.smallText]}>
                {'\u2022 Select the country where the document was issued.'}
              </Text>
              <Text style={[textStyles.smallText]}>
                {'\u2022 Select the document type.'}
              </Text>
              <Text style={[textStyles.smallText]}>
                {'\u2022 Capture the document using your smartphone\'s camera or choose from gallery.'}
              </Text>
              <Text style={[textStyles.smallText]}>
                {'\u2022 Get the result.'}
              </Text>
            </View>
          </View>

          <View style={[myStyles.viewContainer]}>
            <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={normalize(15)}
                  color="white"
                />
              }
              iconRight
              title="Proceed"
              onPress = {() => {
                this.setModalVisible(!this.state.modalVisible)
              }}
            />
          </View>

          <Overlay
            animationType="slide"
            transparent={false}
            isVisible={this.state.modalVisible}
          >
            <View style={[myStyles.container]}>
              <View style={[myStyles.viewContainer]}>
                <Text style={[textStyles.smallText]}>
                Modal is Open. In this window, you will be able to set the configurations like country,
                document type, etc. And then the camera will be opened.
                </Text>
              </View>

              <View style={[myStyles.viewContainer, myStyles.buttonDown]}>
                <Button
                  title="Back"
                  onPress = {() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}
                />
              </View>
            </View>
          </Overlay>
        </ScrollView>
      </View>
    );
  }
}
