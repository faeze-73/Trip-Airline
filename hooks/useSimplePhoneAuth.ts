import { useState } from 'react';

export const useSimplePhoneAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);

  const sendOTP = async (phoneNumber: string) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Sending OTP to:', phoneNumber);
      
      // Call your API endpoint
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      const data = await response.json();
      console.log('OTP API response:', data);
      
      setOtpSent(true);
      return { success: true };
    } catch (error: any) {
      console.error('Error sending OTP:', error);
      setError(error.message || 'Failed to send OTP');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (otp: string, phoneNumber: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Invalid verification code');
      }

      const data = await response.json();
      return { success: true, user: data.user };
    } catch (error: any) {
      console.error('Error verifying OTP:', error);
      setError('Invalid verification code');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    sendOTP,
    verifyOTP,
    loading,
    error,
    otpSent
  };
};