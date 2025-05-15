import Link from "next/link"

export default function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center py-20 min-h-[60vh]">
                <div className="container">
                    <div className="text-center space-y-5">
                        <div className="text-7xl lg:text-9xl font-bold">404</div>
                        <h1>SORRY,</h1>
                        <p className="p2 pb-4">Our Armed Forces encountered a hurdle in looking for the page!</p>

                        <Link href={'/'} className="block md:inline-block mx-auto bg-theme-blue text-white hover:bg-theme-dark font-semibold px-6 py-3 md:py-4 rounded-lg whitespace-nowrap border-none uppercase text-sm md:text-base">Back TO Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
