import Image from 'next/image';
import Link from 'next/link';
import InboxArmyLogo from '../images/inboxarmy-whitelogo.svg';
import EmailBanner from '../images/email-banner.webp';
import Clutch from '../images/clutch.svg';
import Google from '../images/google.svg';
import RattingStar from '../images/ratting-star.svg';

export default async function MarketingAgency() {
    return (
        <>
            <section className="text-white bg-cover bg-center py-10 md:py-24" style={{ backgroundImage: `url(${EmailBanner.src})` }}>
                <div className="container">
                    <div className='w-full max-w-7xl mx-auto xl:px-10'>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className='w-full md:w-2/3 lg:w-3/4'>
                                <div className="mb-8 w-40 md:w-auto">
                                    <Image src={InboxArmyLogo} alt='Logo' width={284} height={56} />
                                </div>
                                <div className="w-full">
                                    <h2 className="mb-6">Your Full Service Email + SMS Marketing Agency</h2>
                                    <p className="mb-6 text-white text-lg md:text-1xl">We are your one-stop shop for all your email and SMS marketing needs.</p>

                                    <p className='text-white w-full pb-4 md:pb-8'>We can help you with:</p>

                                    <ul className="list-disc pl-6 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                                        <li>Email Strategy and Audit</li>
                                        <li>Email Campaign Management</li>
                                        <li>Email Marketing Automation</li>
                                        <li>SMS Marketing</li>
                                        <li>ESP Vendor Evaluation and Migration</li>
                                        <li>Email Deliverability</li>
                                        <li>Push Notifications</li>
                                    </ul>

                                    <Link href={'https://www.inboxarmy.com/'} target='_blank' className='hidden md:inline-block bg-theme-blue text-white hover:bg-white hover:text-theme-dark font-intersemi font-semibold px-1 md:px-5 py-3 md:py-4 mt-8 rounded-lg whitespace-nowrap border-none uppercase text-sm md:text-base'>
                                        Visit InboxArmy.com
                                    </Link>
                                </div>
                            </div>


                            <div className="w-full md:w-1/3 lg:w-1/4">

                                <div className="space-y-2 md:space-y-4">

                                    <div className='grid grid-cols-2 gap-x-2 md:space-y-4 md:block'>
                                        <div className="bg-[#3c451b] rounded-2xl px-4 md:px-8 py-4 flex items-center justify-between bg-white bg-opacity-10">
                                            <div className="text-white text-2xl font-bold max-w-10 md:max-w-[102px]">
                                                <Image className='w-full' src={Clutch} width={100} height={50} alt='Logo' />
                                            </div>
                                            <div className="flex items-center flex-wrap flex-col pl-4 md:pl-6">
                                                <span className="text-base md:text-4xl lg:text-32xl text-white font-intersemi font-semibold w-full block pb-1">4.9</span>
                                                <Image src={RattingStar} width={100} height={50} alt='Logo' />
                                            </div>
                                        </div>

                                        <div className="bg-[#3c451b] rounded-2xl px-4 md:px-8 py-4 flex items-center justify-between bg-white bg-opacity-10">
                                            <div className="text-white text-2xl font-bold max-w-10 md:max-w-[102px]">
                                                <Image className='w-full' src={Google} width={100} height={50} alt='Logo' />
                                            </div>
                                            <div className="flex items-center flex-wrap flex-col pl-4 md:pl-6">
                                                <span className="text-base md:text-4xl lg:text-32xl text-white font-intersemi font-semibold w-full block pb-1">4.9</span>
                                                <Image src={RattingStar} width={100} height={50} alt='Logo' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='agency-box flex flex-wrap md:space-y-4 md:block'>
                                        <div className="info-text bg-[#3c451b] rounded-2xl px-4 md:px-8 py-4 flex items-center bg-white bg-opacity-10 min-h-80 md:min-h-[102px]">
                                            <div className='text-base md:text-1xl leading-6 md:leading-8 block 2xl:pr-10'>We support <strong>40+ Esps</strong></div>
                                        </div>
                                        <div className="info-text bg-[#3c451b] rounded-2xl px-4 md:px-8 py-4 flex items-center bg-white bg-opacity-10 min-h-80 md:min-h-[102px]">
                                            <div className='text-base md:text-1xl leading-6 md:leading-8 block 2xl:pr-10'>Trusted by <strong>5000+ Brands</strong></div>
                                        </div>
                                        <div className="info-text bg-[#3c451b] rounded-2xl px-4 md:px-8 py-4 flex items-center bg-white bg-opacity-10 min-h-80 md:min-h-[102px]">
                                            <div className='text-base md:text-1xl leading-6 md:leading-8 block 2xl:pr-10'><strong>25+</strong> Industries & Verticals served</div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <Link href={'https://www.inboxarmy.com/'} target='_blank' className='block md:hidden bg-theme-blue text-white hover:bg-white hover:text-theme-dark font-semibold px-1 md:px-5 py-3 md:py-4 rounded-lg whitespace-nowrap border-none uppercase text-sm md:text-base text-center'>
                                Visit InboxArmy.com
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
