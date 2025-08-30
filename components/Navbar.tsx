"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#b02a30] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide flex items-center">
          🍛 <span className="ml-2">Rangoli</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/menu" className="hover:text-yellow-400 transition">Menu</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
        
        </div>

        {/* CTA */}
      

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#b02a30] px-6 pb-4 space-y-4 text-lg font-medium">
          <Link href="/menu" className="block hover:text-yellow-400">Menu</Link>
          <Link href="/about" className="block hover:text-yellow-400">About</Link>

          
        </div>
      )}
    </nav>
  )
}
