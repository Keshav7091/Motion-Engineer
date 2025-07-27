// src/components/AnimatedCounter.jsx
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ end, icon, name }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // only trigger once
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className='text-center'>
      <span className='block text-4xl md:text-5xl font-bold text-[#eefb7b] mb-1 font-montserrat'>
        {inView ? <CountUp start={0} end={end} duration={2} /> : 0} {icon}
      </span>
      <span className='text-gray-light text-sm uppercase tracking-wider font-roboto'>
        {name}
      </span>
    </div>
  );
};

export default AnimatedCounter;
