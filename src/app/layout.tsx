import type { Metadata } from 'next';
import './styles/globals.css';

// Components
import Header from './components/header';
import Footer from './components/footer';
import GlobalLoader from './components/GlobalLoader';

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

      </body>
    </html>
  );
}