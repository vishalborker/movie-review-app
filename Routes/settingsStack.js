import React from './node_modules/react';
import { createStackNavigator } from './node_modules/react-navigation-stack';

import Header from '../shared/Header';
import Settings from '../screens/Settings';

const screens = {
  Settings: {
    screen: Settings,
    title: 'Settings',
    navigationOptions: ({navigation}) => {
      return { 
        headerTitle: () => <Header navigation={navigation} headerText='Settings' />
      }
    }
  }
}

const SettingsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#333',
      headerStyle: {
        backgroundColor: '#ddd',
        height: 60
      }
    }
});

export default SettingsStack;