/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import Orientation, { orientation } from "react-native-orientation";
import Navigator from "./navigator/Navigator";

interface Props {}
export default class App extends Component<Props> {
  componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  render() {
    return <Navigator />;
  }
}