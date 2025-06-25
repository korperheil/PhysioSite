import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { doctor, service, date, time, name, email, phone, amount } = body

    // Validate required fields
    if (!doctor || !service || !date || !time || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create Razorpay order
    const razorpayOrder = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `booking_${Date.now()}`,
      notes: {
        doctor,
        service,
        date,
        time,
        name,
        email,
        phone,
      },
    }

    // In a real implementation, you would:
    // 1. Create order with Razorpay API
    // 2. Save booking details to database
    // 3. Send confirmation email

    // Mock response for demo
    const mockOrderId = `order_${Date.now()}`

    return NextResponse.json({
      success: true,
      orderId: mockOrderId,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      key: process.env.RAZORPAY_KEY_ID || "rzp_test_key",
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
