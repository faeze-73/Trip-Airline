"use client";
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import BaseButton from './base/BaseButton';
import Icon from './base/Icon';
import { useState } from 'react';

const Header = () => {
  const [selectedItem, setSelectedItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'trips', label: 'My Trips' },
    { id: 'insurance', label: 'Travel Insurance' },
  ];

  return (
    <header className="max-w-7xl mx-auto bg-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="Bilito Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-primary cursor-pointer">Bilito</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-7 text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`relative pb-1 ${
                selectedItem === item.id
                  ? 'text-primary'
                  : 'text-gray-7 hover:text-primary-tint-5'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem(item.id);
              }}
            >
              {item.label}
              {selectedItem === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </a>
          ))}
          <div className="relative group cursor-pointer">
            <button 
              className={`flex items-center gap-1 ${
                selectedItem === 'more'
                  ? 'text-primary'
                  : 'text-gray-7 hover:text-primary-tint-5'
              }`}
              onClick={() => setSelectedItem('more')}
            >
              More <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {selectedItem === 'more' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </div>
        </nav>

        {/* Support and Login */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
            <Icon name="phone" size={24} />
            <span className="text-gray-7 text-lg font-medium cursor-pointer">Support: 021-34045</span>
          </div>
          <BaseButton 
            className="text-sm h-10"
            children="Login / Register" 
            iconRight={<Icon name="user" size={16} />}
          />
        </div>
      </div>
    </header>
  );
};

export default Header; 