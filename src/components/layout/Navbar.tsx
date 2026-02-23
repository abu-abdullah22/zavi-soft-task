"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "New Drops 🔥", href: "/new-drops", hasDropdown: false },
    { name: "Men", href: "/men", hasDropdown: true },
    { name: "Women", href: "/women", hasDropdown: true },
  ];

  return (
    <nav className="sticky top-0 z-50 pt-4 px-4 lg:pt-8 lg:px-8">
      <div className="container-custom max-w-[1320px] mx-auto bg-white rounded-[24px] shadow-lg border border-gray-100">
        <div className="flex h-16 lg:h-24 items-center px-4 lg:px-8">
          
          {/* Left: Nav Links - Desktop */}
          <div className="hidden lg:flex flex-1 items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-foreground font-semibold text-sm hover:text-primary transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center: Logo */}
          <div className="flex flex-1 lg:flex-none justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/header_logo.png" 
                alt="Kicks Store" 
                width={128} 
                height={32} 
                className="h-6 lg:h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex flex-1 items-center justify-end gap-2 lg:gap-6">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <User size={20} />
            </button>
            <Link href="/cart" className="flex items-center justify-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#FFA52F] text-white rounded-full flex items-center justify-center text-xs font-bold transition-transform hover:scale-105">
                0
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[100%] left-4 right-4 bg-white border border-gray-100 rounded-2xl shadow-2xl mt-2 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={20} />}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
