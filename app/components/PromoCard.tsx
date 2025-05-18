import React from "react";

interface PromoCardProps {
  image: string;
  title: string;
  buttonText: string;
  width?: string | number;
  height?: string | number;
}

const PromoCard: React.FC<PromoCardProps> = ({
  image,
  title,
  buttonText,
  width = 'auto',
  height = 210,
}) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
      style={{ width, height }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
      <div className="relative z-20 flex flex-col justify-end h-full p-4 gap-2">
        <h3 className="text-white header-5 drop-shadow-lg">
          {title}
        </h3>
        <div className="flex justify-start">
          <button className="border border-white text-white px-4 py-2 rounded-lg button-sm hover:bg-white/40 transition-all">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;