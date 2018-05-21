import React, { Component } from 'react';
import {
  Text,
  Button,
  FlatList,
  Alert,
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  TextInput
} from 'react-native';


export default class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
  }
  press(){
    Alert.alert('You tapped the button!');
  }
  handleEmail(email){
    this.setState({ email: email})
  };
  handlePass(password){
    this.setState({ password: password})
  };
  render() {
   
    return (
      <View style={styles.container}>
          <Text style={styles.v1}>Login</Text>
          <View style={styles.loginBody}>
            <View style={{padding: 10}}>
              <TextInput
                style={{height: 60}}
                autoCapitalize = "none"
                placeholder="Enter email!"
                onChangeText={(email) => this.handleEmail(email)}
              />
              <TextInput
                style={{height: 60}}
                autoCapitalize = "none"
                placeholder="Enter password"
                onChangeText={(password) => this.handlePass(password)}
              />
            </View>
            <View style={{padding: 10}}>
              <Button onPress={() => {this.press()}}
              title='Login'/>
            </View>
          </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  v1:{
    textAlign:'center',
    padding: 15,
    fontSize: 20,
    backgroundColor:'#2741ff',
    color: '#ffffff'
  },
  loginBody: {
    padding: 10,
    flex:1,
    justifyContent: 'center',
  },
})
AppRegistry.registerComponent('nativeApp', () => LoginComponent);
