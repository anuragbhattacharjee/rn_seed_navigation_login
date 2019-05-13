import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.titleContainer}>
            <Logo />
            <Text style={styles.titleText}>React Native App</Text>
        </View>
        <View style={styles.bodyContainer}>
            <Form type="Sign Up"/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444547',
    flex: 1,
  },
  titleContainer:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1
  },
  bodyContainer:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:{
    fontSize: 40,
    color: '#fff'
  },
  whiteText: {
    color: '#fff',
    fontSize: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da'
  }
});
