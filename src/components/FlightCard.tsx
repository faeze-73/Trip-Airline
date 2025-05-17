import React from "react";

interface FlightCardProps {
  from: string;
  to: string;
  price: number;
  currency: string;
  image: string;
}

const FlightCard: React.FC<FlightCardProps> = ({ from, to, price, currency, image }) => (
  <div className="flex items-center border border-gray-200 rounded-lg p-4 bg-white max-w-sm shadow">
    <div className="flex-1">
      <div className="flex items-center mb-2">
        <span className="text-blue-600 font-semibold">{from}</span>
        <span className="mx-2 text-lg">✈️</span>
        <span className="font-semibold">{to}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <span className="mr-2">Starting from:</span>
        <span className="text-black font-bold text-base">
          {price.toLocaleString()} {currency}
        </span>
      </div>
    </div>
    <img
      src={image}
      alt={`${to} city`}
      className="w-20 h-16 object-cover rounded-md ml-4"
    />
  </div>
);

export default FlightCard; 