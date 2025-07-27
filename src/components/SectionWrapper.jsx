// src/components/SectionWrapper.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionWrapper = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;
  const bgColorStyle = isEven
    ? { backgroundColor: '#0a0a0a', color: 'white' }
    : { backgroundColor: 'black', color: 'white' };

  return (
    <section ref={ref} style={bgColorStyle} className="w-full">
      <motion.div
        className="mx-auto px-4 md:px-20 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
