import Image from 'next/image';

import Gallery1 from '../images/gallery-1.webp';

export default function Gallery() {
    return (
        <>
            <section className='relative z-10 my-12 md:my-16 lg:my-20'>
                <div className='container small-container text-center space-y-6 md:space-y-12'>
                    <h2>Meet Our Email Marketing Heroes</h2>

                    <div className='gallery-wrapper grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-10'>

                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>
                        <div className='image-box h-40 sm:h-60 md:h-40 lg:h-48 xl:h-64 2xl:h-80 border-[3px] border-solid border-theme-dark rounded-2xl overflow-hidden'>
                            <Image className='w-full h-full object-cover' src={Gallery1} alt='Image' width={304} height={320} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}