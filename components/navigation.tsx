"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl"></span>
            </div>
            <span className="text-xl font-bold text-gray-900">Körper Heil</span>
          </Link> */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Körper Heil Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Körper Heil</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  pathname === item.href ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a href="tel:+91 9910772756" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+91 9910772756</span>
              </a>
              <Button asChild>
                <Link href="/booking">Book Appointment</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    pathname === item.href ? "text-blue-600 font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+91 9910772756"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9910772756</span>
                </a>
                <Button asChild className="w-full">
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
