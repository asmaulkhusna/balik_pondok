import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

const Home = ({ onPress }) => {
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
    <View style={{ flex: 1 }}>
      <View style={styles.navItem}>
      <TouchableOpacity>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}> */}
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Keterangan"
          value={address}
          onChangeText={text => check-box(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Button</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'space-evenly',
    padding: 10,
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
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

export default Home;
