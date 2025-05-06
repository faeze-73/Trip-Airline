"use client";
import Image from "next/image";
import { FaPlaneDeparture, FaHome, FaExchangeAlt } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [flightType, setFlightType] = useState<"international" | "domestic">(
    "international"
  );
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  return (
    <main>
      {/* Airplane Image Section with Text Overlay */}
      <div className="w-full relative h-64 md:h-110">
        <Image
          src="/airplane-wing.png" // Make sure the image is in public/hero.jpg
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
      <div className="relative z-20 max-w-7xl mx-auto -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex gap-2">
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border transition-all duration-200 shadow-sm
                ${
                  flightType === "international"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              onClick={() => setFlightType("international")}
            >
              <FaPlaneDeparture className="text-lg" />
              International Flight
            </button>
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border transition-all duration-200 shadow-sm
                ${
                  flightType === "domestic"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              onClick={() => setFlightType("domestic")}
            >
              <FaHome className="text-lg" />
              Domestic Flight
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <input className="flex-1 min-w-[120px] p-3 border rounded-lg text-" placeholder="Origin" />
            <button
              type="button"
              onClick={handleSwap}
              className="rounded-full transition"
              aria-label="Swap origin and destination"
            >
              <FaExchangeAlt className="text-gray-500 hover:text-gray-700 " />
            </button>
            <input className="flex-1 min-w-[120px] p-3 border rounded-lg text-sm" placeholder="Destination" />
            <input className="flex-1 min-w-[120px] p-3 border rounded-lg text-sm" placeholder="Departure Date" />
            <input className="flex-1 min-w-[120px] p-3 border rounded-lg text-sm" placeholder="Return Date" />
            <input className="flex-1 min-w-[120px] p-3 border rounded-lg text-sm" placeholder="Passengers" />
            <input className="flex-1 min-w-[120px] p-3 border rounded-lg text-sm" placeholder="Class" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm">Search</button>
          </div>
            {/*<input
              className="flex-1 p-3 border rounded-lg text-right"
              placeholder="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSwap}
              className="mx-1 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
              aria-label="Swap origin and destination"
            >
              <FaExchangeAlt className="text-gray-500" />
            </button>
            <input
              className="flex-1 p-3 border rounded-lg text-right"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <input
            className="flex-1 min-w-[120px] p-3 border rounded-lg"
            placeholder="Departure Date"
          />
          <input
            className="flex-1 min-w-[120px] p-3 border rounded-lg"
            placeholder="Return Date"
          />
          <input
            className="flex-1 min-w-[120px] p-3 border rounded-lg"
            placeholder="Passengers"
          />
          <input
            className="flex-1 min-w-[120px] p-3 border rounded-lg"
            placeholder="Class"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Search
          </button>*/}
        </div>
      </div>
    </main>
  );
}
