import React from 'react'

const gifts = [
  { id: 1, name: "Dinner Set", price: 20000 },
  { id: 2, name: "Blender", price: 15000 },
  { id: 3, name: "Bed Sheets", price: 10000 },
];


const Gifts = () => {
  return (
    <section id='gifts' className="bg-white h-screen py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-cursive mb-8">Send a Gift</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {gifts.map(gift => (
          <div key={gift.id} className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{gift.name}</h3>
            <p className="mb-4">₦{gift.price.toLocaleString()}</p>
            <button className="bg-maroon text-white py-2 px-4 rounded hover:bg-opacity-90">
              Proceed to Checkout
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gifts