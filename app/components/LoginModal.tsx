import React, { useState } from "react";
import BaseInput from "./base/BaseInput";
import BaseButton from "./base/BaseButton";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", ""]);

  const iranianMobileRegex = /^(\+98|0)?9\d{9}$/;
  const isValidMobile = iranianMobileRegex.test(mobileNumber);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  }

  const handleConfirmClick = () => {
    if (isValidMobile && isChecked) {
      setShowVerification(true);
    }
  }

  const handleVerificationChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 4) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  }

  const handleBackToPhone = () => {
    setShowVerification(false);
    setVerificationCode(["", "", "", "", ""]);
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
        {/* Content */}
        {!showVerification ? (
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
              error={!isValidMobile && mobileNumber ? "Please enter a valid Iranian mobile number" : ""}
              className="w-full mb-4"
            />

            {/* Terms Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                By logging in or registering, I agree to the{" "}
                <a href="#" className="text-primary underline">
                  Trip Airline Terms
                </a>
                .
              </label>
            </div>
            {/* Submit Button */}
            <BaseButton
              bgColor={isValidMobile && isChecked ? "primary" : "gray"}
              className={`w-full py-3 font-semibold ${isValidMobile && isChecked
                ? "text-white hover:bg-blue-700"
                : "text-gray-500"
                }`}
              onClick={handleConfirmClick}
            >
              Confirm and continue
            </BaseButton>
          </>
        ) : (
          <>
            <h2 className="text-center h7 mb-2 text-gray-8">Mobile Number Verification</h2>
            <p className="text-center text-gray-7 mb-6 body-ms">
              A verification code has been sent to {mobileNumber}. Please enter the code.
            </p>

            {/* Verification Code Inputs */}
            <div className="flex justify-center gap-3 mb-6">
              {verificationCode.map((digit, index) => (
                <BaseInput
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleVerificationChange(index, e.target.value)}
                  className="w-12 h-12 text-center border-2 rounded-lg text-lg font-semibold focus:outline-none]"
                />
              ))}
            </div>

            {/* Timer and Resend */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-6 mb-2">Resend code in 1:59</p>
              <button
                onClick={handleBackToPhone}
                className="text-sm text-primary underline"
              >
                Edit mobile number
              </button>
            </div>

            {/* Verify Button */}
            <BaseButton
              disabled={!verificationCode.every(digit => digit !== "")}
              bgColor={verificationCode.every(digit => digit !== "") ? "primary" : "gray"}
              className={`w-full py-3 font-semibold ${verificationCode.every(digit => digit !== "")
                ? "text-white hover:bg-blue-700"
                : "text-gray-500"
                }`}
            >
              Verify
            </BaseButton>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
