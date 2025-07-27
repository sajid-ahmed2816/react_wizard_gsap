import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Images from '../../../assets/images';

function Hero({ timeline }) {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    if (!timeline || !headingRef.current) return;

    timeline.addLabel("hero");

    timeline
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
      .from(
        paraRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        buttonRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        imgRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .add(() => {
        const container = document.querySelector(".parallax-container");
        if (!container) return;

        const moveHandler = (e) => {
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
        };

        const leaveHandler = () => {
          gsap.to(imgRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        container.addEventListener("mousemove", moveHandler);
        container.addEventListener("mouseleave", leaveHandler);

        return () => {
          container.removeEventListener("mousemove", moveHandler);
          container.removeEventListener("mouseleave", leaveHandler);
        };
      });
  }, [timeline]);

  const logos = [
    { logo: Images.logo1, transform: "scale(1.4)" }, { logo: Images.logo2, transform: "scale(1)" },
    { logo: Images.logo3, transform: "scale(1.5)" }, { logo: Images.logo4, transform: "scale(1.1)" },
    { logo: Images.logo5, transform: "scale(1.1)" }, { logo: Images.logo6, transform: "scale(0.8)" }
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className='grid grid-cols-12 gap-x-12 items-center p-6'>
          <div className='col-span-6'>
            <div className="flex flex-col gap-8 items-start content-container">
              <h1 className='text-6xl font-semibold' ref={headingRef}>Navigating the digital landscape for success</h1>
              <p className='text-xl' ref={paraRef}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi rem, dolor vitae itaque dolorem similique neque architecto eum maiores soluta placeat consequatur omnis explicabo.</p>
              <a href="#" className='btn-primary' ref={buttonRef}>
                <span className='hero-btn'>Book a consultation</span>
              </a>
            </div>
          </div>
          <div className='col-span-6 parallax-container'>
            <img ref={imgRef} src={Images.hero} alt="hero_image" className="mx-auto" />
          </div>
        </div>
        <div className='grid grid-cols-12 gap-x-12 items-center p-6'>
          {logos.map((logo, ind) => (
            <div className='col-span-2'>
              <img src={logo.logo} alt={`logo${ind}`} className={`w-full h-[60px] object-contain`} style={{ transform: logo.transform }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero