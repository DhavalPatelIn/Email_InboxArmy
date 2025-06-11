import { gql } from '@apollo/client';
import { client } from './apollo-client';

export const SEARCH_POSTS = gql`  
  query SearchQuery($search: String!) {
    posts(where: { search: $search }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        emailTypes {
          nodes {
            name
            slug
          }
        }
        industries {
          nodes {
            name
            slug
          }
        }
        seasonals {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
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

export const GET_BRAND_QUERY = gql`
  query GetBrand {
    themeoptions {
      globaldata {
        adBoxes {
          title
          icon {
            node {
              sourceUrl
            }
          }
          cta {
            url
            title
            target
          }
        }
      }
    }
  }
`;

export async function getBrandData() {
  const { data } = await client.query({ query: GET_BRAND_QUERY });
  return {
    adBoxes: data?.themeoptions?.globaldata?.adBoxes ?? [],
  };
}

export const GET_BRANDS_QUERY = gql`
  query BrandsData {
    brands(first: 10000)  {
      nodes {
        featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          slug
          title
          brandCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
  }
`;

export async function getBrandsData() {
  const { data } = await client.query({ query: GET_BRANDS_QUERY });
  return {
    brands: data?.brands?.nodes ?? [],
  };
}


export const GET_BRAND_CATEGORIES_QUERY = gql`
query BrandsData {
  brandCategories {
    nodes {
      name
      slug
    }
  }
}
`;

export async function getBrandCategoriesData() {
  const { data } = await client.query({ query: GET_BRAND_CATEGORIES_QUERY });
  return {
    brandCategories: data?.brandCategories?.nodes ?? [],
  };
}