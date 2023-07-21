import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Linking,
} from 'react-native';

const About = ({onPress}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    // Lakukan sesuatu dengan data yang diisi pada form
    console.log('Nama:', name);
    console.log('Alamat:', address);

    // Reset nilai input setelah submit
    setName('');
    setAddress('');
  };

  return (
    // <View style={{ flex: 1, backgroundColor: 'yellow' }}>
    //   <View style={styles.navItem}>
    //   <TouchableOpacity>
    //       <Text style={styles.navText}>Home</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Text style={styles.navText}>About</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Text style={styles.navText}>Profile</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Text style={styles.navText}>Contact</Text>
    //     </TouchableOpacity>
    //   </View>

    <View style={styles.container}>
      <View style={{justifyContent:'center', alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'black',
            padding: 15,
            margin: 15,
            fontSize: 16,
            borderRadius: 10,
          }}>
          Tentang Aplikasi
        </Text>
        <Text style={{justifyContent:'center', alignItems: 'center', marginHorizontal: 20, textAlign: 'center'}}>
          Aplikasi ini dibuat untuk menginput nama santri yang kembali
          ke pondok pesantren Al-Falah Ds. Dempo Barat Kec. Pasean Kab. Pamekasan.
        </Text>
        <Text style={{justifyContent:'center', alignItems: 'center', marginHorizontal: 20, textAlign: 'center', margin: 10}}>
          Dimana balik pondok pesantren ada 3: balik pondok yang pertama ketika hari raya idul fitri, yang kedua ketika hari raya idul adha dan yang ketiga ketika balik pondok maulidurrosul, 
          jadi Aplikasi ini dapat digunakan pada saat balik pondok pesantren Sumber Baru Al-Falah.
        </Text>
      </View>
      
    </View>

    // </View>
  );
};

const styles = StyleSheet.create({
  // navItem: {
  //   flexDirection: 'row',
  //   backgroundColor: 'black',
  //   opacity: 0.8,
  //   justifyContent: 'space-evenly',
  //   padding: 10,
  // },
  // navText: {
  //   color: 'white',
  //   fontSize: 16,
  // },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  submitButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 12,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default About;
