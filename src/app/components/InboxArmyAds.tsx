import Image from "next/image";
//Images
import InboxArmyLogo from '../images/inboxarmy-ads-logo.svg'
import Link from "next/link";

export default function InboxArmyAdsCard() {
    return (
        <>
            <Link href={"https://inboxarmy.com/"} target="_blank" className="inboxarmy-ads relative w-full bg-theme-dark text-white text-center shadow-custom rounded-xl border border-solid border-theme-border flex items-center justify-start">
                <div className="relative pb-16 md:pb-20 2xl:pb-16">
                    <Image className="block m-auto w-20 md:max-w-full" src={InboxArmyLogo} width={280} height={480} alt="Image" />
                    <div className="px-4 2xl:px-6 mt-12 md:mt-8 2xl:mt-16">
                        <p className="h3 text-white 2xl:mb-2">A Full ServiceEmail Marketing Agency</p>
                    </div>
                </div>

                <div className="absolute left-4 right-4 bottom-6 md:bottom-4 2xl:left-8 2xl:right-8 2xl:bottom-8">
                    <span className="block bg-theme-blue text-white hover:bg-white hover:text-theme-dark font-semibold px-1 md:px-5 py-3 md:py-4 rounded-lg whitespace-nowrap border-none uppercase text-sm md:text-base">Explore More</span>
                </div>
            </Link>
        </>
    );
}