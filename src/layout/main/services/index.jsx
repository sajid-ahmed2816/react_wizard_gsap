import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Images from '../../../assets/images';

function Services() {
  const cardRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
      });
    });

    // First two cards
    ScrollTrigger.create({
      trigger: cardRefs.current[0],
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to([cardRefs.current[0], cardRefs.current[1]], {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        });
      },
      onLeaveBack: () => {
        gsap.to([cardRefs.current[0], cardRefs.current[1]], {
          x: (i) => i === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.1,
        });
      },
    });

    // Last two cards
    ScrollTrigger.create({
      trigger: cardRefs.current[2],
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to([cardRefs.current[2], cardRefs.current[3]], {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        });
      },
      onLeaveBack: () => {
        gsap.to([cardRefs.current[2], cardRefs.current[3]], {
          x: (i) => i === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.1,
        });
      },
    });
  }, []);


  const services = [
    { image: Images.service1, name: "Search engine optimization", background: "light" }, { image: Images.service2, name: "Pay per click advertising", background: "dark" },
    { image: Images.service3, name: "Social media marketing", background: "dark" }, { image: Images.service4, name: "E-mail marketing", background: "light" },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className='grid grid-cols-12 gap-x-12 items-center p-6'>
          <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-x-8 items-center'>
              <div className='col-span-2'>
                <h2 className='bg-[var(--accent)] text-[40px] text-center font-semibold p-1 rounded-lg'>Services</h2>
              </div>
              <div className='col-span-7'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus possimus voluptate illum modi corporis quae nam id, incidunt repellendus, eius iusto</p>
              </div>
            </div>
          </div>
          <div className='col-span-12'>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8 items-center p-6'>
          {services.map((item, ind) => (
            <div key={ind} className='col-span-6' ref={(el) => cardRefs.current[ind] = el}>
              <div className={`p-8 grid grid-cols-12 border-2 ${item.background == "dark" ? "bg-[var(--black)]" : "bg-[var(--white)]"} border-[var(--black)] rounded-3xl custom-shadow`}>
                <div className='col-span-5 flex flex-col justify-between'>
                  <h2 className={`p-1 text-3xl rounded-sm bg-[var(${item.background == "light" ? "--accent" : "--white"})]`}>
                    {item.name}
                  </h2>
                  <a href='#' className='flex items-center gap-2'>
                    <div className={`w-10 h-10 ${item.background == "light" ? "bg-[var(--black)]" : "bg-[var(--white)]"} ${item.background == "dark" ? "text-black" : "text-white"} rounded-full flex items-center justify-center text-2xl font-semibold`}>
                      ↗
                    </div>
                    <p className={`text-lg ${item.background == "light" ? "text-[var(--black)]" : "text-[var(--white)]"}`}>Learn More</p>
                  </a>
                </div>
                <div className='col-span-7 flex justify-end'>
                  <img src={item.image} alt={`image${0}`} className="w-40 h-40 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services