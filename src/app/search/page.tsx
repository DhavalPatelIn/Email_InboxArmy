import { SEARCH_POSTS } from '../lib/queries';
import { client } from '../lib/apollo-client';
import Link from 'next/link';
import Image from 'next/image';

import EmailImage from '../images/email-1.jpg';

interface Post {
    id: string;
    title: string;
    slug: string;
    featuredImage: {
        node: {
            sourceUrl: string;
        }
    };
}

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ keyword?: string }>;
}) {
    const { keyword } = await searchParams;
    const trimmedKeyword = keyword?.trim() || '';

    if (!trimmedKeyword) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">No keyword provided.</h1>
            </div>
        );
    }

    const { data } = await client.query({
        query: SEARCH_POSTS,
        variables: { search: trimmedKeyword },
    });

    return (
        <div className="my-10 md:my-24">
            <div className='container'>
                <h1 className="text-center pb-8 md:mb-12">Search Results for: {trimmedKeyword}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-2 md:gap-5 2xl:gap-8 pb-4 md:pb-12">
                    {data?.posts?.nodes.map((post: Post) => (
                        <div key={post.id} className='w-full bg-white shadow-custom rounded-md md:rounded-xl border border-solid border-theme-border overflow-hidden'>
                            <Link href={`/posts/${post.slug}`} className="email-link">
                                <div className="email-image relative py-36 sm:py-32 md:py-40 2xl:py-60 w-full overflow-hidden">
                                    <Image className="absolute left-0 right-0 w-full" src={post.featuredImage?.node?.sourceUrl || EmailImage} width={280} height={480} alt="Image" />
                                </div>
                                <div className="p-2 md:p-4">
                                    <p className="text-theme-dark text-sm md:text-base  mb-2">{post.title}</p>
                                    <div className="flex flex-wrap">
                                        <span className="text-xxs md:text-sm block leading-4 bg-theme-light-gray text-theme-dark px-2 md:px-4 py-1 md:py-2 rounded-md font-normal">eCommerce</span>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}
                    {data?.posts?.nodes.length === 0 && <p>No results found.</p>}
                </div>
            </div>
        </div>
    );
}