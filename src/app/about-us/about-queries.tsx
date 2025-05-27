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


export const GALLERY_QUERY = gql`
    query AboutGallery {
    pages {
        nodes {
        aboutUs {
            galleryHeading
            galleryImages {
            image {
                node {
                sourceUrl
                altText
                }
            }
            }
        }
        }
    }
    }
`;



export const AWARD_QUERY = gql`
query Award {
    pages {
      nodes {
        aboutUs {
          awardImage {
            image {
              node {
                sourceUrl
                altText
              }
            }
          }
          awardHeading
        }
      }
    }
  }
`;


export const COUNTER_QUERY = gql`
query Counter {
    pages {
      nodes {
        aboutUs {
          counterNumber {
            content
            number
            numberSuffixAfter
            numberSuffixBefore
          }
        }
      }
    }
  }
`;
// server/email-services-fetcher.tsx

const EMAILSERVICES_QUERY = gql`
  query EmailServices {
    pages {
      nodes {
        aboutUs {
          emailHeading
          emailContent
          logoImages {
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const fetchEmailServicesData = async () => {
  try {
    const { data } = await client.query({
      query: EMAILSERVICES_QUERY,
      fetchPolicy: 'network-only',
    });

    // Extract the first page's aboutUs data
    const aboutUs = data?.pages?.nodes[0]?.aboutUs || {};

    return {
      emailHeading: aboutUs.emailHeading || '',
      emailContent: aboutUs.emailContent || '',
      logoImages: aboutUs.logoImages || [],
    };
  } catch (error) {
    console.error('Error fetching email services data:', error);
    return {
      emailHeading: '',
      emailContent: '',
      logoImages: [],
    };
  }
};

export const BRANDS_QUERY = gql`
    query BrandsData {
        pages {
            nodes {
            aboutUs {
                brandsHeading
                brandsContent
                brandsImages {
                image {
                    node {
                    sourceUrl
                    altText
                    }
                }
                }
            }
            }
        }
    }
`;



export const INDUSTRIES_QUERY = gql`
  query industries {
    pages {
      nodes {
        aboutUs {
          industriesTitle
          industriesContent
          industriesData {
            image {
              node {
                altText
                sourceUrl
              }
            }
            title
          }
          industriesLink {
            title
            url
            target
          }
        }
      }
    }
  }
`;





