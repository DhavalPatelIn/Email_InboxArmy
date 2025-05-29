import { client } from '../lib/apollo-client';
import { gql } from '@apollo/client'
import MarketingAgency from "app/components/MarketingAgency";
import InfiniteScrollTemplates from '../components/InfiniteScrollTemplates';
import { getCategoriesData } from '../lib/categories';

interface EmailTemplateData {
  templates: {
    nodes: {
      title: string;
      slug: string;
      uri: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
    }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
  emailTypes?: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  industries?: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  seasonals?: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  types?: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
}

const EMAIL_TEMPLATES_QUERY = gql`
  query EmailTemplate($after: String) {
    templates(first: 6, after: $after) {
      nodes {
        title
        slug
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    emailTypes(first: 30) {
      nodes {
        id
        name
        slug
      }
    }
    industries(first: 30) {
      nodes {
        id
        name
        slug
      }
    }
    seasonals(first: 30) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export default async function Categories() {
  const { data } = await client.query<EmailTemplateData>({
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
          emailTypes={data.emailTypes?.nodes || []}
          industries={data.industries?.nodes || []}
          seasonals={data.seasonals?.nodes || []}
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
