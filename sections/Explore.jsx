'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/index';

import { TitleText, TypingText } from '../components';
import ExploreCard from '../components/ExploreCard';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The world" textStyles="text-center" />
        <TitleText title={<>Choose the world you want <br className="md:block hidden" /></>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col  gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
