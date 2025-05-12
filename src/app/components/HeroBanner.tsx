import HeaderSearch from "./HeaderSearch";

export default function HeroSection() {
    return (
        <>
            <div className="px-4">
                <div className="text-center py-10 md:py-20 max-w-4xl w-full m-auto">
                    <span className="block p2 uppercase font-semibold text-theme-text-2">✨ 11,000+ Best Email Marketing Inspiration</span>
                    <h1 className="leading-tight tracking-tight pb-6 pt-4 md:py-5 block">The Best Email Designs Curated for Marketers and Creators</h1>
                    <p className="p2 w-full max-w-xl m-auto pt-2 text-theme-text-2">
                        The ultimate library for Email designs, you&rsquo;ll find the one that meets your tastes and current needs best.
                    </p>
                    <div className="w-full max-w-3xl m-auto md:px-6 mt-8">
                        <HeaderSearch />
                    </div>
                </div >
            </div>
        </>
    );
}