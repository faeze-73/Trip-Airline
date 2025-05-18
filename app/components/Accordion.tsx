import React, { useState } from "react";
import Icon from "./base/Icon";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full bg-white rounded-xs shadow">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-gray-2 last:border-b-0">
          <button
            className={`w-full text-right px-4 py-3 focus:outline-none flex justify-between items-center ${
              openIndex === idx
                ? "text-primary text-base font-semibold"
                : "text-gray-8 text-lg font-semibold"
            }`}
            onClick={() => handleToggle(idx)}
          >
            <span>{item.title}</span>
            <span className="ml-2">
              {openIndex === idx ? (
                <Icon name="arrowIcon" size={20} className="rotate-90"  color="#1D91CC" />
              ) : (
                <Icon name="arrowIcon" size={20} className="rotate-90" />
              )}
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-4 text-gray-6 body-md animate-fade-in">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
