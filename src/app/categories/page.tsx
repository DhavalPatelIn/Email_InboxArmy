import { client } from '../lib/apollo-client';
import { gql } from '@apollo/client'
import MarketingAgency from "app/components/MarketingAgency";
import InfiniteScrollTemplates from '../components/InfiniteScrollTemplates';
import { getCategoriesData } from '../lib/categories';

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

export default async function Categories() {
  const { data } = await client.query({
    query: EMAIL_TEMPLATES_QUERY,
  });

  const categoriesData = await getCategoriesData();

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
          initialTemplates={data.templates.nodes}
          hasNextPage={data.templates.pageInfo.hasNextPage}
          endCursor={data.templates.pageInfo.endCursor}
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
  )
}
