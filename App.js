import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}