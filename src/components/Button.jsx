import React from 'react';
import { /*Button as NativeButton, StyleSheet,*/ Pressable, Text } from 'react-native';
import { componentStyles } from '../styles/theme';

const Button = ({ title, onPress, testID }) => {
  //return <NativeButton style={styles.container} {...props} />;
  return (
    <Pressable style={componentStyles.buttonContainer} onPress={onPress}>
        <Text style={componentStyles.buttonText} testID={testID}>{title}</Text>
    </Pressable>
  );
};

export default Button;