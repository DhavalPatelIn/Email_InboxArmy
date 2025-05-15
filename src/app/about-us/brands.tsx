
import Image from 'next/image'

import KlaviyoLogo from '../images/klaviyo.png';
import IterableLogo from '../images/cordial_logo.png';
import CordialLogo from '../images/mailchimp.png';
import BrazeLogo from '../images/cusotmer.io.png';
import MailchimpLogo from '../images/marketingcloud.png';
import HubspotLogo from '../images/hubspot.png';
import CustomerioLogo from '../images/braze.png';

export default function Brands() {
    return (
        <>
            <section className='relative z-10 my-12 md:my-16 lg:my-20'>
                <div className='container small-container'>
                    <div className='subtitle2 text-center max-w-4xl xl:px-10 w-full mx-auto space-y-6 mb-8 md:mb-12'>
                        <h2>We support 5000+ Brands</h2>
                        <p>We are humbled to have 5K+ customers after more than a decade of service. Some are more well-known than others, but they are all the best.</p>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center gap-6 md:gap-12">
                        <div className="brand-logo">
                            <Image className='block m-auto' src={KlaviyoLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={IterableLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={CordialLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={BrazeLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={MailchimpLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={HubspotLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={CustomerioLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={KlaviyoLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={IterableLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={CordialLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={MailchimpLogo} width={150} height={50} alt='Image' />
                        </div>
                        <div className="brand-logo">
                            <Image className='block m-auto' src={HubspotLogo} width={150} height={50} alt='Image' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}