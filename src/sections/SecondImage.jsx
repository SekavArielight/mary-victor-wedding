import { motion } from "motion/react"

import thirdImage from "../assets/third-main.jpg";

const SecondImage = () => {
  return (
    <section className="w-full">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0 }}
        src={thirdImage}
        alt="Couple - Mary and Victor"
        className="w-full object-cover"
      />
    </section>
  );
};

export default SecondImage;
