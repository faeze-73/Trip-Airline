import React, { useState } from "react";
import Icon from "./base/Icon";

const mockHistory = [
  { id: 1, label: "Shiraz to Isfahan" },
  { id: 2, label: "Shiraz to Tehran" },
  { id: 3, label: "Tehran to Shiraz" },
  { id: 4, label: "Tehran to Dubai" },
  { id: 5, label: "Tehran to Istanbul" },
  { id: 6, label: "Tehran to Istanbul" },
  { id: 7, label: "Tehran to Shiraz" },
  { id: 8, label: "Tehran to Dubai" },
  { id: 9, label: "Tehran to Istanbul" },
  { id: 10, label: "Tehran to Istanbul" },
];

const VISIBLE_COUNT = 8;

const SearchHistorySlider = () => {
  const [history, setHistory] = useState(mockHistory);
  const [startIdx, setStartIdx] = useState(0);

  const handleRemove = (id: number) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setHistory([]);
  };

  const handlePrev = () => {
    setStartIdx((idx) => Math.max(0, idx - 1));
  };

  const handleNext = () => {
    setStartIdx((idx) => Math.min(history.length - VISIBLE_COUNT, idx + 1));
  };

  const visibleHistory = history.slice(startIdx, startIdx + VISIBLE_COUNT);

  return (
    <div className="w-full flex flex-col gap-2 mt-8">
      <div className="flex items-center justify-between">
        <span className="text-body-lg text-gray-8 flex items-center gap-2">
          <Icon name="historyClock" size={24} />
          Search History
        </span>
        <button
          className="text-body-lg text-primary hover:underline"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
      <div className="flex items-center gap-2 hide-scrollbar">
        <button
          className="p-2 rounded-md w-10 h-10 border border-gray-3 bg-white disabled:opacity-50"
          onClick={handlePrev}
          disabled={startIdx === 0}
          aria-label="Previous"
        >
          <Icon name="arrowIcon" size={24} />
        </button>
        <div className="flex gap-2 flex-1 overflow-x-hidden mt-2">
          {visibleHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white h-10 caption-lg text-gray-7 border rounded-sm px-4 py-2 shadow-sm gap-2 min-w-max"
            >
              <span>{item.label}</span>
              <button
                className="ml-2 text-gray-400 hover:text-red-500"
                onClick={() => handleRemove(item.id)}
                aria-label="Remove"
              >
                <Icon name="crossSquare" />
              </button>
            </div>
          ))}
        </div>
        <button
          className="p-2 rounded-md w-10 h-10border border-gray-3 bg-white disabled:opacity-50"
          onClick={handleNext}
          disabled={startIdx + VISIBLE_COUNT >= history.length}
          aria-label="Next"
        >
           <Icon name="arrowIcon" size={24} className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SearchHistorySlider;
