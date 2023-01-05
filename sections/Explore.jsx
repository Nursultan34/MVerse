'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';

import { TypingText } from '../components/ExploreCard';
import { staggerContainer } from '../utils/motion';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The world" />
    </motion.div>
  </section>
);

export default Explore;
