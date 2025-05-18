"use client";
import Image from "next/image";
import FlightSearchBox from "./components/FlightSearchBox";
import SearchHistorySlider from "./components/SearchHistorySlider";
import PromoCardGrid from "./components/PromoCardGrid";
import FlightSelectorTabs from "./components/FlightSelectorTabs";
import FlightCard from "./components/FlightCard";
import Accordion from "./components/Accordion";
import Advantages from "./components/Advantages";

const flights = [
  {
    from: "Tehran",
    to: "Shiraz",
    price: 170,
    currency: "$",
    image: "https://images.unsplash.com/photo-azadi-tower.jpg",
  },
  {
    from: "Mashhad",
    to: "Isfahan",
    price: 150,
    currency: "$",
    image: "https://images.unsplash.com/photo-isfahan.jpg",
  },
  {
    from: "Tabriz",
    to: "Kish",
    price: 200,
    currency: "$",
    image: "https://images.unsplash.com/photo-kish.jpg",
  },
  {
    from: "Ahvaz",
    to: "Bandar Abbas",
    price: 180,
    currency: "$",
    image: "https://images.unsplash.com/photo-bandarabbas.jpg",
  },
];

const FlightCardRow = () => (
  <div className="flex flex-row gap-4 mt-8">
    {flights.map((flight, idx) => (
      <FlightCard key={idx} {...flight} />
    ))}
  </div>
);

const faqItems = [
  {
    title: "What is the allowed baggage for each flight?",
    description:
      "Tickets for all airlines in the world are available on the Bilito website, whether flights originating or destined for Iran or domestic flights to the most distant countries in the world.Flights from airlines such as Lufthansa, Emirates, Qatar Airways, Turkish Air, Air France, KLM, Aeroflot, Alitalia, Ukrainian, AirAsia, Pegasus and dozens of other airlines can be purchased on Billito. Tickets for international flights from domestic airlines such as Mahan, Iran Air, Qeshm Air, ATA and more are also sold on Billito.",
  },
  {
    title: "How is the ticket price for infants and children under 2 years?",
    description:
      "Infant and child ticket prices vary by airline. Usually, infants under 2 years pay a reduced fare.",
  },
  {
    title: "Can I get a refund for my flight ticket purchased online?",
    description:
      "Refund policies depend on the airline and ticket type. Please refer to your booking details for refund eligibility.",
  },
  {
    title: "What are the payment methods available?",
    description: 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

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
          <FlightSelectorTabs
            items={[
              { id: "Tehran", label: "Tehran" },
              { id: "Mashhad", label: "Mashhad" },
              { id: "Shiraz", label: "Shiraz" },
              { id: "Kish", label: "Kish" },
            ]}
            defaultType="Tehran"
            buttonClassName="w-auto h-10 body-lg rounded-sm"
            selectedButtonClassName="bg-primary-tint-1 text-primary border-none"
          />
        </div>

        <FlightCardRow />
        <h3 className="h5 text-gray-8 mt-14 mb-6">
          Frequently asked questions
        </h3>
        <Accordion items={faqItems} />
      </div>

      <Advantages className="mt-[120px]" />
      
    </main>
  );
}
