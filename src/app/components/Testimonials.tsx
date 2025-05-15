'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/testimonial.css'

import Purple_Desktop from '../images/Purple_Desktop.webp'
import Purple_Tab from '../images/Purple_Tab.webp'
import Purple_Mobile from '../images/Purple_Mobile.webp'
import Image from "next/image";

export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <>
            {/* Testimonial Slider Section */}
            <section className="py-10 md:py-16 bg-transparent testimonial-slider">
                <h2 className="text-center mb-10">What Clients Say</h2>
                <div className="slider-wrapper mx-auto">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className="item">
                            <picture className="block m-auto">
                                <source className="block m-auto" srcSet={Purple_Desktop.src} media="(min-width: 1025px)" />
                                <source className="block m-auto" srcSet={Purple_Tab.src} media="(min-width: 768px)" />
                                <Image className="block m-auto" src={Purple_Mobile} alt="Description" width={320} height={1000} />
                            </picture>
                        </div>
                        {/* Slide 2 */}
                        <div className="item">
                            <picture className="block m-auto">
                                <source className="block m-auto" srcSet={Purple_Desktop.src} media="(min-width: 1025px)" />
                                <source className="block m-auto" srcSet={Purple_Tab.src} media="(min-width: 768px)" />
                                <Image className="block m-auto" src={Purple_Mobile} alt="Description" width={320} height={1000} />
                            </picture>
                        </div>
                        {/* Slide 3 */}
                        <div className="item">
                            <picture className="block m-auto">
                                <source className="block m-auto" srcSet={Purple_Desktop.src} media="(min-width: 1025px)" />
                                <source className="block m-auto" srcSet={Purple_Tab.src} media="(min-width: 768px)" />
                                <Image className="block m-auto" src={Purple_Mobile} alt="Description" width={320} height={1000} />
                            </picture>
                        </div>

                        {/* Add more slides here if needed */}
                    </Slider>
                </div>
            </section>
        </>
    );
}