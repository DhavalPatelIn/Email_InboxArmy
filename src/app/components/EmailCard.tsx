import Image from "next/image";
import Link from "next/link";

//Images
import EmailImage from '../images/email-1.jpg'

export default function EmailCard() {
    return (
        <>
            <Link href={"/"} className="email-link w-full bg-white shadow-custom rounded-md md:rounded-xl border border-solid border-theme-border overflow-hidden">
                <div className="email-image relative py-36 sm:py-32 md:py-40 2xl:py-60 w-full overflow-hidden">
                    <Image className="absolute left-0 right-0 w-full" src={EmailImage} width={280} height={480} alt="Image" />
                </div>
                <div className="p-2 md:p-4">
                    <p className="text-theme-dark text-sm md:text-base  mb-2">New to using Canva for work? Start here 👉</p>
                    <div className="flex flex-wrap">
                        <span className="text-xxs md:text-sm block leading-4 bg-theme-light-gray text-theme-dark px-2 md:px-4 py-1 md:py-2 rounded-md font-normal">eCommerce</span>
                    </div>
                </div>
            </Link>
        </>
    );
}