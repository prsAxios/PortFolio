"use client";

import Hero from '@/components/Hero/Hero';
import Decs from '@/components/description/Decs';
import Project from '@/components/project/index';
import SliderCert_ from '@/components/sliderCertificates/SliderCert_';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll();
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);

      return () => scroll.destroy();
    })();
  }, []);


  return (
    <main data-scroll-container style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <Decs />
      <Project />
      <SliderCert_ />
      {/* <Contact /> */}
    </main>
  );
}
// 