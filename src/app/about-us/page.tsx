import Testimonials from 'app/components/Testimonials';
import './about.css';
import Awarded from './Awarded';
import Counter from './Counter';
import { fetchEmailServicesData } from './about-queries';
import Gallery from './Gallery';
import VideoScottCohen from './VideoSection';
import MarketingAgency from '../components/MarketingAgency';
import Brands from './brands';
import Industries from './Industries';
import HeroTitle from './HeroTitle';
import { getCounterData } from './server/counter-data';
import EmailService from './EmailService';

export default async function AboutUs() {
    const { counterData } = await getCounterData();
    const emailServices = await fetchEmailServicesData();

    return (
        <>
            <span className='block absolute top-0 left-0 w-full h-[112%] md:h-[2462px] bg-gradient-to-b from-[#E9EFE9]'></span>

            <HeroTitle />

            <VideoScottCohen />

            <Gallery />

            <Counter counterData={counterData} />

            <Awarded />

            <EmailService emailServices={emailServices} />

            <Brands />

            <Industries />

            <Testimonials />

            <MarketingAgency marketingAgency={{
                title: '',
                subText: '',
                textArea: '',
                servicesInformation: [],
                logo: {
                    node: {
                        sourceUrl: ''
                    }
                },
                ratingArea: [],
                link: {
                    url: '',
                    title: '',
                    target: ''
                }
            }} />
        </>
    )
}