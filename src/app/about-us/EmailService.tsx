'use client';


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/testimonial.css'


import Image from 'next/image';
import '../styles/testimonial.css';

// Placeholder images for ESP logos (replace with your actual logo imports)
import KlaviyoLogo from '../images/klaviyo.png';
import IterableLogo from '../images/cordial_logo.png';
import CordialLogo from '../images/mailchimp.png';
import BrazeLogo from '../images/cusotmer.io.png';
import MailchimpLogo from '../images/marketingcloud.png';
import HubspotLogo from '../images/hubspot.png';
import CustomerioLogo from '../images/braze.png';

const espLogos = [
    { src: KlaviyoLogo, alt: 'Klaviyo' },
    { src: IterableLogo, alt: 'Iterable' },
    { src: CordialLogo, alt: 'Cordial' },
    { src: BrazeLogo, alt: 'Braze' },
    { src: MailchimpLogo, alt: 'Mailchimp' },
    { src: HubspotLogo, alt: 'HubSpot' },
    { src: CustomerioLogo, alt: 'Customer.io' },
    { src: KlaviyoLogo, alt: 'Klaviyo' },
    { src: IterableLogo, alt: 'Iterable' },
    { src: CordialLogo, alt: 'Cordial' },
    { src: BrazeLogo, alt: 'Braze' },
    { src: MailchimpLogo, alt: 'Mailchimp' },
    { src: HubspotLogo, alt: 'HubSpot' },
    { src: CustomerioLogo, alt: 'Customer.io' },
    { src: KlaviyoLogo, alt: 'Klaviyo' },
    { src: IterableLogo, alt: 'Iterable' },
    { src: CordialLogo, alt: 'Cordial' },
    { src: BrazeLogo, alt: 'Braze' },
    { src: MailchimpLogo, alt: 'Mailchimp' },
    { src: HubspotLogo, alt: 'HubSpot' },
    { src: CustomerioLogo, alt: 'Customer.io' },
    { src: KlaviyoLogo, alt: 'Klaviyo' },
    { src: IterableLogo, alt: 'Iterable' },
    { src: CordialLogo, alt: 'Cordial' },
    { src: BrazeLogo, alt: 'Braze' },
    { src: MailchimpLogo, alt: 'Mailchimp' },
    { src: HubspotLogo, alt: 'HubSpot' },
    { src: CustomerioLogo, alt: 'Customer.io' },
    { src: KlaviyoLogo, alt: 'Klaviyo' },
    { src: IterableLogo, alt: 'Iterable' },
    { src: CordialLogo, alt: 'Cordial' },
    { src: BrazeLogo, alt: 'Braze' },
    { src: MailchimpLogo, alt: 'Mailchimp' },
    { src: HubspotLogo, alt: 'HubSpot' },
    { src: CustomerioLogo, alt: 'Customer.io' },
    { src: IterableLogo, alt: 'Iterable' },
];

export default function EmailService() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 4,
        arrows: true,

    };

    return (
        <section className="relative z-10 py-12 md:py-16 lg:py-20 bg-theme-light-gray">
            <div className="container small-container flex flex-wrap items-center">
                {/* Left: Text Content */}
                <div className="email-service-title w-full lg:w-5/12 text-center lg:text-left pb-8 md:pb-10 lg:pb-0 lg:pr-2">
                    <h2 className="mb-6 md:mb-8">We Have Experts for <br />Your Email Service <br />Provider</h2>
                    <p className="text-base md:text-lg lg:max-w-lg lg:pr-2">
                        We support clients across 40+ email service providers. Be it enterprise platforms like Iterable, Braze, or Salesforce Marketing Cloud or small-to-medium business-focused email platforms like Klaviyo, MailChimp, or ActiveCampaign, we&rsquo;ve got you covered.
                    </p>
                </div>
                {/* Right: Slider */}
                <div className="w-full lg:w-7/12">
                    <div className="testimonial-slider emailservice slider-wrapper w-full md:w-auto">
                        <Slider {...settings}>
                            {espLogos.map((logo, idx) => (
                                <div key={idx}>
                                    <div className="logowrap flex items-center justify-center p-3 md:p-2">
                                        <Image src={logo.src} alt={logo.alt} width={200} height={100} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}