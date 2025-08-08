import { NextRequest, NextResponse } from 'next/server'
import { whatsappService } from '@/lib/whatsapp-service'

// Force dynamic rendering for API routes
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, bookingData } = body

    if (action === 'sendConfirmation' && bookingData) {
      await whatsappService.sendBookingConfirmation(bookingData)
      return NextResponse.json({ success: true, message: 'WhatsApp confirmation sent' })
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('WhatsApp API error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send WhatsApp message' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Twilio doesn't need initialization - it's handled automatically
    return NextResponse.json({ success: true, message: 'WhatsApp service ready' })
  } catch (error) {
    console.error('WhatsApp service error:', error)
    return NextResponse.json(
      { success: false, message: 'WhatsApp service error' },
      { status: 500 }
    )
  }
} 