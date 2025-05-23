import { gql } from '@apollo/client';
import { client } from 'app/lib/apollo-client';

interface AboutUsNode {
    aboutUs?: {
        heroContent?: string;
        heroHeading?: string;
        videoContent?: string;
        videoHeading?: string;
        videoUrl?: string;
        videoImage?: {
            node: {
                sourceUrl: string;
            };
        };
    };
}

export const ABOUT_US_QUERY = gql`
    query AboutPage {
        pages {
            nodes {
                aboutUs {
                    heroContent
                    heroHeading
                    videoContent
                    videoHeading
                    videoUrl
                    videoImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

export async function aboutdata() {
    const { data } = await client.query({ query: ABOUT_US_QUERY });
    const aboutNode = data?.pages?.nodes?.find((node: AboutUsNode) => node?.aboutUs);

    return {
        aboutpages: aboutNode?.aboutUs ?? {},
    };
}
