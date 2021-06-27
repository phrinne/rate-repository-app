import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

//uri: 'http://192.168.1.2:5000/graphql',
const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});

const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await authStorage.getAccessToken();
      const authHeader = {
        Authorization: token ? `bearer ${token}` : null,
      };
      return {
        headers: {
          ...headers,
          ...authHeader,
        },
      };
    } catch (e) {
      console.log(e);
      return { headers, };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

};

export default createApolloClient;


/*const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};*/