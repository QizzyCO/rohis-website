
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OrnamentStrip from './components/OrnamentStrip';
import Footer from './components/Footer';

// Dynamic imports untuk Code Splitting
const MissionVision = lazy(() => import('./components/MissionVision'));
const About = lazy(() => import('./components/About'));
const Wisdom = lazy(() => import('./components/Wisdom'));
const Features = lazy(() => import('./components/Features'));
const Timeline = lazy(() => import('./components/Timeline'));
const News = lazy(() => import('./components/News'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const SocialFeed = lazy(() => import('./components/SocialFeed'));
const EventsCalendar = lazy(() => import('./components/EventsCalendar'));
const ArtGallery = lazy(() => import('./components/ArtGallery'));
const Location = lazy(() => import('./components/Location'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <style dangerouslySetInnerHTML={{ __html: `
        /* High-Fidelity Image Rendering */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: auto;
          -ms-interpolation-mode: bicubic;
        }
        .rendering-high-quality {
          image-rendering: high-quality;
          -webkit-font-smoothing: antialiased;
        }
        /* Smooth Zoom Utility */
        .img-zoom-container {
          overflow: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        .img-zoom-container img {
          transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
          will-change: transform;
        }
        .img-zoom-container:hover img {
          transform: scale(1.12);
        }
      `}} />
      
      <Navbar />
      
      {/* Dekorasi Samping Statis */}
      <OrnamentStrip 
        patternId={1} 
        orientation="vertical" 
        className="fixed left-0 top-0 bottom-0 w-8 md:w-12 z-40 text-emerald-900/40 hidden xl:block border-r border-emerald-100/50" 
      />
      <OrnamentStrip 
        patternId={1} 
        orientation="vertical" 
        className="fixed right-0 top-0 bottom-0 w-8 md:w-12 z-40 text-emerald-900/40 hidden xl:block border-l border-emerald-100/50" 
      />

      <main className="xl:px-12">
        <Hero />
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent -translate-x-1/2 pointer-events-none"></div>
          
          <Suspense fallback={<SectionLoader />}>
            <MissionVision />
          </Suspense>

          <OrnamentStrip patternId={2} className="h-24 w-full text-emerald-800 my-12 opacity-30" />

          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Wisdom />
          </Suspense>

          <OrnamentStrip patternId={1} className="h-16 w-full text-emerald-800 opacity-20" />

          <Suspense fallback={<SectionLoader />}>
            <News />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Timeline />
          </Suspense>

          <OrnamentStrip patternId={2} className="h-20 w-full text-emerald-800 mt-24 opacity-20" />

          <Suspense fallback={<SectionLoader />}>
            <SocialFeed />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Location />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <EventsCalendar />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ArtGallery />
          </Suspense>
        </div>
      </main>

      <Footer />

      {/* Background Grain Efek Futuristik */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
};

const SectionLoader = () => (
  <div className="h-96 flex flex-col items-center justify-center gap-4 text-emerald-600/50">
    <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Memuat...</span>
  </div>
);

export default App;
