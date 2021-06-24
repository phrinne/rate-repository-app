import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
      }
    }
  }
`;

export const ME = gql`
  query {
    authorizedUser {
      id
      username
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
  query GetReviews($id: ID!) {
    repository(id: $id) {
      reviews {
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
          }
        }
      }  
    }
  }
`;