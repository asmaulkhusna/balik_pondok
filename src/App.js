import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import About from './screens/About'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Home onPress={() => About}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})