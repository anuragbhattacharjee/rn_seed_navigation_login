import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View>
        <Image 
            source= {require('../assets/images/rn.png')}
            style= {{width: 300, height: 150}} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
