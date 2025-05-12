import MarketingAgency from "app/components/MarketingAgency";
import EmailCard from "../components/EmailCard";
import InboxArmyAdsCard from "../components/InboxArmyAds";

export default async function Categories() {
    return (
        <>
            <div className="container">
                <div className="text-center py-10 md:py-20 max-w-6xl w-full m-auto">
                    <h1 className="leading-tight tracking-tight pb-6 pt-4 md:py-5 block">Announcement Email Inspiration</h1>
                    <p className="p2 w-full m-auto pt-2 text-theme-text-2">A curated collection of Announcement emails. Each review includes a full preview of the email design along with other noteworthy features. Use the Inspiration top navigation to browse other categories.</p>
                </div>
            </div>

            <div className="pt-4 pb-6 px-4 xl:px-12 md:pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-4 gap-x-2 md:gap-5 2xl:gap-8 pb-4 md:pb-12">
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                    <InboxArmyAdsCard />
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                    <EmailCard />
                </div>
            </div>

            <MarketingAgency />

        </>
    )
}
