// components/EmailCard.tsx
import Image from "next/image";
import Link from "next/link";

interface EmailCardProps {
    title: string;
    image: string;
    tags: string[];
    industries: string[];
    seasonals: string[];
}

export default function EmailCard({ title, image, tags, industries, seasonals }: EmailCardProps) {
    return (
        <Link href={"/"} className="email-link w-full bg-white shadow-custom rounded-md md:rounded-xl border border-solid border-theme-border overflow-hidden">
            <div className="email-image relative py-36 sm:py-32 md:py-40 2xl:py-60 w-full overflow-hidden">
                <Image className="absolute left-0 right-0 w-full" src={image} width={280} height={480} alt={title} />
            </div>
            <div className="p-2 md:p-4">
                <p className="text-theme-dark text-sm md:text-base mb-2">{title}</p>
                <div className="catagery-data flex flex-wrap gap-1">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-xxs md:text-sm block leading-4 bg-theme-light-gray text-theme-dark px-2 md:px-4 py-1 md:py-2 rounded-md font-normal">
                            {tag}
                        </span>
                    ))}

                    {industries.length > 0 && (
                        industries.map((industry, index) => (
                            <span key={index} className="text-xxs md:text-sm block leading-4 bg-theme-light-gray text-theme-dark px-2 md:px-4 py-1 md:py-2 rounded-md font-normal">
                                {industry}
                            </span>
                        ))
                    )}
                    {seasonals.length > 0 && (
                        seasonals.map((seasonal, index) => (
                            <span key={index} className="text-xxs md:text-sm block leading-4 bg-theme-light-gray text-theme-dark px-2 md:px-4 py-1 md:py-2 rounded-md font-normal">
                                {seasonal}
                            </span>
                        ))
                    )}
                </div>
            </div>
        </Link>
    );
}
