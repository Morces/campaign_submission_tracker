"use client";

import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <div className="text-lg font-bold">Influencer Hub</div>
      <div className="flex items-center gap-4 md:gap-8">
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 right-0 bg-white p-4 md:hidden shadow-md`}
        >
          <a href="#" className="block py-2 hover:underline">
            Features
          </a>
          <a href="#" className="block py-2 hover:underline">
            About
          </a>
          <a href="#" className="block py-2 hover:underline">
            Contact
          </a>
          <Button className="bg-blue-500 text-white w-full py-2 rounded-md mt-4">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
