import { client } from '../../lib/apollo-client';
import { gql } from '@apollo/client'
import InfiniteScrollTemplates from '../../components/InfiniteScrollTemplates';
import { getCategoriesData } from '../../lib/categories';
import MarketingAgency from "app/components/MarketingAgency";
import { Params } from 'next/dist/server/request/params';


// Industries By Slug
const GET_INDUSTRY_WITH_POSTS = gql`
  query IndustryWithPosts($slug: [String]) {
    industries(where: { slug: $slug }) {
      nodes {
        id
        name
        slug
        posts(first: 6) {
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
              }
            }
            industries {
              nodes {
                name
              }
            }
            seasonals {
              nodes {
                name
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`;

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const { data } = await client.query({
    query: GET_INDUSTRY_WITH_POSTS,
    variables: {
      slug: [resolvedParams.slug], // pass slug as array
    },
  });

  const industryNode = data.industries?.nodes?.[0];

  const categoriesData = await getCategoriesData();
  // If no data is found, show message
  if (!industryNode) {
    return (
      <div className="container">
        <div className="text-center py-10 md:py-20 max-w-6xl w-full m-auto">
          <h1 className="text-2xl font-semibold">Data not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <>

      <div className="container">
        <div className="text-center py-10 md:py-20 max-w-6xl w-full m-auto">
          <h1 className="leading-tight tracking-tight pb-6 pt-4 md:py-5 block">{categoriesData?.topHeading}</h1>
          <p className="p2 w-full m-auto pt-2 text-theme-text-2">{categoriesData?.topText}</p>
        </div>
      </div>

      <div className="pt-4 pb-6 px-4 xl:px-12 md:pt-6">
        <InfiniteScrollTemplates
          initialTemplates={industryNode?.posts?.nodes || []}
          hasNextPage={industryNode?.posts?.pageInfo.hasNextPage}
          endCursor={industryNode?.posts?.pageInfo.endCursor}
          adBoxes={[]}
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
}
