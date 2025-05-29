import { client } from './lib/apollo-client';
import { gql } from '@apollo/client'
import InfiniteScrollTemplates from './components/InfiniteScrollTemplates';
import HeroSection from "./components/HeroBanner";

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


export default async function Home() {
  try {
    const { data } = await client.query<EmailTemplateData>({
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
            emailTypes={data.emailTypes?.nodes || []}
            industries={data.industries?.nodes || []}
            seasonals={data.seasonals?.nodes || []}
          />

        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return <div>Error loading content.</div>;
  }
}