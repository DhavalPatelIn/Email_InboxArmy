
import EmailCard from "./components/EmailCard";
import HeroSection from "./components/HeroBanner";
import InboxArmyAdsCard from "./components/InboxArmyAds";


export default function Home() {
  return (
    <>
      <HeroSection />
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
    </>
  );
}
