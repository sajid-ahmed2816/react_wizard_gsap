import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Pricing() {
  const cardRefs = useRef([]);
  const liRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(cardRefs.current[0], { y: -100, opacity: 0 });
    gsap.set(cardRefs.current[1], { y: 100, opacity: 0 });
    gsap.set(cardRefs.current[2], { y: -100, opacity: 0 });
    gsap.set(liRefs.current, { y: 50, opacity: 0, willChange: "transform, opacity" });

    ScrollTrigger.create({
      trigger: cardRefs.current[0],
      start: "top 80%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();

        // First card from top
        tl.to(cardRefs.current[0], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        // Middle card from bottom
        tl.to(cardRefs.current[1], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.3"); // small overlap

        // Last card from top
        tl.to(cardRefs.current[2], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.3");

        // UL from bottom in stagger after cards complete
        tl.to(liRefs.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.15,
        }, "+=0.2");
      },
    });
  }, []);


  const pricing = [
    { name: "Starter", features: ["Basic Features", "SEO optimization", "Social media account setup", "Monthly analytics report", "Email support"], price: "From $299/mo", background: "light" },
    { name: "Growth", features: ["Starter Features", "Google/Facebook ads (PPC)", "A/B Testing review", "Email campaigns", "Dedicated support"], price: "From $699/mo", background: "dark" },
    { name: "Pro	", features: ["Growth Features", "Fully managed digital campaigns", "Custom marketing strategy", "Weekly optimization sessions", "Dedicated success manager"], price: "From $1299/mo", background: "light" },
  ];

  const points = ["No long-term contracts", "14-day satisfaction guarantee", "Custom plans available upon request"];

  return (
    <section>
      <div className="container mx-auto flex flex-col p-6 gap-y-8">
        <div className='grid grid-cols-12 gap-x-12 items-center'>
          <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-x-8 items-center'>
              <div className='col-span-2'>
                <h2 className='bg-[var(--accent)] text-[40px] text-center font-semibold p-1 rounded-lg'>Prices</h2>
              </div>
              <div className='col-span-7'>
                <p>Flexible Plans That Grow With You<br />Whether you’re a startup or an enterprise, we offer pricing plans that fit your needs.</p>
              </div>
            </div>
          </div>
          <div className='col-span-12'>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8 items-center'>
          {pricing.map((item, ind) => (
            <div key={ind} className='col-span-4' ref={(el) => cardRefs.current[ind] = el}>
              <div className={`p-8 grid grid-cols-12 border-2 ${item.background == "dark" ? "bg-[var(--black)]" : "bg-[var(--white)]"} border-[var(--black)] rounded-3xl custom-shadow`}>
                <div className='col-span-12 flex flex-col justify-between gap-y-7'>
                  <h2 className={`p-1 text-3xl rounded-sm bg-[var(${item.background == "light" ? "--accent" : "--white"})] text-center`}>
                    {item.name}
                  </h2>
                  <ul className='flex flex-col gap-3'>
                    {item.features.map((pn, ind) => (
                      <li
                        key={ind}
                        className={`flex items-center gap-3 text-lg ${item.background == "dark" ? "text-white" : "text-black"} before:content-[''] before:inline-block before:w-6 before:h-1 before:rounded-full ${item.background == "dark" ? "text-white before:bg-[var(--accent)]" : "text-black before:bg-[var(--black)]"}`}
                      >
                        {pn}
                      </li>
                    ))}
                  </ul>
                  <p className={`${item.background == "dark" ? "text-white" : "text-black"} text-center font-bold text-2xl`}>{item.price}</p>
                  <a href='#' className={`p-3 flex items-center justify-center gap-2 w-full ${item.background == "light" ? "bg-[var(--black)]" : "bg-[var(--accent)]"} rounded-sm text-2xl font-semibold`}>
                    <p className={`text-lg ${item.background == "dark" ? "text-black" : "text-white"}`}>Learn More</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className='col-span-12'>
            <ul className='flex justify-center gap-2'>
              {points.map((pn, ind) => (
                <li
                  className='custom-marker flex items-center gap-3 text-lg font-semibold'
                  key={ind}
                  ref={(el) => liRefs.current[ind] = el}
                >
                  {pn}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing;