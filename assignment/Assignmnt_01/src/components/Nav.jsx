import { useState } from 'react'
import companyLogo from '../assets/hero-img/company-logo.png'

// Navigation header component
export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={companyLogo} alt="Mendleson Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-black z-30">
          <a className="cursor-pointer hover:text-black transition text-lg px-4 font-roboto font-normal">About Us</a>
          <a className="cursor-pointer hover:text-black transition text-lg px-4 font-roboto font-normal">Services</a>
          <a className="cursor-pointer hover:text-black transition text-lg px-4 font-roboto font-normal">Team</a>
          <a className="cursor-pointer hover:text-black transition text-lg px-4 font-roboto font-normal">Clients</a>
          <a className="cursor-pointer hover:text-black transition text-lg px-4 font-roboto font-normal">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-3 py-2 text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col bg-white shadow-lg">
          <a className="cursor-pointer hover:bg-gray-100 transition text-lg px-6 py-4 font-roboto font-normal border-b border-gray-200">
            About Us
          </a>
          <a className="cursor-pointer hover:bg-gray-100 transition text-lg px-6 py-4 font-roboto font-normal border-b border-gray-200">
            Services
          </a>
          <a className="cursor-pointer hover:bg-gray-100 transition text-lg px-6 py-4 font-roboto font-normal border-b border-gray-200">
            Team
          </a>
          <a className="cursor-pointer hover:bg-gray-100 transition text-lg px-6 py-4 font-roboto font-normal border-b border-gray-200">
            Clients
          </a>
          <a className="cursor-pointer hover:bg-gray-100 transition text-lg px-6 py-4 font-roboto font-normal">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}