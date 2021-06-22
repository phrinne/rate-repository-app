import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [login, result] = useMutation(LOGIN);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await login({ variables: { username, password } });
    const token = data.authorize.accessToken;
    await authStorage.setAccessToken(token);
    apolloClient.resetStore();
    //return result;
  };

  return [signIn, result];
};

export default useSignIn;