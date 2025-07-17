import { motion } from "motion/react"

import secondImage from "../assets/second-main.jpg";

const Image = () => {
  return (
    <section className="w-full">
      <motion.img
        initial="hidden"
  whileInView="visible"
        src={secondImage}
        alt="Couple - Mary and Victor"
        className="w-full object-cover"
      />
    </section>
  );
};

export default Image;
