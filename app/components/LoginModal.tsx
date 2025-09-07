import React, { useState } from "react";
import BaseInput from "./base/BaseInput";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  confirm?: boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, confirm = true }) => {
  if (!open) return null;
  const [mobileNumber, setMobileNumber] = useState('');
  //const [isChecked, setIsChecked] = useState(false);

  const iranianMobileRegex = /^(\+98|0)?9\d{9}$/;
  const isValidMobile = iranianMobileRegex.test(mobileNumber);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg w-[600px] p-8 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.svg" alt="Bilito Logo" className="w-12 h-12 mb-2" />
          <span className="text-2xl font-bold text-primary">Trip Airline</span>
        </div>
        {/* Title */}
        {confirm ? (
          <>
            <h2 className="text-center h7 mb-2 text-gray-8">Login or Register</h2>
            <p className="text-center text-gray-7 mb-6 body-ms">
              A verification code will be sent to the mobile number you enter.
            </p>
            {/* Mobile Input */}
            <BaseInput
              type="tel"
              label="Mobile Number"
              placeholder="Please enter your mobile number"
              value={mobileNumber}
              onChange={handleMobileChange}
              className="w-full mb-4"
            />

            {/* Terms Checkbox */}
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                By logging in or registering, I agree to the{" "}
                <a href="#" className="text-primary underline">
                  Trip Airline Terms
                </a>
                .
              </label>
            </div>
            {/* Submit Button */}
            <button className="w-full bg-gray-200 text-gray-500 rounded-lg py-3 font-semibold">
              Login
            </button>
          </>
        ) : (
          <>
            <h2 className="text-center h7 mb-2 text-gray-8">Special Offers</h2>
            <p className="text-center text-gray-7 mb-6 body-ms">
              Check out our exclusive deals for members only!
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-primary mb-2">Weekend Getaway</h3>
              <p className="text-sm text-gray-700 mb-2">30% off on all domestic flights this weekend!</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                View Details
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-primary mb-2">International Deals</h3>
              <p className="text-sm text-gray-700 mb-2">Special discounts on international destinations!</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                Explore Now
              </button>
            </div>
          </>
        )}
        </div>
      </div>
  );
};

export default LoginModal;
