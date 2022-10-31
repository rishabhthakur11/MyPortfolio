import React from "react";
import Image from "next/image";
import bannerPhoto from "../assets/rishabh.jpeg";
import { motion } from "framer-motion";

interface Props {}

const About = (props: Props) => {
  return (
    <div className="flex flex-col text-center md:text-left relative h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className="xl:mt-24 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
          alt=""
          src={bannerPhoto}
          width={750}
          height={950}
          priority
        />
      </motion.div>
    </div>
  );
};

export default About;
