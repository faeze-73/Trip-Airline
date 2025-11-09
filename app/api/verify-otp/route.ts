import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { otp, phoneNumber } = await request.json();

        if (!otp || !phoneNumber) {
            return NextResponse.json(
                { error: 'OTP and phone number are required' },
                { status: 400 }
            );
        }

        // Check stored OTP
        const storedData = global.otpStore?.[phoneNumber];

        if (!storedData) {
            return NextResponse.json(
                { error: 'No OTP found for this phone number' },
                { status: 400 }
            );
        }

        // Check if OTP expired
        if (Date.now() > storedData.expires) {
            delete global.otpStore[phoneNumber];
            return NextResponse.json(
                { error: 'OTP has expired' },
                { status: 400 }
            );
        }

        // Verify OTP
        if (storedData.otp === otp) {
            // Clean up used OTP
            delete global.otpStore[phoneNumber];

            return NextResponse.json({
                success: true,
                user: {
                    id: Date.now().toString(),
                    phoneNumber: phoneNumber,
                    verified: true
                }
            });
        } else {
            return NextResponse.json(
                { error: 'Invalid verification code' },
                { status: 400 }
            );
        }

    } catch (error) {
        console.error('Error verifying OTP:', error);
        return NextResponse.json(
            { error: 'Failed to verify OTP' },
            { status: 500 }
        );
    }
}