import Image from 'next/image';

import Banking from '../images/banking.svg'

export default function Industries() {
    return (
        <section className="relative z-10 py-12 md:py-16 lg:py-24 bg-theme-light-gray">
            <div className="container small-container items-center">

                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="mb-4">InboxArmy Serves 25+ Industries and Verticals</h2>
                    <p className='text-base md:text-lg'>InboxArmy is proud to have served more than 5,000 businesses across 25+ industries and verticals.<br />We provide industry-specific email marketing solutions to a diverse range of businesses, from startups to Blue Chip companies.</p>
                </div>
                <div className="industry-card-wrapper flex flex-wrap xl:flex-nowrap items-start justify-center  gap-6 justify-items-center pb-10">

                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Banking</span>
                    </div>
                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Ecommerce</span>
                    </div>
                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Insurance</span>
                    </div>
                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Financial Services</span>
                    </div>
                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Healthcare</span>
                    </div>
                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Video Gaming</span>
                    </div>
                    <div className="cardwrap shadow-custom flex flex-col items-center bg-white rounded-full p-6 w-36 h-36 md:w-40 md:h-40 xl:w-36 2xl:w-[154px] xl:h-36 2xl:h-[154px] justify-center">
                        <div className='image-row m-auto w-12 md:w-auto h-12 md:h-auto'>
                            <Image src={Banking} height={61} width={55} alt='Icon' />
                        </div>
                        <span className="text-base block text-center mt-4">Digital Agency</span>
                    </div>
                </div>
                <div className="md:flex justify-center">
                    <a href='#' className="text-center block bg-theme-blue text-white  hover:bg-theme-dark font-semibold px-1 md:px-5 py-3 md:py-4 rounded-lg whitespace-nowrap border-none uppercase text-sm md:text-base">Explore more</a>
                </div>
            </div>
        </section>
    );
}