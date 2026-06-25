import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import About from '@/components/sections/About';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'About',
  description:
    'Full-Stack Engineer and AI Agent Builder with expertise in React, Next.js, Python, and AI automation systems.',
};

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
