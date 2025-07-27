import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Case() {
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((el, i) => {
      let direction = i === 0 ? { x: -100 } : i === 1 ? { y: 100 } : { x: 100 };

      gsap.fromTo(
        el,
        { ...direction, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <section>
      <div className="container mx-auto flex flex-col gap-10">
        <div>
          <div className='grid grid-cols-12 gap-x-12 items-center p-6'>
            <div className='col-span-12'>
              <div className='grid grid-cols-12 gap-x-8 items-center'>
                <div className='col-span-3'>
                  <h2 className='bg-[var(--accent)] text-[40px] text-center font-semibold p-1 rounded-lg'>Case study</h2>
                </div>
                <div className='col-span-7'>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus possimus voluptate illum modi corporis quae nam id, incidunt repellendus, eius iusto</p>
                </div>
              </div>
            </div>
            <div className='col-span-12'>
            </div>
          </div>
          <div className='grid grid-cols-12 m-6 p-10 bg-[var(--black)] rounded-3xl'>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`col-span-4 p-8 flex flex-col gap-4 ${i === 1 ? "border-r border-r-gray-200" : ""} ${i === 1 ? "border-l border-l-gray-200" : ""}`}
              >
                <p className='text-gray-200'>
                  {i === 0 &&
                    "For a local restaurant, we implement a targetted PPC campaign that resulted in 50% increase in website traffic and a 20% increase in sales."}
                  {i === 1 &&
                    "For a B2B Software Company, we developed an SEO stragety that resulted in a first page ranking for keywords and a 200% increase in organic traffic."}
                  {i === 2 &&
                    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."}
                </p>
                <a href='#' className='text-[var(--accent)] flex items-center gap-2'>
                  Learn More <span className='font-semibold text-xl'>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Case;