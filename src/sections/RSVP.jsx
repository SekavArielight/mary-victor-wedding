import React from "react";

const RSVP = () => {
  return (
    <section id="rsvp" className="bg-gray-50 h-screen py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-cursive mb-6">RSVP</h2>
      <form className="max-w-md mx-auto space-y-4 text-left">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded"
          required
        />
        <select className="w-full p-3 border rounded">
          <option>Will you attend?</option>
          <option>Yes, with joy</option>
          <option>No, sending love</option>
        </select>
        <textarea
          placeholder="Leave a message..."
          rows="3"
          className="w-full p-3 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-maroon text-white py-3 px-6 rounded hover:bg-opacity-90"
        >
          Submit RSVP
        </button>
      </form>
    </section>
  );
};

export default RSVP;
