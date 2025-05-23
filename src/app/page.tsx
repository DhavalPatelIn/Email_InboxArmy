import { client } from './lib/apollo-client';
import { gql } from '@apollo/client'
import InfiniteScrollTemplates from './components/InfiniteScrollTemplates';

import HeroSection from "./components/HeroBanner";

const EMAIL_TEMPLATES_QUERY = gql`
  query EmailTemplate($after: String) {
    templates(first: 6, after: $after) {
      nodes {
        title
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
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;


export default async function Home() {
  const { data } = await client.query({
    query: EMAIL_TEMPLATES_QUERY,
  });


  return (
    <>
      <HeroSection />

      <div className="pt-4 pb-6 px-4 xl:px-12 md:pt-6">
        <InfiniteScrollTemplates
          initialTemplates={data.templates.nodes}
          hasNextPage={data.templates.pageInfo.hasNextPage}
          endCursor={data.templates.pageInfo.endCursor}
        />

      </div>
    </>
  );
}
