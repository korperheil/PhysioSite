import { type NextRequest, NextResponse } from "next/server"
import nodemailer from 'nodemailer'

// Email configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

const sendBookingEmail = async (bookingData: any) => {
  // Check if email credentials are configured
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error('❌ Gmail credentials not configured in environment variables')
    console.log('Please set GMAIL_USER and GMAIL_PASSWORD in your .env.local file')
    return false
  }

  const transporter = createEmailTransporter()
  
  const emailContent = `
    <h2>🏥 New Booking Received - korper heil</h2>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
      <h3 style="color: #2563eb; margin-bottom: 20px;">📋 Booking Details</h3>
      
      <div style="background-color: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
        <h4 style="color: #1f2937; margin-bottom: 10px;">👨‍⚕️ Appointment Information</h4>
        <p><strong>Doctor:</strong> ${bookingData.doctor}</p>
        <p><strong>Date:</strong> ${new Date(bookingData.date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
        <p><strong>Time:</strong> ${bookingData.time}</p>
        <p><strong>Amount:</strong> $${bookingData.amount}</p>
      </div>
      
      <div style="background-color: white; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
        <h4 style="color: #1f2937; margin-bottom: 10px;">👤 Patient Information</h4>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
      </div>
      
      ${bookingData.notes ? `
      <div style="background-color: white; padding: 15px; border-radius: 6px;">
        <h4 style="color: #1f2937; margin-bottom: 10px;">📝 Additional Notes</h4>
        <p>${bookingData.notes}</p>
      </div>
      ` : ''}
      
      <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px;">
          📅 Booking received on: ${new Date().toLocaleString()}<br>
          🆔 Booking ID: booking_${Date.now()}
        </p>
      </div>
    </div>
  `

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to your own email
    subject: `🏥 New Booking: ${bookingData.name} - ${bookingData.service}`,
    html: emailContent
  }

  try {
    console.log('Attempting to send email to:', mailOptions.to)
    console.log('Email subject:', mailOptions.subject)
    
    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Booking email sent successfully:', result.messageId)
    return true
  } catch (error: any) {
    console.error('❌ Error sending booking email:', error)
    console.error('Error details:', {
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode
    })
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { doctor, service, date, time, name, email, phone, notes, amount } = body

    // Validate required fields
    if (!doctor || !service || !date || !time || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare booking data
    const bookingData = {
      doctor,
      service,
      date,
      time,
      name,
      email,
      phone,
      notes: notes || '',
      amount
    }

    // Send email with booking details
    const emailSent = await sendBookingEmail(bookingData)
    
    if (!emailSent) {
      console.warn('Email sending failed, but continuing with booking process')
    }

    // Create Razorpay order
    const razorpayOrder = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `booking_${Date.now()}`,
      notes: {
        doctor, 
        date,
        time,
        name,
        email,
        phone,
      },
    }

    // Mock response for demo
    const mockOrderId = `order_${Date.now()}`

    return NextResponse.json({
      success: true,
      orderId: mockOrderId,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      key: process.env.RAZORPAY_KEY_ID || "rzp_test_key",
      emailSent: emailSent
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
