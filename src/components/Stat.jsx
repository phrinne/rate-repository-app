import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  itemWithMargin: {
    marginBottom: theme.spacing.xsmall
  }
});

const Stat = ({ number, name }) => {
  let numberToShow = number;
  if(number > 1000) {
    numberToShow = Math.round(number/100)/10 + 'k';
  }

  return (
    <View style={styles.container}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.itemWithMargin} testID="stat">
          {numberToShow}
        </Text>
        <Text color="textSecondary">
          {name}
        </Text>
    </View>
  );
};

export default Stat;