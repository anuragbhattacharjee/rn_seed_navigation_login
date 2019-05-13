import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import AppNavigator from "./app/navigation/AppNavigator";
// import LoginScreen from './app/screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <AppNavigator /> 

        {/* <StatusBar hidden={true} /> */}
        {/* <LoginScreen /> */}
        {/* <SignUp /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  white: {
    color: "#fff",
    fontSize: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#d6d7da"
  }
});
