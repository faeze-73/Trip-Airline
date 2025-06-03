import React from "react";
import Icon from "./base/Icon";

interface FlightCardProps {
  from: string;
  to: string;
  price: number;
  currency: string;
  image: string;
  selectedCity: string | undefined; 
}

const FlightCard: React.FC<FlightCardProps> = ({
  from,
  to,
  price,
  currency,
  image,
  selectedCity,
}) => (
  <div className="flex flex-1 items-center border border-gray-2 rounded-sm bg-white h-22">
    <img
      src={image}
      alt={`${to} city`}
      className="w-20 h-full object-cover rounded-md ml-4"
    />
    <div className="flex-1 flex flex-col">
      {/* Top Section */}
      <div className="flex-1 flex items-center px-2 body-md">
      <span className={from === selectedCity ? "text-primary" : "text-gray-9"}>{from}</span>
        <Icon name="airPlane" size={16} className="rotate-180 mx-2" />
        <span className={to === selectedCity ? "text-primary" : "text-gray-9"}>{to}</span>
      </div>
      {/* Divider */}
      <div className="h-px bg-gray-200 w-full" />
      {/* Bottom Section */}
      <div className="flex-1 flex items-center px-2">
        <span className="caption-md text-gray-6 text-sm mr-2">Starting from:</span>
        <span className="body-md text-gray-9">
          {price.toLocaleString()} 
          <span className="caption-md">{currency}</span>
        </span>
      </div>
    </div>
  </div>
);

export default FlightCard;
