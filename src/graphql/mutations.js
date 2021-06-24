import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation ($username: String!, $password: String!) {
		authorize(credentials: {username: $username, password: $password}) {
			accessToken
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation ($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
		createReview(review: {repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text}) {
			repository {
				id
			}
		}
	}
`;
