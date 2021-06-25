import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [create, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await create({ variables: { repositoryName, ownerName, rating, text } });
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;