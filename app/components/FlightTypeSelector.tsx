import React, { useState } from 'react';
import BaseButton from './base/BaseButton';

const flightTypes = [
  { id: 'oneWay', label: 'One Way' },
  { id: 'roundTrip', label: 'Round Trip' },
  { id: 'multiCity', label: 'Multi City' },
];

type FlightTypeSelectorProps = {
  onChange?: (type: string) => void;
  defaultType?: string;
};

const FlightTypeSelector = ({ onChange, defaultType = 'oneWay' }: FlightTypeSelectorProps) => {
  const [selectedType, setSelectedType] = useState(defaultType);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    if (onChange) onChange(type);
  };

  return (
    <div className="flex gap-2 my-4">
      {flightTypes.map((type) => (
        <BaseButton
          key={type.id}
          className={`border transition-colors caption-md focus:outline-none px-4 py-2 rounded-lg border-primary-shade-1 ${
            selectedType === type.id
              ? 'bg-primary'
              : 'bg-white border-gray-300 hover:bg-blue-50'
          }`}
          textColor={selectedType === type.id ? 'text-white' : 'text-primary-shade-3'}
          onClick={() => handleSelect(type.id)}
        >
          {type.label}
        </BaseButton>
      ))}
    </div>
  );
};

export default FlightTypeSelector; 