import { Facebook, Instagram, Github as Tiktok, Twitter } from "lucide-react"; // Using Github as placeholder for Tiktok if icon missing
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Join Club Section */}
      <div className="bg-primary py-16 px-6 lg:px-20 rounded-[40px] container-custom mb-10 overflow-hidden relative">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4 uppercase">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-white/80 text-lg">
              Sign up for free! Join the community.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent w-full lg:w-80"
            />
            <button className="bg-foreground text-white px-8 py-4 rounded-xl font-bold uppercase hover:bg-black transition-colors">
              Submit
            </button>
          </div>
        </div>
        
        {/* Background Decorative Logo */}
        <div className="absolute right-[-5%] bottom-[-20%] opacity-10 select-none pointer-events-none">
            <span className="text-[200px] font-black uppercase italic italic text-white leading-none">
                KICKS
            </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-foreground text-white pt-20 pb-10 px-6 lg:px-20 rounded-t-[40px]">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div>
            <h3 className="text-accent text-lg font-bold mb-6">About us</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

          <div>
            <h3 className="text-accent text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-4 text-white font-semibold">
              <li><Link href="/runners" className="hover:text-accent transition-colors">Runners</Link></li>
              <li><Link href="/sneakers" className="hover:text-accent transition-colors">Sneakers</Link></li>
              <li><Link href="/basketball" className="hover:text-accent transition-colors">Basketball</Link></li>
              <li><Link href="/outdoor" className="hover:text-accent transition-colors">Outdoor</Link></li>
              <li><Link href="/golf" className="hover:text-accent transition-colors">Golf</Link></li>
              <li><Link href="/hiking" className="hover:text-accent transition-colors">Hiking</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-white font-semibold">
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent text-lg font-bold mb-6">Follow us</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors"><Tiktok size={20} /></Link>
            </div>
          </div>

        </div>

        <div className="container-custom border-t border-white/10 pt-10 text-center">
             <div className="mb-8">
                <span className="text-[120px] lg:text-[180px] font-black uppercase italic leading-none opacity-20 block">
                    KICKS
                </span>
             </div>
             <p className="text-gray-500 text-sm">© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
