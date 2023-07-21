import {StyleSheet, Text, Image, View, Linking} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Profile = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 30}}>
      <Image
        style={{height: 100, width: 100}}
        source={require('../img/aku.jpeg')}
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
      <Text
        style={{
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 20,
          color: 'black',
          fontSize: 15,
        }}>
        Ikuti Kami:
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          onPress={() => Linking.openURL('https://github.com/asmaulkhusna')} 
          style={{
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'black',
            padding: 15,
            margin: 7,
            fontSize: 16,
            borderRadius: 10,
            // background: URL('../img/java.jpg')
          }}>
             Tombol Github
        </Text>
      </View>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
