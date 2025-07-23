import React from "react";

const RSVP = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 h-screen flex flex-col justify-center text-center">
      <h2 className="text-4xl font-semibold mb-4">RSVP</h2>
      <p className="mb-10 text-gray-600">
        We are excited to share this special day with you. Please let us know if
        you’ll be able to attend!
      </p>

      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name*"
            className="input-style"
          />
          <input type="text" placeholder="Last Name*" className="input-style" />
        </div>
        <input
          type="email"
          placeholder="Email Address*"
          className="input-style w-full"
        />

        <div className="text-left">
          <p className="mb-2 font-medium">Number of Guests*</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["One", "Two", "Three", "Four"].map((guest) => (
              <label key={guest} className="flex items-center gap-2">
                <input type="radio" name="guests" value={guest} />
                {guest}
              </label>
            ))}
          </div>
        </div>

        <div className="text-left">
          <p className="mb-2 font-medium">Attendance*</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="attendance" value="Accept" />
              Accept with pleasure
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="attendance" value="Decline" />
              Regretfully Decline
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#5c1a00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#411200]"
        >
          Submit RSVP
        </button>
      </form>

      <p className="mt-8 text-sm text-gray-600">
        Thank you for celebrating with us! Your presence is the perfect present.
        ❤️
      </p>
    </section>
  );
};

export default RSVP;
