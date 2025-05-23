import { NextResponse } from 'next/server';
import { client } from '../../lib/apollo-client';
import { gql } from '@apollo/client';

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

export async function POST(request: Request) {
  try {
    const { after } = await request.json();

    const { data } = await client.query({
      query: EMAIL_TEMPLATES_QUERY,
      variables: { after },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 });
  }
} 