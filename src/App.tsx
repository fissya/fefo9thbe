import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Showcase } from '@/components/Showcase';
import { Competition } from '@/components/Competition';
import { Gallery } from '@/components/Gallery';
import { Sponsors } from '@/components/Sponsors';
import { FAQ } from '@/components/FAQ';
import { Registration } from '@/components/Registration';
import { Footer } from '@/components/Footer';

function App() {
  // Update page title
  useEffect(() => {
    document.title = 'FEFO 9 - Fun Education For Olympiad | Japanese Theme';
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Competition />
      <Gallery />
      <Sponsors />
      <FAQ />
      <Registration />
      <Footer />
    </main>
  );
}

export default App;