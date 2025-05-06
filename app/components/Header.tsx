import Image from 'next/image';
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="Bilito Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-blue-700 cursor-pointer">Bilito</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">My Trips</a>
          <a href="#" className="hover:text-blue-600">Travel Insurance</a>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              More <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {/* Dropdown can be added here if needed */}
          </div>
        </nav>

        {/* Support and Login */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
            <FaPhoneAlt className="text-blue-600" />
            <span className="cursor-pointer">Support: 021-34045</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm cursor-pointer">
            Login / Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 