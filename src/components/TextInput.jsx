import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
  },
  error: {
    borderColor: theme.colors.error,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.container, (error && styles.error)];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;