import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
  },
  text: {
    color: theme.colors.textInverted,
    fontSize: theme.fontSizes.tabItem,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ name, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        {name}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;