import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const AuthInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
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
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#333',
    fontSize: 25,
    fontWeight: '600',
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    color: '#333',
    fontSize: 22,
    width: '100%',
  }
});

export {AuthInput};