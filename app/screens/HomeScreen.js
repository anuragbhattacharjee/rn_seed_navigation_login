import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, Button } from 'react-native';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      details: {}
    };
  }
  componentDidMount(){

  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Home Screen</Text>
            <Text style={styles.titleText}>{this.state.details.name} {this.state.details.quality}</Text>

            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Search')}
            />
        </View>
      </KeyboardAvoidingView>
    );
  }
}  


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
      flex: 1,
    },
    titleContainer:{
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1
    },
    titleText:{
      fontSize: 40,
      color: 'red'
    }
  });
  