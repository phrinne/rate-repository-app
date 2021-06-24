import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

//import useAuthStorage from './useAuthStorage';
//import { useApolloClient } from '@apollo/client';

const useCreateReview = () => {
  const [create, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    //const rating = Number(ratingString);
    const { data } = await create({ variables: { repositoryName, ownerName, rating, text } });
    //console.log(data);
    //apolloClient.resetStore();
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;