# Gmail Setup for Booking Notifications

## 📧 Gmail Details You Need

To receive booking data directly in your Gmail, you'll need to provide:

### 1. Your Gmail Address
- The email address where you want to receive booking notifications
- Example: `yourname@gmail.com`

### 2. Gmail App Password (IMPORTANT: Not your regular password!)

**Steps to get your App Password:**

1. **Enable 2-Factor Authentication** on your Google account (if not already done)
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification

2. **Generate App Password:**
   - Still in Google Account settings → Security
   - Click "2-Step Verification" 
   - Scroll down to "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password (something like: `abcd efgh ijkl mnop`)

3. **Create .env.local file** in your PhysioSite folder with:
   ```
   # Gmail Configuration for Booking Notifications
   GMAIL_USER=nikkihotshot@gmail.com
   GMAIL_PASSWORD=bjmp xjio tktn dgim
   
   # Optional: Razorpay configuration
   RAZORPAY_KEY_ID=rzp_test_key
   RAZORPAY_KEY_SECRET=your-razorpay-secret
   ```

## 🎯 What Happens

When someone books an appointment, you'll receive a beautiful HTML email with:
- 👨‍⚕️ Doctor and service selected
- 📅 Appointment date and time  
- 👤 Patient details (name, email, phone)
- 📝 Any additional notes
- 💰 Booking amount
- 🆔 Unique booking ID
- ⏰ Timestamp when booking was made

## 🔒 Security Notes

- Never use your regular Gmail password
- Always use App Passwords for applications
- Keep your .env.local file private (it's already in .gitignore)
- The email will be sent from your own Gmail to your own Gmail

## ✅ Ready to Use

Once you provide your Gmail details, the prototype is ready to work! Just replace the placeholder values and test it out. 