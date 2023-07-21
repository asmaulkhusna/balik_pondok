import {StyleSheet, Text, Image, View, Linking} from 'react-native';
import React from 'react';
import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const Profile = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 30}}>
      <Image
        style={{height: 100, width: 100}}
        source={require('../img/java.jpg')}
        borderRadius={30}
      />
      <Text
        style={{
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 20,
          color: 'black',
          fontSize: 20,
        }}>
        ASMAUL KHUSNA
      </Text>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        Saya Adalah Mahasiswa Jurusan Tegnologi Kelas A Intsitut Saint Tegnologi
        Annuqayah guluk-guluk sumenep madura
      </Text>
      
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          onPress={() => Linking.openURL('https://github.com/asmaulkhusna')}
          style={{
            margin: 20,
            padding: 10,
            width: 200,
            height: 50,
            backgroundColor: 'black',
            marginTop: 20,
            borderRadius: 20,
            fontSize: 20,
            color: 'white',
          }}>
             Tombol Github
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
