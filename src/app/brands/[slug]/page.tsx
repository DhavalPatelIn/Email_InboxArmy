import MarketingAgency from 'app/components/MarketingAgency';
import { gql } from '@apollo/client';
import { client } from 'app/lib/apollo-client';
import InfiniteScrollTemplates from 'app/components/InfiniteScrollTemplates';
import { getBrandData } from 'app/lib/queries';
import { Params } from 'next/dist/server/request/params';

// Get brand info and all posts, then filter
const GET_BRAND_AND_POSTS_QUERY = gql`
  query GetBrandAndPosts($slug: ID!) {
    brand(id: $slug, idType: SLUG) {
      id
      title
      slug
    }
    posts(first: 100) {
      nodes {
        title
        slug
        uri
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
        brandposts {
          brand {
            nodes {
              slug
              ... on Brand {
                title
              }
            }
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

export default async function BrandDetail({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;

  try {
    // Execute the GraphQL query to get brand and posts
    const { data } = await client.query({
      query: GET_BRAND_AND_POSTS_QUERY,
      variables: {
        slug: resolvedParams.slug,
      },
    });

    const brandInfo = data.brand;
    const allPosts = data.posts?.nodes || [];

    // Filter posts that belong to this brand using the brandposts field
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const brandPosts = allPosts.filter((post: any) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      post.brandposts?.brand?.nodes?.some((brand: any) => brand.slug === resolvedParams.slug)
    );

    // Get ad boxes data
    const brandData = await getBrandData();

    // If no brand data is found, show message
    if (!brandInfo) {
      return (
        <div className="container py-20">
          <div className="text-center text-3xl text-red-500 font-bold">
            Brand not found
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="container">
          <div className="text-center py-10 md:py-20 max-w-6xl w-full m-auto">
            <h1 className="leading-tight tracking-tight pb-6 pt-4 md:py-5 block">
              {brandInfo.title} Email Templates
            </h1>
            <p className="p2 w-full m-auto pt-2 text-theme-text-2">
              Discover email templates from {brandInfo.title}
            </p>
          </div>
        </div>

        <div className="pt-4 pb-6 px-4 xl:px-12 md:pt-6">
          <InfiniteScrollTemplates
            initialTemplates={brandPosts}
            hasNextPage={false} // Since we're filtering client-side, no pagination for now
            endCursor={''}
            adBoxes={brandData?.adBoxes || []}
          />
        </div>

        <MarketingAgency marketingAgency={{
          title: '',
          subText: '',
          textArea: '',
          servicesInformation: [],
          logo: {
            node: {
              sourceUrl: ''
            }
          },
          ratingArea: [],
          link: {
            url: '',
            title: '',
            target: ''
          }
        }} />
      </>
    );
  } catch (error) {
    console.error('Error fetching brand data:', error);
    return (
      <div className="container py-20">
        <div className="text-center text-3xl text-red-500 font-bold">
          Error loading brand data
        </div>
      </div>
    );
  }
}