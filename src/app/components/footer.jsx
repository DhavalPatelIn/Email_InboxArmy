import Image from 'next/image';
import Link from 'next/link';
import { client } from '../lib/apollo-client'
import { gql } from '@apollo/client'

import Newsletter from './newsletter';

// Images
import Logo from '../images/inboxarmy-logo.svg'
import Youtube from '../images/youtube.svg';
import Linkedin from '../images/linkedin.svg';
import Dribbble from '../images/dribbble.svg';
import Be from '../images/be.svg';
import Twitter from '../images/twitter.svg';

export async function footerdata() {
    const query = gql`
    query FooterData {
    themeoptions {
        footer {
            copyright
            footerLink {
                link {
                    title
                    url
                }
            }
        }
    }
    }
  `;

    try {
        const { data } = await client.query({ query });
        return data?.themeoptions?.footer ?? {};
    } catch (error) {
        console.error('Error fetching footer data:', error);
        return {
            copyright: '© Copyright 2025 InboxArmy. All rights reserved.',
            footerLink: [
                { link: { title: 'Privacy Policy', url: '/privacy-policy' } },
                { link: { title: 'Terms & Conditions', url: '/terms-and-conditions' } }
            ],
        };
    }
}

export default async function Footer() {
    const footerData = await footerdata();

    return (
        <footer className="bg-white py-8 px-4 md:px-0 md:pt-16 relative z-10">
            <div className="container mx-auto md:px-4">
                <div className='flex flex-wrap flex-col md:flex-row justify-between items-center'>
                    <div className="flex flex-col md:flex-row gap-2 2xl:gap-4 items-center justify-between lg:justify-start w-full lg:w-auto border-b md:border-none border-theme-border pb-4 md:pb-0">
                        <Image src={Logo} alt="InboxArmy Logo" width={100} height={50} className="w-40" />
                        <nav className='md:ml-6 2xl:ml-12 pt-6 md:pt-0'>
                            <ul className='flex flex-wrap md:space-x-6 2xl:space-x-14 justify-center md:justify-start'>
                                <li className='px-3 py-2 md:p-0'><Link className='font-semibold md:font-medium hover:text-theme-blue' href="/categories">Categories</Link></li>
                                <li className='px-3 py-2 md:p-0'><Link className='font-semibold md:font-medium hover:text-theme-blue' href="/brands">Brands</Link></li>
                                <li className='px-3 py-2 md:p-0'><Link className='font-semibold md:font-medium hover:text-theme-blue' href="/about">About</Link></li>
                                <li className='px-3 py-2 md:p-0'><Link className='font-semibold md:font-medium hover:text-theme-blue' href="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='lg:pl-6 w-full lg:w-4/12 xl:w-auto pt-8 lg:pt-0'>
                        <Newsletter />
                    </div>
                </div>

                <div className="md:border-t border-theme-border md:mt-10 pt-8">
                    <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
                        <div className="order-2 lg:order-1 text-gray-700 text-sm flex flex-wrap items-center justify-center lg:justify-start w-full lg:w-auto">
                            <p className="md:pr-2 w-full md:w-auto text-sm md:mr-8">{footerData.copyright}</p>
                            <div className='space-x-8 md:space-x-6 pt-3 md:pt-0'>
                                {footerData.footerLink?.map((item, index) => (
                                    <Link
                                        key={index}
                                        className="text-sm hover:text-theme-blue"
                                        href={item.link.url}
                                    >
                                        {item.link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-auto order-1 lg:order-2 flex flex-wrap items-center justify-center lg:justify-start pb-6 lg:p-0 mb-6 md:mb-0 border-b md:border-none border-theme-border">
                            <span className='w-full md:w-auto pb-4 md:pb-0'>Follow Us on</span>
                            <ul className='flex flex-wrap items-center justify-center md:justify-start md:ml-4 space-x-2.5 w-full md:w-auto'>
                                <li>
                                    <a className='hover:opacity-50' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src={Youtube} width={24} height={24} alt='Youtube' />
                                    </a>
                                </li>
                                <li>
                                    <a className='hover:opacity-50' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src={Linkedin} width={24} height={24} alt='Linkedin' />
                                    </a>
                                </li>
                                <li>
                                    <a className='hover:opacity-50' href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                                        <Image src={Dribbble} width={24} height={24} alt='Dribbble' />
                                    </a>
                                </li>
                                <li>
                                    <a className='hover:opacity-50' href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src={Be} width={24} height={24} alt='Be' />
                                    </a>
                                </li>
                                <li>
                                    <a className='hover:opacity-50' href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src={Twitter} width={24} height={24} alt='Twitter' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}