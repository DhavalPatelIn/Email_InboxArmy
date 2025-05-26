import Image from 'next/image';
import { client } from 'app/lib/apollo-client';
import { AWARD_QUERY } from './about-queries';

interface AwardImage {
    image: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
}

interface AwardData {
    pages: {
        nodes: Array<{
            aboutUs: {
                awardImage: AwardImage[];
                awardHeading: string;
            };
        }>;
    };
}

export default async function Awarded() {
    const { data } = await client.query<AwardData>({ query: AWARD_QUERY });
    const awardNode = data?.pages?.nodes?.find((node) => node?.aboutUs);
    const { awardImage, awardHeading } = awardNode?.aboutUs ?? { awardImage: [], awardHeading: '' };

    return (
        <section className='relative z-10 my-12 md:my-16 lg:my-20'>
            <div className='container small-container text-center'>
                <h2 className='mb-11'>{awardHeading}</h2>
                <div className="award-images flex flex-wrap justify-center items-center gap-8">
                    {awardImage.map((award, index) => (
                        <div key={index} className='award-row'>
                            <Image
                                src={award.image.node.sourceUrl}
                                alt={award.image.node.altText}
                                width={200}
                                height={200}
                            />
                        </div>
                    ))}
                </div>
                {/* <div className="mt-11 md:flex justify-center">
                    <a href="https://inboxarmy.com" target="_blank" rel="noopener noreferrer" className="block bg-theme-blue text-white  hover:bg-theme-dark font-semibold px-1 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap border-none text-sm md:text-base">
                        Visit inboxarmy.com
                    </a>
                </div> */}
            </div>
        </section>
    );
}