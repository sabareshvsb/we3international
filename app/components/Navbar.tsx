"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="WE3 INTERNATIONAL"
            width={60}
            height={60}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              display: "block",
            }}
          />

          <div>
            <h1 className="text-xl font-bold text-green-700">
              WE3 INTERNATIONAL
            </h1>

            <p className="text-xs text-gray-500">
              Exporting Quality, Delivering Trust
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
          <Link href="#contact">Contact</Link>

          <a
            href="https://wa.me/919003789441"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="#about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="#products" onClick={() => setOpen(false)}>
            Products
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a
            href="https://wa.me/919003789441"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 text-white text-center py-2 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}