import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const ProfileInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2,
  },
  label: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 5,
    paddingLeft: 5,
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    paddingBottom: 10,
    color: '#333',
    fontSize: 20,
    width: '100%',
  }
});

export {ProfileInput};