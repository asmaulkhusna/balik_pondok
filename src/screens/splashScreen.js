import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import {stackActions} from '@greact-nativigation/native'

class About extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }

  componentDidMount(){
    setTimeout(() =>{
      this.props.navigation.dispatch(stackActions.replace('About'));
    }, 3000);
  
  }

  render() {
  return (
    <View>
      <Text>About</Text>
      {/* <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Home')}>
        <text>move to About</text>
      </TouchableOpacity> */}
    </View>
  )
}
}


export default About

// const styles = StyleSheet.create({})