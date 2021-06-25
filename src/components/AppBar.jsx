import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../styles/theme';
import useMe from '../hooks/useMe';

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const { data, loading } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  let history = useHistory();

  if(loading) return <Text>loading...</Text>;
  
  //console.log('APP BAR DATA', data);
  const loggedIn = data.authorizedUser;

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={"Repositories"} linkTo={"/"} />
        {!loggedIn && <AppBarTab name={"Sign In"} linkTo={"/signin"} />}
        {!loggedIn && <AppBarTab name={"Sign Up"} linkTo={"/signup"} />}
        {loggedIn && <AppBarTab name={"Create a review"} linkTo={"/createreview"} />}
        {loggedIn && <AppBarTab name={"Sign Out"} onPress={handleLogout} />}
      </ScrollView>
    </View>
  );
};

export default AppBar;