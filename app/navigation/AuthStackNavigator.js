import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default AuthStackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);