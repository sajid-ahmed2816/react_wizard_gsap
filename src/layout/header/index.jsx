import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import Button from '../../components/button';

const navs = [
  { name: "About us", id: "#about-us" },
  { name: "Services", id: "#services" },
  { name: "Use Cases", id: "#use-cases" },
  { name: "Pricing", id: "#pricing" },
  { name: "Blog", id: "#blog" },
];

function Header({ timeline }) {
  const navRefs = useRef([]);
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (!timeline || navRefs.current.length === 0) return;

    timeline.addLabel("nav");

    timeline.from(navRefs.current, {
      y: -120,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });

    timeline.from(buttonRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    }, "-=0.2");
  }, [timeline]);

  return (
    <header>
      <div className='flex justify-between items-center px-6 py-8 container mx-auto'>
        <h2 className='text-3xl font-semibold flex items-center gap-1'>
          <a href={"#home"} className='text-3xl font-semibold flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="currentColor"><path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path></svg>
            WizardZ
          </a>
        </h2>
        <nav>
          <ul className='flex items-center gap-x-14 navs'>
            {navs.map((nav, ind) => (
              <li
                key={ind}
                className='text-[20px] flex flex-col'
                ref={(el) => (navRefs.current[ind] = el)}
              >
                <a href={nav.id}>
                  {nav.name}
                </a>
              </li>
            ))}
            <Button ref={buttonRef} title={"Request a Quote"} />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header