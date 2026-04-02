'use client';
import {useScroll} from 'framer-motion';
import {motion} from 'framer-motion';

export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(to right, #7c3aed, #ec4899)',
        zIndex: 100,
      }}
    />
  );
}
