"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          E-Shop
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500">
              Shop
            </Link>
          </li>
          <li>
          <Link href="/about" onClick={() => console.log("Navigating to About Page")}>
  About
</Link>

          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-blue-500">
            <FiShoppingCart size={22} />
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-500">
            <FiUser size={22} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t shadow-md absolute w-full left-0 top-[64px] flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
