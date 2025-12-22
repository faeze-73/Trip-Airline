import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Generate a random 5-digit OTP
    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    console.log(`OTP for ${phoneNumber}: ${otp}`);
    
    // For development, we'll store it in a simple way
    // In production, use Redis or database
    global.otpStore = global.otpStore || {};
    global.otpStore[phoneNumber] = {
      otp,
      timestamp: Date.now(),
      expires: Date.now() + 5 * 60 * 1000 // 5 minutes
    };

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      // In development, return the OTP for testing
      ...(process.env.NODE_ENV === 'development' && { otp })
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}