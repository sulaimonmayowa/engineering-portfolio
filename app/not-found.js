import Link from 'next/link';
import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';

export default function NotFound() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 min-h-screen flex items-center justify-center px-margin-mobile">
        <div className="text-center max-w-lg">
          <Icon name="search_off" size="text-7xl" className="text-on-surface-variant/20 mb-8" />
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 font-bold mb-4">404</h1>
          <p className="font-body-lg text-body-lg text-secondary mb-8">
            This page doesn&apos;t exist — but your next big idea could start here.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label-mono text-label-mono hover:bg-indigo-accent transition-all"
          >
            <Icon name="arrow_back" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
