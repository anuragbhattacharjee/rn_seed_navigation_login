import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));


