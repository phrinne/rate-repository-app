import { useQuery } from '@apollo/client';
import { GET_URL } from '../graphql/queries';

const useUrl = (id) => {
  const { data, error, loading } = useQuery(GET_URL, { 
    variables: { id }, 
    fetchPolicy: 'cache-and-network',
  });
  return { data, error, loading };
};

export default useUrl;