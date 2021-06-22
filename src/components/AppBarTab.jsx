import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import { Link } from 'react-router-native';

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

const AppBarTab = ({ name, linkTo, onPress }) => {
  if(!linkTo) {
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>
          {name}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Link to={linkTo}>
        <Text style={styles.text}>
          {name}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;