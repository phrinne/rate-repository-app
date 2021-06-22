import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  },
});

const Main = () => {
  return (
    <>
    <View style={styles.container}>
      <AppBar />
      <Switch>
      <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
    </>
  );
};

export default Main;
/*import React from "react";
import Text from "./Text";

const Main = () => (
	<>
		<Text>Simple text</Text>
		<Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
		<Text fontWeight="bold" fontSize="subheading">
			Bold subheading
		</Text>
		<Text color="textSecondary">Text with secondary color</Text>
	</>
);

export default Main;*/
