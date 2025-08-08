# Twilio WhatsApp Setup Guide

## 🔧 Setup Steps:

### 1. **Create Twilio Account**
- Go to [twilio.com](https://www.twilio.com)
- Sign up for a free account
- Get your Account SID and Auth Token from the dashboard

### 2. **Enable WhatsApp Sandbox**
- In Twilio Console, go to Messaging → Try it out → Send a WhatsApp message
- Follow the instructions to join your WhatsApp sandbox
- Note your sandbox number (format: +14155238886)

### 3. **Environment Variables**
Add these to your `.env.local` file:

```env
# Twilio Credentials
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=+14155238886
```

### 4. **Test WhatsApp**
- Join the Twilio WhatsApp sandbox by sending the provided code to the sandbox number
- Test the booking form to send WhatsApp messages

## 📱 WhatsApp Message Format:
- **From**: Your Twilio WhatsApp number
- **To**: Customer's phone number (automatically formatted)
- **Content**: Professional booking confirmation with appointment details

## ⚡ Benefits of Twilio:
- ✅ **Reliable**: No QR code scanning needed
- ✅ **Professional**: Enterprise-grade service
- ✅ **Scalable**: Handles high message volumes
- ✅ **Secure**: Encrypted messaging
- ✅ **Analytics**: Message delivery tracking

## 🔍 Troubleshooting:
- Ensure all environment variables are set
- Check Twilio console for message status
- Verify phone number format (should include country code)
- Check Twilio account balance for message credits 