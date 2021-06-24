import React from 'react';
import RepositoryItem from './RepositoryItem';
import Button from './Button';
import Text from './Text';
import { useParams } from "react-router-native";
import { View, StyleSheet } from 'react-native';
import useUrl from '../hooks/useUrl';
import * as Linking from 'expo-linking';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundActive
  },
});

const RepositoryPage = ({ reposdata, reposloading }) => {
  let { id } = useParams();
  let { data, loading } = useUrl(id);

  if(reposloading) {
    return (<Text>repos loading...</Text>);
  }
  if(loading) {
    return (<Text>url loading...</Text>);
  }

  const repositoryNodes = reposdata.repositories?reposdata.repositories.edges.map(edge => edge.node):[];
  const repo = repositoryNodes.find(r => r.id === id);
  
  return (
    <>
    <RepositoryItem {...repo} />
    <View style={styles.container}>
      <Button onPress={() => Linking.openURL(data.repository.url)} title="Open in GitHub" />
    </View>
    </>
  );
};

export default RepositoryPage;