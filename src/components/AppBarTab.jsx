import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../styles/theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
  },
});

const AppBarTab = ({ name, linkTo, onPress }) => {
  if(!linkTo) {
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Text fontWeight="bold" fontSize="tab" color="inverted">
          {name}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Link to={linkTo}>
        <Text fontWeight="bold" fontSize="tab" color="inverted">
          {name}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;