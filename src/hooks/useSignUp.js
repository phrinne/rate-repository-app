import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
//import useSignIn from '../hooks/useSignIn';

const useSignUp = () => {
  const [createUser, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    console.log(username, password);
    const { data } = await createUser({ variables: { username, password } });
    return data;
  };

  return [signUp, result];
};

export default useSignUp;