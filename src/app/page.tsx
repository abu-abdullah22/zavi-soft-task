import ProductGrid from "@/components/products/ProductGrid";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 pt-16 pb-32 container-custom">
        <div className="flex flex-col mb-12">
             <h1 className="text-[120px] lg:text-[223.5px] font-bold uppercase italic tracking-tighter leading-[1] text-[#232321] select-none font-rubik">
                DO IT <span className="text-primary">RIGHT</span>
             </h1>
        </div>
        
        <div className="relative w-full aspect-[16/7] rounded-[40px] overflow-hidden bg-gray-200 shadow-2xl">
           {/* Main Hero Shoe Image */}
           <Image 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Shoe"
            fill
            className="object-cover"
            priority
           />
           
           {/* Overlay Content */}
           <div className="absolute bottom-12 left-12 max-w-sm">
              <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase mb-4 inline-block">
                New Release
              </span>
              <h2 className="text-5xl font-bold text-white uppercase mb-4">
                Nike Air Max
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Nike introducing the new air max for everyone's comfort
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase hover:bg-blue-700 transition-colors">
                Shop Now
              </button>
           </div>
           
           {/* Small Thumbnail Shoes */}
           <div className="absolute right-12 bottom-12 hidden lg:flex flex-col gap-6">
              <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30 truncate flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-contain" alt="side view" />
              </div>
              <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30 truncate flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-contain" alt="side view" />
              </div>
           </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="bg-gray-light text-foreground py-32">
        <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20">
              <h2 className="text-5xl lg:text-[74px] font-semibold uppercase leading-[0.95] max-w-[589px] font-rubik">
                Don't miss out <br /><span className="text-primary italic">new drops</span>
              </h2>
              <Link href="/shop" className="bg-primary text-white px-10 py-5 rounded-xl font-bold uppercase hover:bg-blue-700 transition-all flex items-center gap-2 self-start lg:self-auto">
                Shop All <MoveRight size={20} />
              </Link>
            </div>
            
            <ProductGrid />
        </div>
      </section>

      {/* Categories Snippet */}
      <section className="px-6 lg:px-20 py-32 bg-[#E7E7E3]">
        <div className="container-custom">
            <div className="flex justify-between items-center mb-16">
                <h2 className="text-5xl font-bold uppercase">Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=687" alt="Lifestyle" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                        <h3 className="text-3xl font-bold uppercase text-white">Lifestyle <br /> Shoes</h3>
                        <div className="bg-foreground p-3 rounded-lg"><MoveRight className="-rotate-45 text-white" /></div>
                    </div>
                </div>
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1070" alt="Basketball" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                        <h3 className="text-3xl font-bold uppercase text-white">Basketball <br /> Shoes</h3>
                        <div className="bg-foreground p-3 rounded-lg"><MoveRight className="-rotate-45 text-white" /></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
