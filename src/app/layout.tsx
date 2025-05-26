import type { Metadata } from 'next';
import './styles/globals.css';

// Components
import Header from './components/header';
import Footer from './components/footer';
import GlobalLoader from './components/GlobalLoader';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "A Full-Service Email Marketing Agency - InboxArmy",
  description: "We are a full service email marketing agency offering email campaign management, setting up automations, template production &amp; much more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <GlobalLoader />
        <Header />
        {children}
        <Footer />
        {/* BugHerd Script */}
        <Script
          src="https://www.bugherd.com/sidebarv2.js?apikey=vfmlojxzuzzx1k3puoexfq "
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}