import React from "react";
import Image from "next/image";

const advantages = [
  {
    image: "/card.png",
    title: "Lowest Ticket Price",
  },
  {
    image: "/internet.png",
    title: "Online Services",
  },
  {
    image: "/devices.png",
    title: "24/7 Support",
  },
  {
    image: "/support.png",
    title: "Easy Access",
  },
];

interface AdvantagesProps {
  className?: string;
}

const Advantages: React.FC<AdvantagesProps> = ({ className = "" }) => (
  <section className={`w-full bg-primary-tint-1 h-[219px] ${className}`}>
    <div className="max-w-5xl mx-auto h-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
      {advantages.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center flex-1 h-full justify-center">
          <div className="flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <div className="h5 text-primary-shade-4 mt-8">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages;
