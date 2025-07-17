import Aos from "aos";
import "aos/dist/aos.css"

import secondImage from "../assets/second-main.jpg";
import { useEffect } from "react";

const Test = () => {
    useEffect(() => {
        Aos.init();
    }, [])

  return (
    <section className="w-full" >
       <div className="" data-aos = "fade-up">
         <img
          src={secondImage}
          alt="Couple - Mary and Victor"
          className="w-full object-cover"
        />
       </div>
    </section>
  );
};

export default Test;
