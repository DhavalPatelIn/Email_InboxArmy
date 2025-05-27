import Testimonials from "app/components/Testimonials";
import Image from "next/image";

import { getTestimonialsData } from '../about-us/server/testimonials-data';

import './contact-style.css';

import MapMaker from '../images/map-icon.png'
import Email from '../images/email-icon.png'
import Youtube from '../images/youtube.svg'
import Dribbble from '../images/dribbble.svg'
import Linkedin from '../images/linkedin.svg'
import Be from '../images/be.svg'
import Twitter from '../images/twitter.svg'

export default async function ContactUs() {
    const testimonials = await getTestimonialsData();

    return (
        <>
            <div className="pb-4 pt-8 lg:py-24">
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
                        <div className="w-full lg:w-2/5 lg:pl-20">
                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden mb-6 map-wrap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.349691863997!2d-97.10254432433045!3d32.941775773595204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd4c90964e701%3A0xad08bb19ed40d08d!2s2150%20W%20Northwest%20Hwy%20SUITE%20114-1098%2C%20Grapevine%2C%20TX%2076501%2C%20USA!5e0!3m2!1sen!2sin!4v1747127638565!5m2!1sen!2sin" width="600" height="280" loading="lazy"></iframe>
                            </div>
                            <div className="space-y-6 lg:space-y-8 px-4 lg:px:0">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <span className="w-8 h-8 bg-theme-light-gray-2 rounded-lg flex items-center justify-center">
                                            <Image className="w-4" src={MapMaker} alt="MapIcon" width={17} height={17} />
                                        </span>
                                    </div>
                                    <span className="text-base md:text-lg">
                                        2150 W NorthWest HWY, Suite 114-1098, Grapevine, TX-76051
                                    </span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div>
                                        <span className="w-8 h-8 bg-theme-light-gray-2 rounded-lg flex items-center justify-center">
                                            <Image className="w-4" src={Email} alt="MapIcon" width={16} height={16} />
                                        </span>
                                    </div>
                                    <span>
                                        <a className="text-base md:text-lg hover:underline" href="mailto:design@inboxarmy.com">design@inboxarmy.com</a>
                                    </span>
                                </div>
                            </div>
                            <hr className="my-6 lg:my-8 border-theme-border" />
                            <div>
                                <h3 className="text-theme-dark font-intersemi font-semibold mb-6 text-lg w-full text-center lg:text-left">FOLLOW US</h3>
                                <div className="flex flex-wrap items-center lg:items-start justify-center lg:justify-start lg:grid grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-4 text-base w-full max-[275px]">
                                    <a href="https://youtube.com" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                        <span className="w-6">
                                            <Image className="w-6" src={Youtube} alt="MapIcon" width={25} height={25} />
                                        </span>
                                        Youtube</a>
                                    <a href="https://dribbble.com" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                        <span className="w-6">
                                            <Image className="w-6" src={Dribbble} alt="MapIcon" width={25} height={25} />
                                        </span>
                                        Dribbble</a>
                                    <a href="https://linkedin.com" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                        <span className="w-6">
                                            <Image className="w-6" src={Linkedin} alt="MapIcon" width={25} height={25} />
                                        </span>
                                        LinkedIn</a>
                                    <a href="https://behance.net" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                        <span className="w-6">
                                            <Image className="w-6" src={Be} alt="MapIcon" width={25} height={25} />
                                        </span>
                                        Behence</a>
                                    <a href="https://twitter.com" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                        <span className="w-6">
                                            <Image className="w-6" src={Twitter} alt="MapIcon" width={25} height={25} />
                                        </span>
                                        Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials testimonials={testimonials.testimonials} testimonialHeading={testimonials.testimonialHeading} />

        </>
    );
}
