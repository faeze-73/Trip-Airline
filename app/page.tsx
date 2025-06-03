"use client";
import Image from "next/image";
import FlightSearchBox from "./components/FlightSearchBox";
import SearchHistorySlider from "./components/SearchHistorySlider";
import PromoCardGrid from "./components/PromoCardGrid";
import FlightSelectorTabs from "./components/FlightSelectorTabs";
import FlightCard from "./components/FlightCard";
import Accordion from "./components/Accordion";
import Advantages from "./components/Advantages";
import { fetchCities } from "./services/cityApi";
import { useEffect, useState } from "react";
import flights from "./data/mockFlights";
import faqItems from "./data/faqItems";
import { City, Flight } from "./types/flight";

const FlightCardRow = ({
  flightsToShow,
  selectedCity,
}: {
  flightsToShow: Flight[];
  selectedCity: string | undefined;
}) => (
  <div className="flex flex-row gap-4 mt-8">
    {flightsToShow.map((flight, idx) => (
      <FlightCard key={idx} {...flight} selectedCity={selectedCity} />
    ))}
  </div>
);

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getCities = async () => {
      const data = await fetchCities();
      setCities(data);
    };

    getCities();
  }, []);

  // Transform API cities data into the format FlightSelectorTabs expects
  const cityItems = cities.map((city) => ({
    id: String(city.id), // Convert to string to match FlightSelectorTabs interface
    label: city.name,
  }));

  const selectedCityLabel = cityItems.find((c) => c.id === selectedCity)?.label;

  const filteredFlights = selectedCityLabel
    ? flights
        .filter(
          (flight) =>
            flight &&
            (flight.from === selectedCityLabel ||
              flight.to === selectedCityLabel)
        )
        .filter(Boolean)
    : flights.slice(0, 4);

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

      <div className="relative z-20 mx-auto -mt-30 w-[1300px] max-w-full">
        {/* Flight Search Box */}
        <div>
          <FlightSearchBox />
          <SearchHistorySlider />
          <PromoCardGrid
            cards={[
              {
                id: 1,
                image: "/kish.png",
                title: "A World of History & Art",
                buttonText: "Book Shiraz Flights",
              },
              {
                id: 2,
                image: "/turkey.png",
                title: "Desert Wonders",
                buttonText: "Book Dubai Flights",
              },
              {
                id: 3,
                image: "/promo2.jpg",
                title: "Trip to Turkey",
                buttonText: "Book Turkey Flights",
              },
              {
                id: 4,
                image: "/promo3.jpg",
                title: "Best Swimming Season",
                buttonText: "Book Kish Flights",
              },
            ]}
            cardWidth="auto"
            cardHeight={152}
          />
        </div>

        <div className="mt-12">
          <h2 className="h5 text-black mb-4">Most popular domestic flights</h2>
          {cityItems.length > 0 && (
            <FlightSelectorTabs
              items={cityItems}
              defaultType={cityItems[0].id}
              onChange={setSelectedCity}
              buttonClassName="w-auto h-10 body-lg rounded-sm"
              selectedButtonClassName="bg-primary-tint-1 text-primary border-none"
            />
          )}
        </div>

        <FlightCardRow flightsToShow={filteredFlights} selectedCity={selectedCity} />
        <h3 className="h5 text-gray-8 mt-14 mb-6">
          Frequently asked questions
        </h3>
        <Accordion items={faqItems} />
      </div>

      <Advantages className="mt-[120px]" />
    </main>
  );
}
