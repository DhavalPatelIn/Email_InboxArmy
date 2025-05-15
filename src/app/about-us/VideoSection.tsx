'use client'
import { useState } from 'react';
import Image from 'next/image';


import ScottCohenVideo from '../images/ScottCohenVideo.jpg';
import PlayIcon from '../images/video-play.png';

export default function VideoScottCohen() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <section className='relative z-10 my-12 md:my-16 lg:my-20'>
                <div className='container small-container'>
                    <div className="bg-gradient-to-b from-white rounded-3xl p-4 md:p-12 lg:flex flex-col md:flex-row items-start 2xl:items-center gap-16 mt-8">
                        <div className="flex-1 space-y-6 md:space-y-8 subtitle2 pb-8 lg:pb-0">
                            <h2>A Message from our CEO, Scott Cohen</h2>
                            <p>Scott is a proven email marketing veteran with 20 years of experience as a brand-side marketer and agency executive.</p>
                            <p>He is the winner of the ANA Email Experience Council&rsquo;s 2021 Stefan Pollard Email Marketer of the Year Award</p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            {/* Replace the href with the actual Vimeo video URL */}
                            <button
                                onClick={() => setShowModal(true)}
                                className="group relative block w-full bg-white border border-solid border-theme-border rounded-xl md:rounded-3xl p-2 md:p-6"
                                aria-label="Play Video"
                            >
                                <Image
                                    src={ScottCohenVideo}
                                    alt="Scott Cohen CEO"
                                    width={580}
                                    height={350}
                                    className="w-full rounded-lg md:rounded-2xl shadow-lg cursor-pointer hover:opacity-80 transition"
                                />
                                {/* Optional Play Button Overlay */}
                                <span className="absolute inset-0 flex items-center justify-center transition ease-in-out scale-100 origin-center group-hover:scale-110 w-12 md:w-16 mx-auto xl:w-auto">
                                    <Image src={PlayIcon} alt='Play' width={90} height={90} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <span className='absolute top-0 left-0 w-full h-full' onClick={() => setShowModal(false)}></span>
                    <div className="relative w-full max-w-4xl mx-auto px-4">
                        <button
                            onClick={() => setShowModal(false)}
                            className="closebtn text-4xl absolute -top-12 h-10 w-8 right-4 z-10 text-white bg-none bg-opacity-50 rounded-full hover:text-theme-blue p-0 text-right">
                            &times;
                        </button>
                        <iframe
                            src="https://player.vimeo.com/video/1000813970?autoplay=1 "
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Scott Cohen Introduction"
                            className="w-full h-full aspect-video object-cover rounded-lg border-none"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}