import { Fragment, useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './App.css';

const navs = [
  { name: "About us", id: "about_us" },
  { name: "Services", id: "services" },
  { name: "Use Cases", id: "use_cases" },
  { name: "Pricing", id: "pricing" },
  { name: "Blog", id: "blog" },
]

function App() {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(headingRef.current, { y: 50, opacity: 0 })
      .from(paraRef.current, { y: 50, opacity: 0 }, "-=0.6")
      .from(buttonRef.current, { y: 50, opacity: 0 }, "-=0.5")
      .from(imgRef.current, { x: 50, opacity: 0 }, "-=0.4")
      .add(() => {
        const container = document.querySelector(".parallax-container");

        container.addEventListener("mousemove", (e) => {
          const rect = container.getBoundingClientRect();
          const offsetX = e.clientX - rect.left;
          const offsetY = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const moveX = (centerX - offsetX) / 50;
          const moveY = (centerY - offsetY) / 50;

          gsap.to(imgRef.current, {
            x: moveX,
            y: moveY,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        container.addEventListener("mouseleave", () => {
          gsap.to(imgRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });

  }, []);

  return (
    <Fragment>
      <header>
        <div className='flex justify-between items-center p-6 container mx-auto'>
          <h2 className='text-3xl font-semibold flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="currentColor"><path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path></svg>
            WizardZ
          </h2>
          <nav>
            <ul className='flex items-center gap-x-14 navs'>
              {navs.map((nav, ind) => (
                <li key={ind} className='text-[20px] flex flex-col'>{nav.name}</li>
              ))}
              <a href="#" className='btn-primary'>
                <span className='btn-highlighter'>Request a Quote</span>
              </a>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div className="container mx-auto">
            <div className='grid grid-cols-12 gap-x-12 items-center p-6'>
              <div className='col-span-6'>
                <div className="flex flex-col gap-8 items-start hero-content">
                  <h1 className='text-6xl font-semibold' ref={headingRef}>Navigating the digital landscape for success</h1>
                  <p className='text-xl' ref={paraRef}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi rem, dolor vitae itaque dolorem similique neque architecto eum maiores soluta placeat consequatur omnis explicabo.</p>
                  <a href="#" className='btn-primary' ref={buttonRef}>
                    <span className='hero-btn'>Book a consultation</span>
                  </a>
                </div>
              </div>
              <div className='col-span-6 parallax-container'>
                <img ref={imgRef} src="https://lyoko.studio/Hero.svg" alt="hero_image" className="mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default App
