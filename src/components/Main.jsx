import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { useDebounce } from 'use-debounce';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryPage from './RepositoryPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';

import theme from '../styles/theme';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  },
});

const Main = () => {
  const [repoSort, setRepoSort] = useState("latest");
  const [repoSearch, setRepoSearch] = useState("");
  const [debouncedSearch] = useDebounce(repoSearch, 500);
  const repoHook = useRepositories(repoSort, debouncedSearch, 4);

  const handleSort = (value) => {
    setRepoSort(value);
  };
  const handleSearch = (value) => {
    setRepoSearch(value);
  };
  const onEndReach = () => {
    console.log('You have reached the end of the list');
    repoHook.fetchMore();
  };
  
  return (
    <>
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/createreview" exact>
          <CreateReview />
        </Route>
        <Route path="/repos/:id">
          <RepositoryPage repos={repoHook} />
        </Route>
        <Route path="/" exact>
          <RepositoryList repos={repoHook} sortValue={repoSort} sortCb={handleSort} searchValue={repoSearch} searchCb={handleSearch} onEndReach={onEndReach} />
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
