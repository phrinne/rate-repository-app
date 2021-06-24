import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.small,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.xsmall,
  },
});

const Badge = ({ text }) => {
  return (
    <View style={styles.container}>
        <Text color="inverted" testID="language">
          {text}
        </Text>
    </View>
  );
};

export default Badge;