import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View>
      {/* <Text>Button</Text> */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Button</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
})