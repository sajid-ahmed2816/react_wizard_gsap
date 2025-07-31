import { Fragment, useMemo } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from './layout/header';
import './App.css';
import Hero from './layout/main/hero';
import Services from './layout/main/services';
import Case from './layout/main/case';
import About from './layout/main/about';
import Pricing from './layout/main/pricing';
import Footer from './layout/footer';

function App() {
  const masterTimeline = gsap.timeline();

  useGSAP(() => {
    // Animate header first
    masterTimeline.addLabel("header");
  }, []);

  return (
    <Fragment>
      <Header timeline={masterTimeline} />
      <main className="flex flex-col gap-20">
        <Hero timeline={masterTimeline} />
        <About timeline={masterTimeline} />
        <Services timeline={masterTimeline} />
        <Case timeline={masterTimeline} />
        <Pricing timeline={masterTimeline} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
