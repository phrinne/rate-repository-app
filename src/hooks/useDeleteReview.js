import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [hookDelete, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const { data } = await hookDelete({ variables: { id } });
    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;