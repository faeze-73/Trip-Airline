import React, { useState } from 'react';

interface SelectorItem {
  id: string;
  label: string;
}

interface FlightSelectorTabsProps {
  items: SelectorItem[];
  title?: string;
  defaultType?: string;
  onChange?: (type: string) => void;
  buttonClassName?: string;
  selectedButtonClassName?: string;
}

const FlightSelectorTabs : React.FC<FlightSelectorTabsProps> = ({
  items,
  defaultType,
  onChange,
  buttonClassName = '',
  selectedButtonClassName = '',
}) => {
  const [selectedType, setSelectedType] = useState(defaultType || items[0]?.id);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    if (onChange) onChange(type);
  };

  return (
    <div>
      <div className="flex gap-2">
        {items.map((item) => {
          const isSelected = selectedType === item.id;
          return (
            <button
              key={item.id}
              className={`border px-4 py-2 ${buttonClassName} ${isSelected ? `${selectedButtonClassName}` : 'bg-white text-primary'}`}
              onClick={() => handleSelect(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FlightSelectorTabs; 