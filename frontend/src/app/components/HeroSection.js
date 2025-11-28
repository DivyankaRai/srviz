"use client";
import Image from "next/image";
import Button from "./Button";

const HeroSection = () => (
  <section className="relative w-full h-[95vh]">
    <Image
      src="https://images.pexels.com/photos/14106696/pexels-photo-14106696.jpeg"
      alt="Hero"
      fill
      className="object-cover"
    />
    <div className="absolute w-full top-0 left-0 flex items-center justify-between px-8 py-6 z-20">
      <h1 className="text-white text-2xl font-bold tracking-wide">SPORTS</h1>
      <nav className="hidden md:flex gap-8 text-white font-medium text-sm">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Destinations</a>
        <a href="#">How It Works</a>
        <a href="#">Contacts</a>
      </nav>
      <Button>Plan My Trip</Button>
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
      <h1 className="text-white font-bold text-3xl md:text-6xl leading-tight max-w-3xl drop-shadow-xl">
        SPORTS TRAVEL PACKAGES FOR GLOBAL EVENTS
      </h1>
      <p className="mt-4 text-white text-sm md:text-base drop-shadow-md max-w-xl">
        Flights • Hotels • Hospitality • Official Tickets • Transfers
      </p>
      <Button className="mt-6 text-lg">Plan My Trip</Button>
    </div>
  </section>
);

export default HeroSection;
