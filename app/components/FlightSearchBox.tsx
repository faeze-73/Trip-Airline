import { useState } from "react";
import BaseInput from "../components/base/BaseInput";
import Icon from "../components/base/Icon";
import FlightTypeSelector from "./FlightTypeSelector";
import BaseButton from "../components/base/BaseButton";
import SearchNormal from "./icons/SearchNormal";

const FlightSearchBox = () => {
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
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          className={`relative flex items-center min-h-[46px] gap-2 px-5 py-2 border transition-all duration-200 ${
            flightType === "international"
              ? "h6 bg-white text-primary border-0 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-full"
              : "body-md bg-white text-gray-5 border-0"
          }`}
          onClick={() => setFlightType("international")}
        >
          <Icon
            name="airPlane"
            size={flightType === "international" ? 24 : 16}
          />
          International Flight
        </button>
        <button
          className={`relative flex items-center min-h-[46px] gap-2 px-5 py-2 border transition-all duration-200 ${
            flightType === "domestic"
              ? "h6 bg-white text-primary border-0 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-full"
              : "body-md bg-white text-gray-5 border-0"
          }`}
          onClick={() => setFlightType("domestic")}
        >
          <Icon name="airPlane" size={16} />
          Domestic Flight
        </button>
      </div>

      <FlightTypeSelector />
      <div className="flex flex-wrap gap-4">
        <BaseInput
          value={origin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOrigin(e.target.value)
          }
          placeholder="Origin"
        />
        <button
          type="button"
          onClick={handleSwap}
          className="rounded-full transition"
          aria-label="Swap origin and destination"
        >
          <Icon name="exChange" size={16} />
        </button>
        <BaseInput
          value={destination}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDestination(e.target.value)
          }
          placeholder="Destination"
        />
        <BaseInput placeholder="Departure Date" />
        <BaseInput placeholder="Return Date" />
        <BaseInput placeholder="Passengers" />
        <BaseInput placeholder="Class" />
        <BaseButton
          children="search"
          className="button-sm w-[160px]"
          iconLeft={<SearchNormal width="16" height="16" />}
        />
      </div>
    </div>
  );
};

export default FlightSearchBox;

