import React, { useRef, useState } from 'react';
import { Facebook, Instagram, Twitter } from '../../assets/icons';

const navs = [
  { name: "About us", id: "about_us" },
  { name: "Services", id: "services" },
  { name: "Use Cases", id: "use_cases" },
  { name: "Pricing", id: "pricing" },
  { name: "Blog", id: "blog" },
];

const socialLinks = [<Twitter className='w-8 h-8' />, <Facebook className='w-8 h-8' />, <Instagram className='w-8 h-8' />];

function Footer() {
  const navRefs = useRef([]);
  const [isHover, setIsHover] = useState(null);

  return (
    <footer className='bg-[var(--black)]'>
      <div className="flex items-center flex-col px-6 py-8 container mx-auto p-6 gap-y-8">
        <h2 className='text-3xl font-semibold flex items-center gap-1 text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="#FFFFFF"><path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path></svg>
          WizardZ
        </h2>
        <nav>
          <ul className='flex items-center gap-x-14 navs'>
            {navs.map((nav, ind) => (
              <li
                key={ind}
                className='text-[20px] text-white flex flex-col'
                ref={(el) => (navRefs.current[ind] = el)}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center justify-between w-full'>
          <span className='text-white w-[280px]'>Developed By Sajid.Dev</span>
          <div className='flex items-center justify-center gap-x-4 w-[280px]'>
            {socialLinks.map((icon, ind) => (
              <a
                key={ind}
                href="#"
                onMouseEnter={() => setIsHover(ind)}
                onMouseLeave={() => setIsHover(null)}
              >
                {React.cloneElement(icon, { hover: isHover })}
              </a>
            ))}
          </div>
          <span className='text-white w-[280px]'>© {new Date().getFullYear()} - WizardZ. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer