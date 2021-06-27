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

const RepositoryPage = ({ repos }) => {
  let { id } = useParams();
  let url = useUrl(id);
  let reviewsHook = useReviews(id, 6);

  if(repos.loading) {
    return (<Text>repos loading...</Text>);
  }
  if(url.loading) {
    return (<Text>url loading...</Text>);
  }
  if(reviewsHook.loading) {
    return (<Text>reviews loading...</Text>);
  }

  const repositoryNodes = repos.repositories?repos.repositories.edges.map(edge => edge.node):[];
  const repo = repositoryNodes.find(r => r.id === id);
  const reviewNodes = reviewsHook.data.repository.reviews?reviewsHook.data.repository.reviews.edges.map(edge => edge.node):[];
  
  const onEndReach = () => {
    console.log('You have reached the end of the reviews list');
    reviewsHook.fetchMore();
  };

  return (
    <>
    <RepositoryItem {...repo} />
    <View style={componentStyles.container}>
      <Button onPress={() => Linking.openURL(url.data.repository.url)} title="Open in GitHub" />
    </View>
    <ItemSeparator />
    <RepositoryReviews reviews={reviewNodes} onEndReach={onEndReach} />
    </>
  );
};

export default RepositoryPage;