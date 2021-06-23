import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { render/*, fireEvent*/ } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { /*getByTestId,*/ getAllByTestId/*, debug*/ } = render(<RepositoryListContainer repositories={repositories} />);
      
      //renders repository's name correctly
      const itemsName = getAllByTestId("name");
      expect(itemsName[0]).toHaveTextContent("jaredpalmer/formik");
      expect(itemsName[1]).toHaveTextContent("async-library/react-async");
      //description
      const itemsDescription = getAllByTestId("description");
      expect(itemsDescription[0]).toHaveTextContent("Build forms in React, without the tears");
      expect(itemsDescription[1]).toHaveTextContent("Flexible promise-based React data loader");
      //language
      const itemsLanguage = getAllByTestId("language");
      expect(itemsLanguage[0]).toHaveTextContent("TypeScript");
      expect(itemsLanguage[1]).toHaveTextContent("JavaScript");
      //stargazers count
      const itemsStats = getAllByTestId("stat");
      expect(itemsStats[0]).toHaveTextContent("21.9k");
      //forks count
      expect(itemsStats[1]).toHaveTextContent("1.6k");
      //review count 
      expect(itemsStats[2]).toHaveTextContent("3");
      //rating average
      expect(itemsStats[3]).toHaveTextContent("88");

      expect(itemsStats[4]).toHaveTextContent("1.8k");
      expect(itemsStats[5]).toHaveTextContent("69");
      expect(itemsStats[6]).toHaveTextContent("3");
      expect(itemsStats[7]).toHaveTextContent("72");
    });
  });
});