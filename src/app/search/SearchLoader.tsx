'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import InfiniteScrollSearch from '../components/InfiniteScrollSearch';
import SearchIcon from '../images/search-icon.svg';

interface Post {
    id: string;
    title: string;
    slug: string;
    featuredImage: {
        node: {
            sourceUrl: string;
        };
    };
    industries: {
        nodes: { name: string }[];
    };
    seasonals: {
        nodes: { name: string }[];
    };
    emailTypes: {
        nodes: { name: string }[];
    };
}

interface SearchLoaderProps {
    keyword: string;
}

export default function SearchLoader({ keyword }: SearchLoaderProps) {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="my-10 md:my-24">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-2xl font-bold mb-6">Searching for: "{keyword}"</h1>
                    <div className="mt-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-blue mx-auto mb-4"></div>
                        <p className="text-gray-600">Searching...</p>
                        <p className="text-sm text-gray-500 mt-2">This may take a few seconds...</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 