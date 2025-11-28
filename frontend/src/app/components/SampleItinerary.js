"use client";
import Image from "next/image";

const SampleItinerary = () => (
  <section className="mt-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">SAMPLE ITINERARY</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {["Hospitality Pass","Meet & Greet","Exclusive Line Treats","City Tour"].map((txt, i) => (
        <div key={i} className="border rounded-xl p-3 shadow-sm">
          <Image
            src="https://images.pexels.com/photos/21014/pexels-photo.jpg"
            alt={txt}
            width={300}
            height={200}
            className="rounded-xl w-full h-40 object-cover"
          />
          <h3 className="mt-2 font-semibold">{txt}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default SampleItinerary;
