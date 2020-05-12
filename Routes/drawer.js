import { createDrawerNavigator } from './node_modules/react-navigation-drawer';
import { createAppContainer } from './node_modules/react-navigation';

import HomeStack from './homeStack';
import SettingsStack from './settingsStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Settings: {
    screen: SettingsStack
  }
}); 

export default createAppContainer(RootDrawerNavigator);