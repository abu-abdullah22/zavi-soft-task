import ProductGrid from "@/components/products/ProductGrid";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 pt-10 pb-20 container-custom">
        <div className="flex flex-col mb-4">
             <h1 className="text-[10vw] lg:text-[14vw] font-black uppercase italic tracking-tighter leading-[0.8] text-[#232321] select-none">
                DO IT <span className="text-primary">RIGHT</span>
             </h1>
        </div>
        
        <div className="relative w-full aspect-[16/7] rounded-[40px] overflow-hidden bg-gray-200">
           {/* Main Hero Shoe Image */}
           <Image 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Shoe"
            fill
            className="object-cover"
            priority
           />
           
           {/* Overlay Content */}
           <div className="absolute bottom-10 left-10 max-w-sm">
              <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase mb-4 inline-block">
                New Release
              </span>
              <h2 className="text-4xl font-bold text-white uppercase mb-4">
                Nike Air Max
              </h2>
              <p className="text-white/80 mb-6">
                Nike introducing the new air max for everyone's comfort
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold uppercase hover:bg-blue-700 transition-colors">
                Shop Now
              </button>
           </div>
           
           {/* Small Thumbnail Shoes */}
           <div className="absolute right-10 bottom-10 hidden lg:flex flex-col gap-4">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30 truncate">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-contain" alt="side view" />
              </div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30 truncate">
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-contain" alt="side view" />
              </div>
           </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="px-6 lg:px-20 py-20 container-custom">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl lg:text-6xl font-black uppercase leading-none">
            Don't miss out <br /><span className="text-primary italic">new drops</span>
          </h2>
          <Link href="/shop" className="bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase hover:bg-blue-700 transition-all flex items-center gap-2">
            Shop All <MoveRight size={20} />
          </Link>
        </div>
        
        <ProductGrid />
      </section>

      {/* Categories Snippet */}
      <section className="px-6 lg:px-20 py-20 bg-foreground text-white">
        <div className="container-custom">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-bold uppercase">Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=687" alt="Lifestyle" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                        <h3 className="text-2xl font-bold uppercase">Lifestyle <br /> Shoes</h3>
                        <div className="bg-foreground p-3 rounded-lg"><MoveRight className="-rotate-45" /></div>
                    </div>
                </div>
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1070" alt="Basketball" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                        <h3 className="text-2xl font-bold uppercase">Basketball <br /> Shoes</h3>
                        <div className="bg-foreground p-3 rounded-lg"><MoveRight className="-rotate-45" /></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
