// components/Header.tsx
"use client"; // <--- Add this line at the very top

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#", isBold: true },
    { label: "About us", href: "#" },
    { label: "Learn more", href: "#" },
    { label: "Contact", href: "#" },
    { label: "More", href: "#" },
  ];

  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-[5rem]">
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center font-semibold text-lg text-gray-900"
          >
            <Image
              src="/TrLogo.png"
              alt="Typeres Logo"
              width={32}
              height={32}
              className="mr-2"
              priority
            />
            Typeres
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(({ label, href, isBold }) => (
              <Link
                key={label}
                href={href}
                className={`text-gray-600 hover:text-gray-900 ${
                  isBold ? "font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Dashboard Button (Desktop) */}
          <Button
            variant="outline"
            className="hidden md:inline-flex text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Dashboard
          </Button>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center py-8">
          <div className="w-full flex justify-end px-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-8">
            {navLinks.map(({ label, href, isBold }) => (
              <Link
                key={label}
                href={href}
                className={`text-gray-700 text-xl hover:text-gray-900 ${
                  isBold ? "font-semibold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
