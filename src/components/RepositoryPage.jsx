import React from 'react';
import RepositoryItem from './RepositoryItem';
import RepositoryReviews from './RepositoryReviews';
import ItemSeparator from './ItemSeparator';
import Button from './Button';
import Text from './Text';
import { useParams } from "react-router-native";
import { View } from 'react-native';
import useUrl from '../hooks/useUrl';
import useReviews from '../hooks/useReviews';
import * as Linking from 'expo-linking';
import { componentStyles } from '../styles/theme';

const RepositoryPage = ({ reposdata, reposloading }) => {
  let { id } = useParams();
  let url = useUrl(id);
  let reviews = useReviews(id);

  if(reposloading) {
    return (<Text>repos loading...</Text>);
  }
  if(url.loading) {
    return (<Text>url loading...</Text>);
  }
  if(reviews.loading) {
    return (<Text>reviews loading...</Text>);
  }

  const repositoryNodes = reposdata.repositories?reposdata.repositories.edges.map(edge => edge.node):[];
  const repo = repositoryNodes.find(r => r.id === id);
  const reviewNodes = reviews.data.repository.reviews?reviews.data.repository.reviews.edges.map(edge => edge.node):[];
  
  return (
    <>
    <RepositoryItem {...repo} />
    <View style={componentStyles.container}>
      <Button onPress={() => Linking.openURL(url.data.repository.url)} title="Open in GitHub" />
    </View>
    <ItemSeparator />
    <RepositoryReviews reviews={reviewNodes} />
    </>
  );
};

export default RepositoryPage;