import React from 'react';
import { /*Button as NativeButton, StyleSheet,*/ Pressable, Text } from 'react-native';
import { componentStyles } from '../styles/theme';

const Button = ({ title, onPress, testID, negative }) => {
  //return <NativeButton style={styles.container} {...props} />;
  let style = componentStyles.buttonContainer;
  if(negative) style = [componentStyles.buttonContainer, componentStyles.negativeBackground];

  return (
    <Pressable style={style} onPress={onPress}>
        <Text style={componentStyles.buttonText} testID={testID}>{title}</Text>
    </Pressable>
  );
};

export default Button;