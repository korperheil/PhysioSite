"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

interface HomeCareModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HomeCareModal({ isOpen, onClose }: HomeCareModalProps) {
  const handleCall = () => {
    window.location.href = "tel:+91 9910772756"
    onClose()
  }

  const handleWhatsApp = () => {
    const phoneNumber = "919910772756" // WhatsApp format without + and spaces
    const message = "Hi, I'm interested in professional home care services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-500" />
            Professional Home Care
          </DialogTitle>
          <DialogDescription>
            Contact us for professional home care services. Our team is ready to assist you.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us
          </Button>
          <Button 
            onClick={handleCall}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call +91 9910772756
          </Button>
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}