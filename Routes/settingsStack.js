import { createStackNavigator } from 'react-navigation-stack';

import Settings from '../screens/Settings';

const screens = {
  Settings: {
    screen: Settings,
    title: 'Settings'
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