import { Facebook, Instagram, Github as Tiktok, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12">
      {/* Join Club Section */}
      <div className="bg-primary py-12 px-8 lg:px-16 rounded-[32px] container-custom mb-8 overflow-hidden relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-md z-10">
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3 uppercase">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-white/70 text-sm">
              Sign up for free! Join the community.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 z-10">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent w-full lg:w-72 text-sm"
            />
            <button className="bg-foreground text-white px-6 py-3 rounded-lg font-bold uppercase text-sm hover:bg-black transition-colors">
              Submit
            </button>
          </div>
        </div>
        
        {/* Background Decorative Logo */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 opacity-10 select-none pointer-events-none">
            <span className="text-[140px] lg:text-[200px] font-black uppercase italic text-white leading-none">
                KICKS
            </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-foreground text-white pt-16 pb-8 px-8 lg:px-16 rounded-t-[32px]">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div>
            <h3 className="text-accent text-base font-bold mb-5">About us</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

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

          <div>
            <h3 className="text-accent text-base font-bold mb-5">Company</h3>
            <ul className="space-y-3 text-white text-sm font-medium">
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent text-base font-bold mb-5">Follow us</h3>
            <div className="flex gap-3">
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Facebook size={18} /></Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Instagram size={18} /></Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Twitter size={18} /></Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Tiktok size={18} /></Link>
            </div>
          </div>

        </div>

        <div className="container-custom border-t border-white/10 pt-8 text-center">
             <div className="mb-6">
                <span className="text-[100px] lg:text-[180px] font-black uppercase italic leading-none opacity-20 block">
                    KICKS
                </span>
             </div>
             <p className="text-gray-500 text-xs">© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
