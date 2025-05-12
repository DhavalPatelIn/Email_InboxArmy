import { client } from '../lib/apollo-client'
import { gql } from '@apollo/client'


export const fetchEmailTypes = async () => {
  const query = gql`
    query {
      emailTypes(first: 30) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const { data } = await client.query({ query });
  return data?.emailTypes?.nodes ?? [];
};