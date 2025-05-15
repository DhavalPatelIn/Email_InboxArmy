'use client'
import { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function Counter() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section ref={sectionRef} className='relative z-10 my-12 md:my-16 lg:my-20'>
                <div className='container small-container text-center md:text-left'>
                    <div className="counter-row flex flex-col md:flex-row justify-center md:justify-between items-start gap-6 md:gap-4 lg::gap-2">
                        <div className="w-full md:w-auto flex-1 space-y-2 md:space-y-4">
                            <div className="text-2xl md:text-3xl lg:text-45xl font-bold">
                                $<CountUp end={180} start={start ? undefined : 0} duration={2} />M
                            </div>
                            <div className="text-lg lg:text-1xl">in email attributed<br />revenue</div>
                        </div>
                        <div className="w-full md:w-auto flex-1 space-y-2 md:space-y-4">
                            <div className="text-2xl md:text-3xl lg:text-45xl font-bold">
                                <CountUp end={40} start={start ? undefined : 0} duration={2} />+
                            </div>
                            <div className="text-lg lg:text-1xl">Certified ESP<br />Experts</div>
                        </div>
                        <div className="w-full md:w-auto flex-1 space-y-2 md:space-y-4">
                            <div className="text-2xl md:text-3xl lg:text-45xl font-bold">
                                <CountUp end={120} start={start ? undefined : 0} duration={2} />+
                            </div>
                            <div className="text-lg lg:text-1xl">Email<br />Marketers</div>
                        </div>
                        <div className="w-full md:w-auto flex-1 space-y-2 md:space-y-4">
                            <div className="text-2xl md:text-3xl lg:text-45xl font-bold">
                                <CountUp end={5000} start={start ? undefined : 0} duration={1.5} />+
                            </div>
                            <div className="text-lg lg:text-1xl">Delighted<br />Clients</div>
                        </div>
                        <div className="w-full md:w-auto flex-1 space-y-2 md:space-y-4">
                            <div className="text-2xl md:text-3xl lg:text-45xl font-bold">
                                <CountUp end={4} start={start ? undefined : 0} duration={2} />+ Years
                            </div>
                            <div className="text-lg lg:text-1xl">Average Client<br />Retention</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}