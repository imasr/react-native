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
} from 'react-native';


export default class LoginComponent extends Component {
  press(){
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.v1}>Login</Text>
          <View style={styles.btnContainer}>
            <Button onPress={() => {this.press()}}
            title='TouchableNativeFeedback'/>
          </View>
          <View style={styles.btnContainer}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
AppRegistry.registerComponent('nativeApp', () => LoginComponent);
