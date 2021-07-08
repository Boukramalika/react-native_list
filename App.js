import { StatusBar } from 'expo-status-bar';
import React from 'react';
import List from './components/List'
import {  View } from 'react-native';

class App extends React.Component {
  render() {

    return (
      <View st >
        <List></List>
       
        <StatusBar style="auto" />
      </View>
    );
  }
}



export default App