"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Clock, CreditCard } from "lucide-react"
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import 'antd/dist/reset.css'

const doctors = ["Dr Shalini Jainth (PT)", "Dr Akash Jainth (PT)"]

// const services = [
//   "Sports Injury Rehabilitation - $120",
//   "Orthopedic Physical Therapy - $100",
//   "Neurological Rehabilitation - $150",
//   "Cardiopulmonary Therapy - $130",
//   "Manual Therapy - $90",
//   "Geriatric Physical Therapy - $110",
//   "Strength & Conditioning - $80",
//   "Pain Management - $140",
// ]

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
]

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>()
  const [formData, setFormData] = useState({
    doctor: "", 
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Extract price from service string
      // const servicePrice = formData.service.match(/\$(\d+)/)?.[1] || "100"
      const servicePrice = "100" // Default price since service is removed

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: "General Consultation", // Default service since field is removed
          date: date?.toISOString(),
          amount: Number.parseInt(servicePrice),
        }),
      })

      if (response.ok) {
        const data = await response.json()

        // Initialize Razorpay payment (mock implementation)
        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: "PhysioHeal Clinic",
          description: "Appointment Booking",
          order_id: data.orderId,
          handler: (response: any) => {
            setShowSuccess(true)
            setFormData({
              doctor: "",
              // service: "",
              time: "",
              name: "",
              email: "",
              phone: "",
              notes: "",
            })
            setDate(undefined)
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
        }

        // In a real implementation, you would load Razorpay SDK and create payment
        // For demo purposes, we'll just show success
        setTimeout(() => {
          setShowSuccess(true)
          setFormData({
            doctor: "",
            // service: "",
            time: "",
            name: "",
            email: "",
            phone: "",
            notes: "",
          })
          setDate(undefined)
        }, 1000)
      }
    } catch (error) {
      console.error("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-green-50 rounded-xl border border-green-200"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-2xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600 mb-6">
          Your appointment has been successfully booked! A confirmation email has been sent to you, and our team has been notified of your booking.
        </p>
        <Button onClick={() => setShowSuccess(false)}>Book Another Appointment</Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="doctor">Select Doctor</Label>
          <Select value={formData.doctor} onValueChange={(value: string) => setFormData({ ...formData, doctor: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((doctor) => (
                <SelectItem key={doctor} value={doctor}>
                  {doctor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* <div className="space-y-2">
          <Label htmlFor="service">Select Service</Label>
          <Select value={formData.service} onValueChange={(value: string) => setFormData({ ...formData, service: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2"> 
            <Label className="text-sm font-semibold text-gray-700">Select Appointment Date</Label>
          </div> 
          <DatePicker
            className="w-full h-11"
            size="large"
            value={date ? dayjs(date) : null}
            onChange={(val: Dayjs | null) => setDate(val?.toDate())}
            disabledDate={(current: Dayjs) => current < dayjs().startOf('day')}
            placeholder="Pick an appointment date"
            format="dddd, MMMM D, YYYY"
            suffixIcon={<CalendarIcon className="w-4 h-4 text-blue-600" />}
            style={{
              borderColor: date ? '#3B82F6' : '#D1D5DB',
              backgroundColor: date ? '#EFF6FF' : 'white'
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Select Time</Label>
          <Select value={formData.time} onValueChange={(value: string) => setFormData({ ...formData, time: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Choose time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {time}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Any specific concerns or requirements..."
          rows={3}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={
          isSubmitting ||
          !formData.doctor ||
          !date ||
          !formData.time ||
          !formData.name ||
          !formData.email ||
          !formData.phone
        }
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            <CreditCard className="w-4 h-4 mr-2" />
            Book Now
          </>
        )}
      </Button>
    </motion.form>
  )
}
