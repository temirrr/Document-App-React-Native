/*WELCOME TO DONTWANNADELETE.JS - THE WORLD'S FIRST JS FILE, WHERE YOU CAN STORE
THE FILES YOU REALLY WANT TO DELETE BUT CAN'T DO IT SINCE YOU ALWAYS THINK YOU WILL
NEED THEM AT ONE POINT OF TIME*/       


       const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

       state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

      <View style = {[{flex:1}]}>
        <View style = {[{height:240, backgroundColor:'orange', justifyContent:'space-around', alignItems: 'center'}]}>
          <Text style = {[{fontSize: 40, color: 'black', fontFamily: 'Helvetica'}]}>Document</Text>
          <Text style = {[{fontSize: 40, color: 'black', fontFamily: 'Helvetica'}]}>Recognition</Text>
          <Text style = {[{fontSize: 40, color: 'black', fontFamily: 'Helvetica'}]}>App</Text>
        </View>
        <View style = {[{height:240, backgroundColor:'black'}]}>
          
        </View>
      </View>


      <View style={[{flex: 1}, s.container]}>

        <View style={[{flex: 1, color: 'black', backgroundColor: 'orange', height: 150, alignItems: 'stretch'}, s.container, s.justifyContentCenter]}>  
          <Text style={[s.text, s.h1]}>Document</Text>
          <Text style={[s.text, s.h1]}>Recognition</Text>
          <Text style={[s.text, s.h1]}>App</Text>
        </View>

        <View style={[{flex:1, height: 100}, s.container, s.justifyContentCenter, s.alignItemsCenter]}>
          <Text style={[myStyles.fa, {color: 'black'}]}>
            <Text>
            Welcome to Document Recognition app.
            </Text> 
            <Text>
            This app uses OpenCV's OCR (Optical Character Recognition) to help obtain the data from your document in digital form.
            </Text>
          </Text>
          {
            //<Text style={[s.text, s.py3, {fontSize: 5 * c.REM}]}>🚀🚀🚀</Text>
          }
        </View>
 
        <Divider style={{backgroundColor: 'orange'}} />

        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
          <Text>Hello World!</Text>
        </View>

        <View style={[{flex: 1}, s.container, s.justifyContentCenter]}>
          <Text style={[s.text, s.h1, s.textPrimary, s.myXs1, s.myMd3]}>Welcome to React Native!</Text>
          <Text style={{color: 'sienna',fontWeight: 'bold',fontSize: 30,}}>Takes 1-2 mins to launch</Text>
        </View>

        {/*<TouchableHighlight onPress={this.onPress} style={[s.btnTouchable, {flex:1}]}>
          <View style={[s.btn, s.btnPrimary]}>
            <Text style={[s.btnText, s.btnTextPrimary]}>Signup</Text>
          </View>
        </TouchableHighlight>*/}

        {/*<View style={[s.container]}>
          <View style={[s.progress]}>
            <View style={[s.progressBar, {width: '50%'}]} />
          </View>
        </View>*/}

        {/*<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.hide}
          onShow={this.onShown}
          onDismiss={this.onHidden}
        >
          <View style={[s.modal]}>
            <View style={[s.modalDialog]}>
              <View style={[s.modalContent]}>
                <Text style={[s.text]}>Hello</Text>
              </View>
            </View>
          </View>
        </Modal>*/}

                    /*onPress={() => {
                      //the buttons will have to be reorganized when I add the gallery/camera transition.
                      this.setModalVisible(!this.state.modalVisible);
                      this.props.navigation.navigate('ResultsScreen', {
                        documentCountry: someVariable1,
                        documentType: someVariable2,
                        /*actually, the parameters' object has to be JSON-serializable (recommended)
                        to be able to use deep-linking or smth else, but let's implement it later if needed*/
                      });
                    }}*/

         {/*"'isVisible' in react-native-elements, not 'visible'"*/}

          <View style={[myStyles.viewContainer]}> 
            <View style={[myStyles.buttons]}>
              <Button
                title="Proceed"
                type="outline"
                onPress = {() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              />
            </View>
          </View>

          {/*"Modal" is called "Overlay" in react-native-elements*/}
          <Overlay
            animationType="slide"
            transparent={false}
            isVisible={this.state.modalVisible}
          >
            <View style={[myStyles.container]}>
              <View style={[myStyles.viewContainer]}>
                <Text style={[textStyles.largeText]}>
                  Configuration
                </Text>
              </View>


            </View>
          </Overlay>

      </View>

      {/*ref prop is for referring to input field, usually when switching between them*/}