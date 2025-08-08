import twilio from 'twilio'

interface BookingData {
  name: string
  email: string
  phone: string
  doctor: string
  date: string
  time: string
  notes?: string
}

export class WhatsAppService {
  private static instance: WhatsAppService
  private client: twilio.Twilio | null = null

  private constructor() {}

  public static getInstance(): WhatsAppService {
    if (!WhatsAppService.instance) {
      WhatsAppService.instance = new WhatsAppService()
    }
    return WhatsAppService.instance
  }

  private initializeTwilio(): void {
    if (this.client) return

    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER

    if (!accountSid || !authToken || !fromNumber) {
      console.error('Twilio credentials not configured')
      console.log('Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_NUMBER in your .env.local file')
      return
    }

    try {
      this.client = twilio(accountSid, authToken)
      console.log('Twilio client initialized successfully')
    } catch (error) {
      console.error('Failed to initialize Twilio client:', error)
    }
  }

  async sendBookingConfirmation(bookingData: BookingData): Promise<void> {
    this.initializeTwilio()

    if (!this.client) {
      console.log('Twilio client not available, skipping WhatsApp message')
      return
    }

    const { name, phone, doctor, date, time, notes } = bookingData
    
    // Format the date
    const appointmentDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const message = `🎉 *Booking Confirmation - Körper Heil*

Dear *${name}*,

Your appointment has been successfully booked!

📋 *Appointment Details:*
• Doctor: ${doctor}
• Date: ${appointmentDate}
• Time: ${time}
${notes ? `• Notes: ${notes}` : ''}

📍 *Location:*
Körper Heil Physiotherapy Clinic

📞 *Contact:*
+91 9910772756

⚠️ *Important Notes:*
• Please arrive 10 minutes before your appointment
• Bring any relevant medical reports
• Wear comfortable clothing for your session

If you need to reschedule or cancel, please contact us at least 24 hours in advance.

Thank you for choosing Körper Heil! 🙏

Best regards,
Körper Heil Team`

    try {
      // Clean phone number
      const cleanPhone = phone.replace(/\D/g, '')
      
      // Add country code if not present
      const phoneWithCode = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
      
      // Format for Twilio WhatsApp
      const toNumber = `whatsapp:+${phoneWithCode}`
      const fromNumber = `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`

      const result = await this.client.messages.create({
        body: message,
        from: fromNumber,
        to: toNumber
      })

      console.log(`WhatsApp confirmation sent to ${phoneWithCode}, SID: ${result.sid}`)
    } catch (error) {
      console.error('Failed to send WhatsApp message:', error)
      // Don't throw error to avoid breaking the booking flow
    }
  }
}

export const whatsappService = WhatsAppService.getInstance() 