import Image from 'next/image';

import SearchIcon from '../images/search-icon.svg'
import Willow from '../images/willow.jpg'
import Link from 'next/link';

export default async function Brands() {
    return (
        <>
            <div className="px-4">
                <div className="container">
                    <div className="text-center py-10 md:py-20 max-w-4xl w-full m-auto">
                        <h1>Brands</h1>
                        <p className="p2 w-full max-w-xl m-auto pt-2 text-theme-text-2">Browse email newsletters from 99k brands from across the web</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="bg-gradient-to-r from-[#E9EFE9] to-[#DEE5C5] rounded-3xl p-8 flex items-center justify-between">
                        <div className="sm:w-7/12 search-row flex items-center bg-theme-light-gray rounded-xl py-1 pr-2 relative">
                            <input type="text" value="" placeholder="Search brands" className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500" />
                            <button type="submit" className="search-btn bg-theme-blue hover:bg-theme-dark px-3 py-0 min-w-fit rounded-md text-white border-none absolute top-2 right-2 bottom-2">
                                <Image src={SearchIcon} width={15} height={15} alt="Icon" />
                            </button>
                        </div>

                        <div className=''>
                            <select name="" id="" className='cursor-pointer bg-transparent border-none px-2 py-6 w-full max-w-44'>
                                <option disabled>Brands by Category</option>
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

            <div>
                <div className='container'>
                    <div>
                        <Link href={"/"} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-64">
                            <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center">
                                <Image className='w-full h-full object-cover' src={Willow} alt="Image" width={150} height={150} />
                            </div>
                            <p className="mt-4 text-xl font-semibold text-[#2E2B29]">Willow</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
