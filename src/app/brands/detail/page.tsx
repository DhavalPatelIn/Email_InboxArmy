import Link from 'next/link';
import MarketingAgency from 'app/components/MarketingAgency';


import Willow from '../../images/willow.jpg'
import Image from 'next/image';

export default async function Brands() {
    return (
        <>
            <div className='pt-8 md:pt-12 pb-12 md:pb-16 text-center md:text-left'>
                <div className='container'>
                    <div className="flex flex-wrap items-center justify-between bg-theme-light-gold rounded-2xl p-6 lg:py-11 lg:px-11">
                        <div className="flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-6 w-full md:w-8/12">
                            <div className='w-full md:w-auto 2xl:pl-1'>
                                <div className="m-auto md:m-0 w-[150px] md:w-28 lg:w-[150px] h-[150px] md:h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                    <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                                </div>
                            </div>

                            <div className='w-full md:w-auto md:pl-2'>
                                <h1>Willow</h1>
                                <p className="text-base lg:text-1xl text-theme-text-2 mt-4 ">A collection of emails built by willow</p>
                            </div>
                        </div>
                        <div className='w-full md:w-4/12 flex justify-center md:justify-end mt-8 md:mt-0'>
                            <Link href="/" target="_blank" className="website-visit-btn text-base lg:text-1xl bg-white text-theme-text-2 px-6 py-4 md:py-5 rounded-full font-medium shadow-sm hover:bg-theme-blue hover:text-white transition flex items-center gap-x-1.5">
                                Visit Website
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.961857 10.2333C0.668964 10.5262 0.668964 11.0011 0.961857 11.294C1.25475 11.5869 1.72962 11.5869 2.02252 11.294L0.961857 10.2333ZM11.75 1.25586C11.75 0.841646 11.4142 0.50586 11 0.50586H4.25C3.83579 0.50586 3.5 0.841646 3.5 1.25586C3.5 1.67007 3.83579 2.00586 4.25 2.00586L10.25 2.00586L10.25 8.00586C10.25 8.42007 10.5858 8.75586 11 8.75586C11.4142 8.75586 11.75 8.42007 11.75 8.00586V1.25586ZM1.49219 10.7637L2.02252 11.294L11.5303 1.78619L11 1.25586L10.4697 0.725529L0.961857 10.2333L1.49219 10.7637Z" fill="#5B5B5B" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-10 md:pb-24'>
                <div className='container'>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-4 gap-x-2 md:gap-5 2xl:gap-8 '>

                    </div>
                </div>
            </div>

            <MarketingAgency />
        </>
    )
}
