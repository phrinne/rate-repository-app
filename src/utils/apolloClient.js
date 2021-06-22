import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

//uri: 'http://192.168.1.2:5000/graphql',
const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;