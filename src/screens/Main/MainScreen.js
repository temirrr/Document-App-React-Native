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

type Props = {};
export default class MainScreen extends Component<Props> {
  constructor () {
    super()
    //some other properties
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

          <View style={[myStyles.viewContainer, myStyles.buttonDown]}>
            <View style={[myStyles.buttons]}>
              <Button
                title="Proceed"
                type="outline"
                onPress={() => {
                  this.props.navigation.navigate('ConfigurationScreen');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}