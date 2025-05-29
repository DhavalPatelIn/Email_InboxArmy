import Testimonials from "app/components/Testimonials";
import Image from "next/image";
import { getTestimonialsData } from '../about-us/server/testimonials-data';
import './contact-style.css';
import { gql } from "@apollo/client";
import { client } from "../lib/apollo-client";

interface SocialMedia {
    image?: {
        node?: {
            sourceUrl: string;
        };
    };
    link?: {
        title: string;
        url: string;
        target: string;
    };
}

const GET_CONTACT_PAGE_DATA = gql`
query ContactPage {
    pages {
      nodes {
        contactUs {
          map
          address {
            addressText
            addressIcon {
              node {
                sourceUrl
              }
            }
          }
          email {
            emailIcon {
              node {
                sourceUrl
              }
            }
            emailLink {
              url
              title
              target
            }
          }
          followUsTitle
          socialMedia {
            image {
              node {
                sourceUrl
              }
            }
            link {
              title
              url
              target
            }
          }
        }
      }
    }
  }
`;


export default async function ContactUs() {
    const testimonials = await getTestimonialsData();
    const { data } = await client.query({
        query: GET_CONTACT_PAGE_DATA,
    });

    const contactData = data?.pages?.nodes[0]?.contactUs;

    return (
        <>
            <div className="mb-4 mt-8 lg:my-24">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-3/5 contact-form pb-12 lg:pb-0">
                            <div className="bg-gradient-to-b from-[#E9EFE9] rounded-3xl py-6 px-4 lg:p-12 pb-12 md:pb-0">
                                <h1 className="h2 text-center mb-6">
                                    We&apos;d <span role="img" aria-label="love">💖</span> love to hear from you
                                </h1>
                                <p className="text-base md:text-1xl text-center mb-8">
                                    Want to take your email marketing to the next level?
                                </p>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                                        <input
                                            type="text"
                                            placeholder="Your name*"
                                            required
                                            className="rounded-lg px-4 py-3  col-span-1" />
                                        <input
                                            type="email"
                                            placeholder="Email address*"
                                            required
                                            className="rounded-lg px-4 py-3  col-span-1" />
                                        <input
                                            type="tel"
                                            placeholder="Phone number*"
                                            required
                                            className="rounded-lg px-4 py-3  col-span-1" />
                                        <input
                                            type="text"
                                            placeholder="Website*"
                                            required
                                            className="rounded-lg px-4 py-3  col-span-1" />
                                    </div>
                                    <select
                                        required
                                        className="rounded-lg px-4 py-3 bg-theme-light-gray 
                    focus:outline-none focus:ring-2 focus:ring-theme-blue w-full mb-4"
                                    >
                                        <option value="">Services Interested*</option>
                                        <option>Email Marketing Strategy</option>
                                        <option>Template Design & Coding</option>
                                        <option>Campaign Management</option>
                                        <option>Automation & Workflows</option>
                                        <option>Other</option>
                                    </select>
                                    <textarea
                                        placeholder="Type your masseege..."
                                        rows={4}
                                        className="rounded-lg px-4 py-3 bg-theme-light-gray 
                    focus:outline-none focus:ring-2 focus:ring-theme-blue w-full mb-4 resize-none"
                                    />
                                    <div className="flex items-center mb-6">
                                        <input
                                            type="checkbox"
                                            id="newsletter"
                                            className="accent-theme-blue w-5 h-5 mr-2"
                                            defaultChecked
                                        />
                                        <label htmlFor="newsletter" className="text-theme-text-2 text-base select-none">
                                            Subscribe to our Newsletter
                                        </label>
                                    </div>
                                    <button type="submit" className="w-full bg-theme-blue text-white font-semibold py-3 rounded-lg text-lg  transition hover:bg-theme-d font-intersemi border-none"> Send A Request </button>
                                    <p className="text-sm italic text-theme-text-2 text-center mt-4">
                                        (InboxArmy doesn&apos;t work or provide email list buying or rental service.)
                                    </p>
                                </form>
                            </div>
                        </div>
                        {/* Contact Info & Social Links Section */}
                        {contactData && (
                            <div className="w-full lg:w-2/5 lg:pl-20">
                                {/* Map */}
                                {contactData.map && (
                                    <div className="rounded-2xl overflow-hidden mb-6 map-wrap" dangerouslySetInnerHTML={{ __html: contactData.map }}></div>
                                )}
                                <div className="space-y-6 lg:space-y-8 px-4 lg:px:0">
                                    {contactData.address && (
                                        <div className="flex items-start gap-3">
                                            <div>
                                                <span className="w-8 h-8 bg-theme-light-gray-2 rounded-lg flex items-center justify-center">
                                                    <Image
                                                        className="w-4"
                                                        src={contactData.address.addressIcon?.node?.sourceUrl}
                                                        alt="MapIcon"
                                                        width={17}
                                                        height={17}
                                                    />
                                                </span>
                                            </div>
                                            <span className="text-base md:text-lg">
                                                {contactData.address.addressText}
                                            </span>
                                        </div>
                                    )}

                                    {contactData.email && (
                                        <div className="flex items-start gap-3">
                                            <div>
                                                <span className="w-8 h-8 bg-theme-light-gray-2 rounded-lg flex items-center justify-center">
                                                    <Image
                                                        className="w-4"
                                                        src={contactData.email.emailIcon?.node?.sourceUrl}
                                                        alt="EmailIcon"
                                                        width={16}
                                                        height={16}
                                                    />
                                                </span>
                                            </div>
                                            <span>
                                                <a
                                                    className="text-base md:text-lg hover:underline"
                                                    href={contactData.email.emailLink?.url}
                                                    target={contactData.email.emailLink?.target || "_self"}
                                                >
                                                    {contactData.email.emailLink?.title}
                                                </a>
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {contactData.socialMedia && contactData.socialMedia.length > 0 && (
                                    <>
                                        <hr className="my-6 lg:my-8 border-theme-border" />
                                        <div>
                                            <h3 className="text-theme-dark font-intersemi font-semibold mb-6 text-lg w-full text-center lg:text-left uppercase">
                                                {contactData.followUsTitle}
                                            </h3>
                                            <div className="flex flex-wrap items-center lg:items-start justify-center lg:justify-start lg:grid grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-4 text-base w-full max-[275px]">
                                                {contactData.socialMedia.map((social: SocialMedia, index: number) => (
                                                    <a
                                                        key={index}
                                                        href={social.link?.url || "#"}
                                                        className="flex items-center gap-2 hover:underline"
                                                        target={social.link?.target || "_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="w-6">
                                                            <Image
                                                                className="w-6"
                                                                src={social.image?.node?.sourceUrl || ""}
                                                                alt={social.link?.title || "Social Media Icon"}
                                                                width={25}
                                                                height={25}
                                                            />
                                                        </span>
                                                        {social.link?.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Testimonials testimonials={testimonials.testimonials} testimonialHeading={testimonials.testimonialHeading} />
        </>
    );
}
