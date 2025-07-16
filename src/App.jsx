import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import RSVP from "./sections/RSVP";
import Gifts from "./sections/Gifts";
import Footer from "./sections/Footer";

import heroImage1 from "./assets/IMG_1610.jpg";

const App = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="h-screen md:flex md:overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 md:h-screen md:fixed md:left-0 md:top-0 z-0">
          <img
            src={heroImage1}
            alt="Couple - Mary and Victor"
            className="w-full h-[60vh] md:h-full object-cover"
          />
          <div className="absolute bottom-10 left-6 md:left-10 text-white text-2xl md:text-4xl font-cursive">
            <h1>Mary & Victor</h1>
            <p className="text-sm md:text-base">We're getting married!</p>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="relative z-10 w-full md:ml-auto md:w-1/2 md:h-screen overflow-y-auto bg-white"> {/**p-6 md:p-10 */}
          <Hero />
          <OurStory />
          <Gifts/>
          <RSVP/>
          <Footer/>
        </div>
      </div>
    </main>
  );
};

export default App;
