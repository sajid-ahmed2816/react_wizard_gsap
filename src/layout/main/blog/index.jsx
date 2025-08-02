import React, { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Images from '../../../assets/images';
import Button from '../../../components/button';

const blogsData = [
  {
    image: Images.blog1,
    title: "How AI Is Reshaping Digital Strategy in 2025",
    content: "AI is no longer futuristic—it's foundational. From automated customer journeys to predictive ad targeting, explore how AI is transforming marketing, content creation, and business intelligence."
  },
  {
    image: Images.blog2,
    title: "From Curiosity to Chaos: The Evolution of Ethical Hacking",
    content: "Hacking isn’t just for the dark web anymore. Discover the rise of ethical hackers, their role in securing infrastructures, and how businesses can embrace white-hat tactics to prevent costly breaches."
  },
  {
    image: Images.blog3,
    title: "Top Cybersecurity Threats Facing Businesses in 2025",
    content: "Phishing isn’t the only threat anymore. Learn about deepfake scams, AI-powered attacks, and how zero-trust architecture is becoming essential for every business—big or small."
  },
  {
    image: Images.blog4,
    title: "Industry 5.0: Where Technology Meets Human Creativity",
    content: "As automation matures, Industry 5.0 emphasizes synergy between humans and machines. This blog explores how smart factories, real-time data, and human-centered design will redefine the next industrial revolution."
  },
  {
    image: Images.blog5,
    title: "Cloud vs. Edge: Which Hosting Solution Is Right for You?",
    content: "Speed, scale, and security—modern hosting is more than just uptime. We break down the pros and cons of cloud, edge, and hybrid hosting, and what businesses should consider before choosing a provider."
  },
  {
    image: Images.blog6,
    title: "Scaling Smart: Digital Strategies for the Modern Business",
    content: "Whether you're bootstrapped or enterprise-backed, your growth depends on the right digital moves. From SEO to data analytics, learn how smart strategy turns effort into revenue."
  },
  {
    image: Images.blog7,
    title: "Robots in the Workplace: Beyond Automation",
    content: "They’re not here to replace us—they’re here to help. Explore how collaborative robots (cobots) are increasing productivity, enhancing precision, and reducing risk across industries."
  },
  {
    image: Images.blog8,
    title: "The Future Is Hybrid: How Humans and Robots Co-Create Value",
    content: "What happens when emotional intelligence meets machine efficiency? This blog looks at the ethical, social, and economic dynamics of human-robot collaboration in work, healthcare, and daily life."
  },
  {
    image: Images.blog9,
    title: "The Role of AI in Cybersecurity: Guardian or Threat?",
    content: "AI protects, but can also be weaponized. Understand both sides of AI’s impact on security systems."
  },
  {
    image: Images.blog10,
    title: "Ethical Hacking vs. Malicious Attacks: Know the Difference",
    content: "Explore the philosophies, tools, and real-world impacts that separate white-hat from black-hat hacking."
  },
  {
    image: Images.blog11,
    title: "How Robots Are Transforming Small Business Operations",
    content: "Automation isn’t just for enterprise. Discover affordable robotics solutions driving efficiency in local businesses."
  },
  {
    image: Images.blog12,
    title: "When AI Fights AI: The New Battlefield of Cybersecurity",
    content: "As businesses adopt AI to defend against threats, cybercriminals are also using AI to create smarter attacks. Dive into this arms race between defensive and offensive algorithms—and what it means for the future of digital protection."
  },
];

gsap.registerPlugin(ScrollTrigger);

function Blogs() {
  const horizontalWrapperRef = useRef(null);
  const horizontalRef = useRef(null);

  useGSAP(() => {
    const getScrollDistance = () =>
      horizontalRef.current.scrollWidth - window.innerWidth;

    gsap.to(horizontalRef.current, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalWrapperRef.current,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section id="blog" className="overflow-hidden bg-white">
      <div ref={horizontalWrapperRef} className="overflow-hidden">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-2">
              <h2 className="bg-[var(--accent)] text-[40px] text-center font-semibold p-1 rounded-lg">Blogs</h2>
            </div>
            <div className="col-span-7">
              <p>Insights, Trends & Tips from Our Experts.<br />Stay up-to-date with the latest in digital marketing.</p>
            </div>
          </div>
        </div>
        <div ref={horizontalRef} className="container mx-auto flex gap-x-12 p-6">
          {blogsData.map((blog, ind) => (
            <div key={ind} style={{ flex: "0 0 calc(100% / 3.2)" }}>
              <div style={{ background: `url(${blog.image}) center/cover no-repeat`, height: "420px" }} className="rounded-lg relative p-4 flex flex-col justify-end">
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#14141480] rounded-lg' />
                <h3 className="relative text-white text-2xl font-semibold">{blog.title}</h3>
                <p className="relative mt-2 text-white">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <Button title={"See More Blogs"} />
        </div>
      </div>
    </section>
  )
}

export default Blogs;