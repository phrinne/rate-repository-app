import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.small,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.xsmall,
  },
  text: {
    color: theme.colors.textInverted,
  }
});

const Badge = ({ text }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          {text}
        </Text>
    </View>
  );
};

export default Badge;