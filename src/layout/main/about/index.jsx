import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Images from '../../../assets/images';

gsap.registerPlugin(ScrollTrigger);

const choose = [
  "Trusted by global and local brands",
  "Transparent, data-driven processes",
  "Tailored strategies for every growth stage"
];

function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const liRefs = useRef([]);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useGSAP(() => {
    gsap.set(imageRef.current, { scale: 0, opacity: 0, willChange: "transform, opacity" });
    gsap.set(headingRef.current, { y: -100, opacity: 0, willChange: "transform, opacity" });
    gsap.set(liRefs.current, { y: 100, opacity: 0, willChange: "transform, opacity" });
    gsap.set(missionRef.current, { x: -100, opacity: 0, willChange: "transform, opacity" });
    gsap.set(visionRef.current, { x: 100, opacity: 0, willChange: "transform, opacity" });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(imageRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
        tl.to(headingRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }, "+=0.1");
        tl.to(liRefs.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.15,
        }, "-=0.3");
        tl.to(missionRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        }, "-=0.2");
        tl.to(visionRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        }, "-=0.5");
      }
    });
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="container mx-auto">
        <div className='grid grid-cols-12 gap-y-10 gap-x-10 items-center p-6'>
          <div className='col-span-12 grid grid-cols-12 gap-x-8 items-center'>
            <div className='col-span-2'>
              <h2 className='bg-[var(--accent)] text-[40px] text-center font-semibold p-1 rounded-lg'>About</h2>
            </div>
            <div className='col-span-8'>
              <p>At WizardZ, we’re not just a marketing agency—we’re your growth partner. We craft intelligent, data-driven digital strategies that deliver measurable results, blending creativity with deep industry insight.</p>
            </div>
          </div>
          <div
            ref={imageRef}
            className='col-span-12 bg-[var(--black)] rounded-xl flex justify-center items-center'
          >
            <img
              src={Images.about}
              alt='about-image'
              className='h-52'
              style={{ transform: "scale(1.4)" }}
            />
          </div>
          <div className='col-span-12 flex flex-col gap-4'>
            <h2 className='text-5xl font-semibold' ref={headingRef}>
              Why Choose Us?
            </h2>
            <ul className='flex gap-2'>
              {choose.map((pn, ind) => (
                <li
                  className='custom-marker flex items-center gap-3 text-lg'
                  key={ind}
                  ref={(el) => liRefs.current[ind] = el}
                >
                  {pn}
                </li>
              ))}
            </ul>
          </div>
          <div
            ref={missionRef}
            className="col-span-6 flex flex-col items-start gap-4"
          >
            <a href='#' className='text-[var(--accent)] bg-[var(--black)] text-2xl font-semibold flex items-center gap-2 p-2 rounded-md'>
              Our Mission
            </a>
            <p className='text-[var(--black)] text-lg'>
              To empower businesses with digital marketing solutions that are creative, results-focused, and built to scale—helping brands grow with confidence in a competitive digital world.
            </p>
          </div>
          <div
            ref={visionRef}
            className="col-span-6 flex flex-col items-start gap-4"
          >
            <a href='#' className='text-[var(--accent)] bg-[var(--black)] text-2xl font-semibold flex items-center gap-2 p-2 rounded-md'>
              Our Vision
            </a>
            <p className='text-[var(--black)] text-lg'>
              To become a global leader in digital marketing by driving innovation, fostering long-term partnerships, and delivering campaigns that leave a lasting impact on both brands and audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
