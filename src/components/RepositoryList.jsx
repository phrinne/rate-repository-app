import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import Text from './Text';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import RepositorySorter from './RepositorySorter';
import { useHistory } from "react-router-native";


export const RepositoryListContainer = ({ repositories, sortValue, sortCb }) => {
  let history = useHistory();
  const repositoryNodes = repositories?repositories.edges.map(edge => edge.node):[];

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => history.push(`/repos/${item.id}`)}>
        <RepositoryItem {...item} />
      </Pressable>
      );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <RepositorySorter sortValue={sortValue} sortCb={sortCb} />}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    
  );
};

const RepositoryList = ({ repos, sortValue, sortCb }) => {
  if(repos.loading) {
    return (<Text>loading...</Text>);
  }
  return <RepositoryListContainer repositories={repos.data.repositories} sortValue={sortValue} sortCb={sortCb} />;
};

export default RepositoryList;


    /*return (
    <Pressable onPress={handlePress}>
      <RepositoryItem 
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
        ownerAvatarUrl={item.ownerAvatarUrl}
        showMore={false}
      />
    </Pressable>
    );*/



/*const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];*/