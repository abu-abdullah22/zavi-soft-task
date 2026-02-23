import { Facebook, Instagram, Github as Tiktok, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 pb-12">
      {/* Wrapper for the entire layout to handle absolute positioning of logo across sections */}
      <div className="max-w-[1320px] mx-auto relative select-none">
        
        {/* Join Club Section (Upper Part) */}
        <div className="bg-primary px-8 lg:px-16 rounded-t-[40px] rounded-b-none h-auto lg:h-[340px] flex items-center overflow-hidden relative z-10 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 w-full">
            {/* Left: Text + Form */}
            <div className="max-w-2xl flex-1">
              <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-4 uppercase">
                Join our KicksPlus Club & get 15% off
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Sign up for free! Join the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="px-6 py-4 bg-transparent border border-white/20 rounded-xl placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-80 text-base"
                />
                <button className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase text-sm hover:bg-gray-900 transition-colors">
                  Submit
                </button>
              </div>
            </div>

            {/* Right: Large KICKS Logo */}
            <div className="hidden lg:block relative">
                <span className="text-[120px] font-black uppercase italic leading-none">
                  KICKS
                </span>
                <div className="absolute top-2 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-primary">
                  <span className="text-primary font-black text-xl leading-none">+</span>
                </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content (Lower Part) */}
        <div className="bg-[#232321] text-white pt-24 pb-8 px-8 lg:px-16 rounded-b-[48px] rounded-t-none h-auto lg:h-[591px] relative z-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12 relative z-10">
            
            {/* About Us */}
            <div>
              <h3 className="text-accent text-xl font-bold mb-8">About us</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-accent text-xl font-bold mb-8">Categories</h3>
              <ul className="space-y-4 text-base font-semibold">
                <li><Link href="/runners" className="hover:text-accent transition-colors">Runners</Link></li>
                <li><Link href="/sneakers" className="hover:text-accent transition-colors">Sneakers</Link></li>
                <li><Link href="/basketball" className="hover:text-accent transition-colors">Basketball</Link></li>
                <li><Link href="/outdoor" className="hover:text-accent transition-colors">Outdoor</Link></li>
                <li><Link href="/golf" className="hover:text-accent transition-colors">Golf</Link></li>
                <li><Link href="/hiking" className="hover:text-accent transition-colors">Hiking</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-accent text-xl font-bold mb-8">Company</h3>
              <ul className="space-y-4 text-base font-semibold">
                <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-accent text-xl font-bold mb-8">Follow us</h3>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"><Facebook size={20} fill="currentColor" /></Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"><Instagram size={20} /></Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"><Twitter size={20} fill="currentColor" /></Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent transition-colors"><Tiktok size={20} fill="currentColor" /></Link>
              </div>
            </div>
          </div>

          {/* Huge Logo positioned exactly at the bottom of the assembly */}
          {/* Note: top shifted slightly up from 383px to 340px per user request */}
          <div className="absolute top-[340px] left-[29px] w-[1262px] h-[313.6px] pointer-events-none z-0">
             <Image 
                src="/Logo.png" 
                alt="KICKS" 
                width={1262} 
                height={314} 
                className="w-full h-full object-contain object-bottom"
                priority
             />
          </div>
        </div>
      </div>
      
      {/* Copyright outside footer container */}
      <div className="w-full flex justify-center mt-8">
           <p className="text-[#232321] font-open-sans text-base font-normal leading-none text-center">
             © All rights reserved
           </p>
      </div>
    </footer>
  );
};

export default Footer;
