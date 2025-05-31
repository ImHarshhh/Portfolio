function Testimonials() {
  const data = [
    {
      text: "Amazing experience! Highly recommend GlowUp Salon.",
      author: "Priya S.",
    },
    {
      text: "Professional staff and great ambiance. Will visit again.",
      author: "Anjali M.",
    },
  ];

  return (
    <section className="py-16 bg-pink-100" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-gray-700 italic mb-4">"{item.text}"</p>
              <h4 className="text-pink-600 font-semibold">- {item.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
