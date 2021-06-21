import React from 'react';
import { View, Text } from 'react-native';

//RepositoryItem a single item on the list (hint: use the FlatList component's renderItem prop).
const RepositoryItem = ({ fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage }) => {
    return (
      <View>
        <Text>Full name: {fullName}</Text>
        <Text>Description: {description}</Text>
        <Text>Language: {language}</Text>
        <Text>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Reviews: {reviewCount}</Text>
        <Text>Rating: {ratingAverage}</Text>
      </View>
    );
  };
  
  export default RepositoryItem;