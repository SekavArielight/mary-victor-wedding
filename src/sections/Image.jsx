import { motion } from "motion/react"

import secondImage from "../assets/second-main.jpg";

const Image = () => {
  return (
    <section className="w-full">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0 }}
        src={secondImage}
        alt="Couple - Mary and Victor"
        className="w-full object-cover"
      />
    </section>
  );
};

export default Image;
