import MainScreen from '../screens/Main';
import ResultsScreen from '../screens/Results';
import { Platform } from "react-native";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {createAppContainer, createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createSwitchNavigator} from "react-navigation";

const MainStack = createStackNavigator({MainScreen, ResultsScreen});

const AppContainer = createAppContainer(MainStack);

export default AppContainer;

//CAN BE USEFUL LATER WHEN POLISHING THE APP
/*const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsScreen }),
  android: createDrawerNavigator({ HomeStack, SettingsScreen })
});

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator },
  { initialRouteName: "MainNavigator" }
);
//export default RootSwitch;

export default MainStack;*/