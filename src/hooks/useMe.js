import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (includeReviews) => {
  const params = {
    includeReviews
  };
  if(!includeReviews) params.includeReviews = false;
  const { data, error, loading } = useQuery(ME, { variables: params, fetchPolicy: 'cache-and-network' });
  return { data, error, loading };
};

export default useMe;