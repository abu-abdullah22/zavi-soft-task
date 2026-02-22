import { Facebook, Instagram, Github as Tiktok, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12">
      {/* Join Club Section */}
      <div className="bg-primary py-12 px-8 lg:px-16 rounded-[32px] container-custom mb-0 overflow-hidden relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left: Text + Form */}
          <div className="max-w-lg z-10">
            <h2 className="text-3xl lg:text-[40px] font-black text-white leading-tight mb-3 uppercase">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-white/70 text-sm mb-6">
              Sign up for free! Join the community.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-5 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent w-64 text-sm"
              />
              <button className="bg-foreground text-white px-6 py-3 rounded-lg font-bold uppercase text-xs hover:bg-black transition-colors tracking-wide">
                Submit
              </button>
            </div>
          </div>

          {/* Right: Large KICKS Logo */}
          <div className="hidden lg:block z-10">
            <span className="text-[100px] font-black uppercase italic text-white leading-none relative">
              KICKS<span className="text-accent text-2xl absolute -top-1 -right-4">+</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-foreground text-white pt-16 pb-8 px-8 lg:px-16 rounded-t-[32px] -mt-6 relative z-0">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 pt-4">
          
          {/* About Us */}
          <div>
            <h3 className="text-accent text-base font-bold mb-5">About us</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-accent text-base font-bold mb-5">Categories</h3>
            <ul className="space-y-3 text-white text-sm font-medium">
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
            <h3 className="text-accent text-base font-bold mb-5">Company</h3>
            <ul className="space-y-3 text-white text-sm font-medium">
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-accent text-base font-bold mb-5">Follow us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Tiktok size={20} /></Link>
            </div>
          </div>

        </div>

        {/* Large KICKS Bottom Text */}
        <div className="container-custom overflow-hidden">
             <span className="text-[120px] md:text-[200px] lg:text-[280px] font-black uppercase italic leading-none text-white block w-full tracking-tighter">
                 KICKS
             </span>
        </div>
        
        <div className="container-custom pt-4">
             <p className="text-gray-500 text-xs">© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
