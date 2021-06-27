import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id, first) => {
  const params = {
    id,
    first
  };
  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, { 
    variables: params, 
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...params,
      },
    });
  };
  
  return {
    data,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
  //return { data, error, loading };
};

export default useReviews;