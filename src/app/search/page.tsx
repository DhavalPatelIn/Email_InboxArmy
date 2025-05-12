import { SEARCH_POSTS } from '../lib/queries';
import { client } from '../lib/apollo-client';

// No need to define Props manually anymore

interface Post {
    id: string;
    title: string;
    slug: string;
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
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Search Results for: {trimmedKeyword}</h1>
            <ul className="space-y-2">
                {data?.posts?.nodes.map((post: Post) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </a>
                    </li>
                ))}
                {data?.posts?.nodes.length === 0 && <p>No results found.</p>}
            </ul>
        </div>
    );
}