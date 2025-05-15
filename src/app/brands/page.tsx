import Image from 'next/image';

import SearchIcon from '../images/search-icon.svg'
import Willow from '../images/willow.jpg'
import Link from 'next/link';
import MarketingAgency from 'app/components/MarketingAgency';

export default async function Brands() {
    return (
        <>
            <div className="md:px-4">
                <div className="container">
                    <div className="text-center pt-8 pb-12 md:py-20 max-w-4xl w-full m-auto space-y-2">
                        <h1>Brands</h1>
                        <p className="text-base md:text-1xl font-normal w-full m-auto pt-4 text-theme-text-2">Browse email newsletters from 99k brands from across the web</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className='lg:px-20 md:pt-6 md:pb-1'>
                    <div className="bg-gradient-to-r from-[#E9EFE9] to-[#DEE5C5] rounded-2xl lg:rounded-3xl pb-0 p-4 lg:p-6 lg:px-8 flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-7/12 search-row lg:pr-10">
                            <div className='flex w-full flex-wrap items-center bg-theme-light-gray rounded-xl py-1.5 md:py-1 relative'>
                                <input type="text" value="" placeholder="Search brands" className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500" />
                                <button type="submit" className="search-btn bg-theme-blue hover:bg-theme-dark px-3 py-0 min-w-fit rounded-md text-white border-none absolute top-2 right-2 bottom-2">
                                    <Image src={SearchIcon} width={15} height={15} alt="Icon" />
                                </button>
                            </div>
                        </div>

                        <div className='w-full md:w-5/12'>
                            <div className='flex justify-center md:justify-end'>
                                <div className='w-full max-w-[210px] md:max-w-[210px]'>
                                    <select name="" id="" className='w-full cursor-pointer text-base font-medium bg-transparent border-none px-2 py-3 md:py-6 pr-4'>
                                        <option>Brands by Category</option>
                                        <option value="Cannabis">Cannabis</option>
                                        <option value="Ecommerce">Ecommerce</option>
                                        <option value="Gaming">Gaming</option>
                                        <option value="SaaS">SaaS</option>
                                        <option value="B2B">B2B</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Food">Food</option>
                                        <option value="Software Technology">Software & Technology</option>
                                        <option value="Musicians">Musicians</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Beverage">Beverage</option>
                                        <option value="Coffee">Coffee</option>
                                        <option value="Restaurants">Restaurants</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='pt-12 pb-10 md:pt-24 md:pb-24'>
                <div className='container'>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-4 md:gap-6 lg:gap-9 lg:px-10'>
                        <Link href={"/"} className="bg-white rounded-2xl shadow-md py-8 px-6  flex flex-col items-center border border-solid border-theme-border origin-center transition-all ease-in-out lg:hover:scale-105">
                            <div className="w-28 lg:w-[150px] h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2B29]">Willow</p>
                        </Link>

                        <Link href={"/"} className="bg-white rounded-2xl shadow-md py-8 px-6  flex flex-col items-center border border-solid border-theme-border origin-center transition-all ease-in-out lg:hover:scale-105">
                            <div className="w-28 lg:w-[150px] h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2B29]">Willow</p>
                        </Link>

                        <Link href={"/"} className="bg-white rounded-2xl shadow-md py-8 px-6  flex flex-col items-center border border-solid border-theme-border origin-center transition-all ease-in-out lg:hover:scale-105">
                            <div className="w-28 lg:w-[150px] h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2B29]">Willow</p>
                        </Link>

                        <Link href={"/"} className="bg-white rounded-2xl shadow-md py-8 px-6  flex flex-col items-center border border-solid border-theme-border origin-center transition-all ease-in-out lg:hover:scale-105">
                            <div className="w-28 lg:w-[150px] h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2B29]">Willow</p>
                        </Link>

                        <Link href={"/"} className="bg-white rounded-2xl shadow-md py-8 px-6  flex flex-col items-center border border-solid border-theme-border origin-center transition-all ease-in-out lg:hover:scale-105">
                            <div className="w-28 lg:w-[150px] h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2B29]">Willow</p>
                        </Link>

                        <Link href={"/"} className="bg-white rounded-2xl shadow-md py-8 px-6  flex flex-col items-center border border-solid border-theme-border origin-center transition-all ease-in-out lg:hover:scale-105">
                            <div className="w-28 lg:w-[150px] h-28 lg:h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2B29]">Willow</p>
                        </Link>
                    </div>
                </div>
            </div>

            <MarketingAgency />
        </>
    )
}
