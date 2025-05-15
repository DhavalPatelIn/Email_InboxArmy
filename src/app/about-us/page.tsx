

import Testimonials from 'app/components/Testimonials';
import './about.css';
import Awarded from './Awarded';
import Counter from './Counter';
import EmailService from './EmailService';
import Gallery from './Gallery';
import VideoScottCohen from './VideoSection';
import MarketingAgency from 'app/components/MarketingAgency';
import Brands from './brands';
import Industries from './Industries';



export default function AboutUs() {

    return (
        <>
            <span className='block absolute top-0 left-0 w-full h-[112%] md:h-[2462px] bg-gradient-to-b from-[#E9EFE9]'></span>
            <div className="my-10 md:my-24 relative z-10">
                <div className="container small-container text-center">
                    <h1 className="tracking-tight pb-6 md:pt-4 md:py-5 lg:px-20 block">A Full-Service Email Marketing and Lifecycle Marketing Agency</h1>
                    <p className="text-base md:text-1xl pt-2 text-theme-text-2">We help brands build, optimize, and scale their email, SMS, and mobile messaging programs</p>
                </div >
            </div>

            <VideoScottCohen />

            <Gallery />

            <Counter />

            <Awarded />

            <EmailService />

            <Brands />

            <Industries />

            <Testimonials />

            <MarketingAgency />

        </>
    )
}