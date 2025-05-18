import React from "react";
import PromoCard from "./PromoCard";

interface PromoCardData {
  id: number;
  image: string;
  title: string;
  buttonText: string;
}

interface PromoCardGridProps {
  cards: PromoCardData[];
  cardWidth?: string | number;
  cardHeight?: string | number;
  gap?: number;
}

const PromoCardGrid: React.FC<PromoCardGridProps> = ({
  cards,
  cardWidth = 'auto',
  cardHeight = 152,
  gap = 6,
}) => {
  if (cards.length < 3) return null;
  return (
    <div
      className={`w-full mt-8 grid grid-cols-3 grid-rows-2 gap-${gap}`}
      style={{ minHeight: typeof cardHeight === "number" ? cardHeight * 2 + 24 : undefined }}
    >
      {/* Big cards on the left */}
      <div className="row-span-2 col-span-1">
        <PromoCard
          {...cards[0]}
          width={cardWidth}
          height={typeof cardHeight === "number" ? cardHeight * 2 + 24 : cardHeight}
        />
      </div>
      <div className="row-span-2 col-span-1">
        <PromoCard
          {...cards[1]}
          width={cardWidth}
          height={typeof cardHeight === "number" ? cardHeight * 2 + 24 : cardHeight}
        />
      </div>
      {/* Top right cards */}
      {cards[2] && (
        <div className="row-span-1 col-span-1">
          <PromoCard {...cards[1]} width={cardWidth} height={cardHeight} />
        </div>
      )}
      {cards[3] && (
        <div className="row-span-1 col-span-1">
          <PromoCard {...cards[2]} width={cardWidth} height={cardHeight} />
        </div>
      )}
    </div>
  );
};

export default PromoCardGrid; 