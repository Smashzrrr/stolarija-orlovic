import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <SocialProof />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
