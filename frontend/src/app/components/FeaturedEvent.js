"use client";
import Image from "next/image";
import Button from "./Button";

const FeaturedEvent = () => (
  <section className="relative md:-mt-6 px-6">
    <div className="bg-white/95 backdrop-blur-md w-full md:w-4/5 mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row items-center p-6 gap-6">
      <Image
        src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
        alt="F1 Japan"
        width={420}
        height={210}
        className="rounded-2xl object-cover w-full md:w-1/2"
      />
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold">F1 JAPAN</h3>
        <p className="text-gray-600 mt-1">
          Pack • Availability • Date 18/09/2025
        </p>
        <Button className="mt-4 bg-black hover:bg-gray-900">
          Prepare My Package
        </Button>
      </div>
    </div>
  </section>
);

export default FeaturedEvent;
