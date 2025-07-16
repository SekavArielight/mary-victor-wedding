export default function WeddingLayout() {
  return (
    <div className="h-screen md:flex md:overflow-hidden">
      {/* Image Section */}
      <div className="w-full md:w-1/2 md:h-screen md:fixed md:left-0 md:top-0 z-0">
        <img
          src="/your-image.jpg"
          alt="Couple"
          className="w-full h-[60vh] md:h-full object-cover"
        />
        <div className="absolute bottom-10 left-6 md:left-10 text-white text-2xl md:text-4xl font-cursive">
          <h1>Chika & Chinue</h1>
          <p className="text-sm md:text-base">We're getting married!</p>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="relative z-10 w-full md:ml-auto md:w-1/2 md:h-screen overflow-y-auto p-6 md:p-10 bg-white">
        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            The first time I saw him...
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Event Location</h2>
          <div className="border border-purple-400 p-4 rounded-xl">
            <span className="text-sm font-semibold bg-purple-600 text-white px-2 py-1 rounded-full mb-2 inline-block">
              Event Location
            </span>
            <p className="text-gray-800">Makurdi 970101, Benue, Nigeria</p>
          </div>
        </section>
      </div>
    </div>
  );
}
