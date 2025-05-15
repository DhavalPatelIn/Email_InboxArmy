import Image from 'next/image';

import Award from '../images/award-image.png'

export default function Awarded() {
    return (
        <section className='relative z-10 my-12 md:my-16 lg:my-20'>
            <div className='container small-container text-center'>
                <h2 className='mb-11'>Awarded As</h2>
                <div className="award-images flex flex-wrap justify-center items-center gap-8">
                    <div className='award-row'><Image src={Award} alt="Most Reviewed Email Marketing Agencies" width={200} height={200} /></div>
                    <div className='award-row'><Image src={Award} alt="Digital Agency Network Verified" width={200} height={200} /></div>
                    <div className='award-row'><Image src={Award} alt="Clutch Top Email Marketing Company" width={200} height={200} /></div>
                    <div className='award-row'><Image src={Award} alt="Clutch Top Ecommerce Marketing Agency" width={200} height={200} /></div>
                    <div className='award-row'><Image src={Award} alt="Top Firm Email Marketing" width={200} height={200} /></div>
                    <div className='award-row'><Image src={Award} alt="Top Email Marketing Agencies DesignRush" width={200} height={200} /></div>
                </div>
                <div className="mt-11 md:flex justify-center">
                    <a href="https://inboxarmy.com" target="_blank" rel="noopener noreferrer" className="block bg-theme-blue text-white  hover:bg-theme-dark font-semibold px-1 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap border-none text-sm md:text-base">
                        Visit inboxarmy.com
                    </a>
                </div>
            </div>
        </section>
    );
}