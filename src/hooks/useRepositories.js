import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (filter = "latest") => {
  console.log("REPOS HOOK FILTER", filter);
  let params = {
    orderBy: "CREATED_AT",
    orderDirection: "DESC"
  };
  if(filter === 'highest') {
    params = {
      orderBy: "RATING_AVERAGE",
      orderDirection: "DESC"
    };
  }
  if(filter === 'lowest') {
    params = {
      orderBy: "RATING_AVERAGE",
      orderDirection: "ASC"
    };
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, { variables: params, fetchPolicy: 'cache-and-network' });
  return { data, error, loading };
};

export default useRepositories;