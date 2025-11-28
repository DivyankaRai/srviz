"use client";

const HowItWorks = () => (
  <section className="mt-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">HOW IT WORKS</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {["Choose Event", "Book Package", "Enjoy Experience"].map((step, i) => (
        <div key={i} className="border rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold mb-2">{step}</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
