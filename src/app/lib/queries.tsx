import { gql } from '@apollo/client';
import { client } from './apollo-client';

// export const SEARCH_POSTS = gql`
// query SearchPosts($search: String!) {
//   posts(where: { search: $search }) {
//     nodes {
//       id
//       title
//       slug
//       featuredImage {
//         node {
//           sourceUrl
//         }
//       }
//     }
//   }
// }
export const SEARCH_POSTS = gql`  
  query SearchQuery($search: String!) {
    templates(where: { search: $search }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        contentType {
          node {
            connectedTaxonomies {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;



// Fetch post/page metadata
export const GET_POST_METADATA = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      id
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      seo {
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
`;

const GET_MENUDATA_QUERY = gql`
  query menudata {
    emailTypes(first: 30) {
      nodes {
        name
        slug
      }
    }
    seasonals(first: 30) {
      nodes {
        name
        slug
      }
    }
    industries(first: 30) {
      nodes {
        name
        slug
      }
    }
  }
`;

export async function postdata() {
  const { data } = await client.query({ query: GET_MENUDATA_QUERY });
  return {
    emailTypes: data?.emailTypes?.nodes ?? [],
    seasonals: data?.seasonals?.nodes ?? [],
    industries: data?.industries?.nodes ?? [],
  };
}

