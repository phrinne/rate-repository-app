import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sort = "latest", search = "") => {
  let params = {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchKeyword: search
  };
  if(sort === 'highest' || sort === 'lowest') params.orderBy = "RATING_AVERAGE";
  if(sort === 'lowest') params.orderDirection = "ASC";
  
  console.log(params);
  /*{
    params = {
      orderBy: "RATING_AVERAGE",
      orderDirection: "DESC"
    };
  }
  if(sort === 'lowest') {
    params = {
      orderBy: "RATING_AVERAGE",
      orderDirection: "ASC"
    };
  }*/

  const { data, error, loading } = useQuery(GET_REPOSITORIES, { variables: params, fetchPolicy: 'cache-and-network' });
  return { data, error, loading };
};

export default useRepositories;