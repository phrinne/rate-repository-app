import { gql } from '@apollo/client';

/*
Make sure you have the pageInfo and the cursor fields in your repositories query 
as described in the pagination examples. 
You will also need to include the after and first arguments for the query.
*/
export const GET_REPOSITORIES = gql`
  query AllRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      totalCount
      edges {
        node {
          id,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage,
          ownerAvatarUrl,
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

/*export const ME = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;*/
export const ME = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
`;

export const GET_URL = gql`
  query GetUrl($id: ID!) {
    repository(id: $id) {
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  query GetReviews($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
            repository {
              id
              fullName
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }  
    }
  }
`;