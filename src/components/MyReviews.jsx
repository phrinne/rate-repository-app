import React from 'react';
import Text from './Text';
import useMe from '../hooks/useMe';
import RepositoryReviews from './RepositoryReviews';

const MyReviews = () => {
  const { data, loading, refetch } = useMe(true);

  if(loading) return <Text>loading...</Text>;

  const reviews = data.authorizedUser.reviews.edges.map(edge => edge.node);
  console.log(reviews);

  return (
    <>
    <RepositoryReviews reviews={reviews} showActions refetch={refetch} />
    </>
  );
};

export default MyReviews;