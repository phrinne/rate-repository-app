import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab name={"Repositories"} linkTo={"/"} />
        <AppBarTab name={"Sign In"} linkTo={"/signin"} />
    </View>
  );
};

export default AppBar;