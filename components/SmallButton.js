import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SmallButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{ children }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 0,
    width: '50%',
    backgroundColor: '#7d3f98',
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
});

export {SmallButton};