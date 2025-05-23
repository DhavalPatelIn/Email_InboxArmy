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
import HeroTitle from './HeroTitle';



export default function AboutUs() {

    return (
        <>
            <span className='block absolute top-0 left-0 w-full h-[112%] md:h-[2462px] bg-gradient-to-b from-[#E9EFE9]'></span>

            <HeroTitle />

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