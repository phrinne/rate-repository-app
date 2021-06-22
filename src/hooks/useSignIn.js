import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';

const useSignIn = () => {
  const [login, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    await login({ variables: { username, password } });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;