'use client';

import { useEffect, useState } from 'react';
import EmailCard from "./EmailCard";
import { useInView } from 'react-intersection-observer';

// Default image path - you should replace this with your actual default image path
const DEFAULT_IMAGE = '/images/default-email.jpg';

interface Template {
    title: string;
    featuredImage?: {
        node?: {
            sourceUrl: string;
        };
    };
    emailTypes?: {
        nodes: Array<{
            name: string;
        }>;
    };
    industries?: {
        nodes: Array<{
            name: string;
        }>;
    };
    seasonals?: {
        nodes: Array<{
            name: string;
        }>;
    };
}

interface InfiniteScrollTemplatesProps {
    initialTemplates: Template[];
    hasNextPage: boolean;
    endCursor: string;
    emailTypes: Array<{ name: string; slug: string }>;
    industries: Array<{ name: string; slug: string }>;
    seasonals: Array<{ name: string; slug: string }>;
}

export default function InfiniteScrollTemplates({
    initialTemplates,
    hasNextPage: initialHasNextPage,
    endCursor: initialEndCursor,
    emailTypes,
    industries,
    seasonals
}: InfiniteScrollTemplatesProps) {
    const [templates, setTemplates] = useState<Template[]>(initialTemplates);
    const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
    const [endCursor, setEndCursor] = useState(initialEndCursor);
    const [isLoading, setIsLoading] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        const loadMoreTemplates = async () => {
            if (inView && hasNextPage && !isLoading) {
                setIsLoading(true);
                try {
                    const response = await fetch('/api/templates', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            after: endCursor,
                        }),
                    });

                    const data = await response.json();

                    if (data.templates) {
                        setTemplates(prev => [...prev, ...data.templates.nodes]);
                        setHasNextPage(data.templates.pageInfo.hasNextPage);
                        setEndCursor(data.templates.pageInfo.endCursor);
                    }
                } catch (error) {
                    console.error('Error loading more templates:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        loadMoreTemplates();
    }, [inView, hasNextPage, endCursor, isLoading]);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-4 gap-x-2 md:gap-5 2xl:gap-8 pb-4 md:pb-12">
            {templates.map((template, index) => (
                <EmailCard
                    key={`${template.title}-${index}`}
                    title={template.title}
                    image={template.featuredImage?.node?.sourceUrl || DEFAULT_IMAGE}
                    tags={emailTypes.map(tag => tag.name)}
                    industries={industries.map(industry => industry.name)}
                    seasonals={seasonals.map(seasonal => seasonal.name)}
                />
            ))}
            {hasNextPage && (
                <div ref={ref} className="col-span-full h-10 flex items-center justify-center">
                    {isLoading && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>}
                </div>
            )}
        </div>
    );
} 