"use client";
import Image from "next/image";

const TopPackages = () => {
  const packages = [
    { title: "Wimbledon", price: "₹19,000" },
    { title: "NBA Finals", price: "₹25,000" },
    { title: "Athens 2024", price: "₹30,000" },
    { title: "Tokyo Olympics", price: "₹40,000" },
  ];

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">TOP PACKAGES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="border rounded-2xl shadow-sm hover:shadow-md transition p-3"
          >
            <Image
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
              alt={pkg.title}
              width={300}
              height={200}
              className="rounded-xl w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mt-3">{pkg.title}</h3>
            <p className="text-gray-600 text-sm mt-1">Starting: {pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPackages;
