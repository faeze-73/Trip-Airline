"use client";
import Image from "next/image";
import FlightSearchBox from './components/FlightSearchBox';

export default function Home() {
  return (
    <main>
      {/* Airplane Image Section with Text Overlay */}
      <div className="w-full relative h-64 md:h-110">
        <Image
          src="/airplane-wing.png"
          alt="Airplane wing in the sky"
          fill
          className="object-cover"
          priority
        />
        {/* Text Overlay */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
            Fast & Easy <br />
            Book your airline ticket with Bilito
          </h1>
        </div>
      </div>

      {/* Flight Search Box */}
      <div style={{ width: "1300px", maxWidth: "100%" }} className="relative z-20 mx-auto -mt-30">
        <FlightSearchBox />
      </div>
    </main>
  );
}
