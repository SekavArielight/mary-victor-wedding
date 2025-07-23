import React from "react";

const Footer = () => {
  return (
    <footer className="bg-maroon text-black px-6 py-10 md:py-14 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Couple Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-cursive">Mary & Victor</h2>
          <p className="text-sm text-black">Forever starts here ❤️</p>
        </div>

        {/* Quick Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#our-story" className="hover:underline">
            Our Story
          </a>
          <a href="#rsvp" className="hover:underline">
            RSVP
          </a>
          <a href="#gifts" className="hover:underline">
            Gifts
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 text-center text-xs text-black border-t border-gray-500 pt-4">
        Built with 💖 by{" "}
        <a
          href="http://sekav.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold">God'swill Sekav Apya</span>
        </a>{" "}
        &mdash; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
