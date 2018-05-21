import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import LoginComponent  from './src/app/component/login/login';

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
          <LoginComponent/>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container:{
    backgroundColor:'skyblue',
    flex:1,
  },
})
