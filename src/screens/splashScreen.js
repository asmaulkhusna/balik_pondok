import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Utama'));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.kotak}>
        <Image source={require('../img/logo.png')} style={{width: 100, height: 100, padding: 10}}/>
        <Text style={{fontWeight: 'bold', justifyContent:'center', alignItems: 'center', marginHorizontal: 20, fontSize: 17, marginTop: 8}}>Pondok Pesantren Sumber Baru Al-Falah</Text>
        <Text style={{justifyContent:'center', alignItems: 'center', marginHorizontal: 20}}>Ds. Dempo Barat Kec. Pasean Kab. Pamekasan</Text>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  kotak: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
