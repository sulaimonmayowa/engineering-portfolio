import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Skills from '@/components/sections/Skills';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16 md:space-y-section-gap pt-24 md:pt-32 pb-20">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <CaseStudies />
        <Skills />
        <Process />
        <Testimonials />
        <Cta />

      </main>
      <Footer />
    </>
  );
}
