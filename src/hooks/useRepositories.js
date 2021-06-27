import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sort = "latest", search = "", first) => {
  let params = {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchKeyword: search
  };
  if(sort === 'highest' || sort === 'lowest') params.orderBy = "RATING_AVERAGE";
  if(sort === 'lowest') params.orderDirection = "ASC";
  if(first) params.first = first;
  console.log(params);

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, { variables: params, fetchPolicy: 'cache-and-network' });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...params,
      },
    });
  };
  
  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
  //return { data, error, loading };
};

export default useRepositories;