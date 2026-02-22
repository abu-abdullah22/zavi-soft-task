import ProductGrid from "@/components/products/ProductGrid";
import { MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative container-custom pt-8 pb-16">
        <div className="flex flex-col mb-6">
             <h1 className="text-[80px] lg:text-[223.5px] font-bold uppercase italic tracking-tighter leading-[1] text-foreground select-none font-rubik">
                DO IT <span className="text-primary">RIGHT</span>
             </h1>
        </div>
        
        <div className="relative w-full aspect-[16/7] rounded-[32px] overflow-hidden bg-gray-200 shadow-2xl">
           {/* Main Hero Shoe Image */}
           <Image 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Shoe"
            fill
            className="object-cover"
            priority
           />
           
           {/* Overlay Content */}
           <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-sm">
              <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase mb-2">
                Nike Air Max
              </h2>
              <p className="text-white/80 mb-6 text-sm lg:text-base">
                Nike introducing the new air max for everyone&apos;s comfort
              </p>
              <button className="bg-primary text-white w-[189px] h-[48px] rounded-[8px] font-bold uppercase hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 text-sm">
                Shop Now
              </button>
           </div>
           
           {/* Small Thumbnail Shoes */}
           <div className="absolute right-6 bottom-6 lg:right-12 lg:bottom-12 hidden lg:flex flex-col gap-4">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-contain" alt="side view" />
              </div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-contain" alt="side view" />
              </div>
           </div>
        </div>
      </section>

      {/* Featured Products Grid - "Don't miss out new drops" */}
      <section className="py-20">
        <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-12">
              <h2 className="text-4xl lg:text-[74px] font-semibold uppercase leading-[0.95] max-w-[589px] font-rubik text-foreground">
                Don&apos;t miss out <br /><span className="text-primary italic">new drops</span>
              </h2>
              <Link href="/shop" className="bg-primary text-white w-[189px] h-[48px] rounded-[8px] font-bold uppercase hover:bg-blue-700 transition-all flex items-center justify-center gap-1 self-start lg:self-auto text-sm">
                Shop New Drops <MoveRight size={16} />
              </Link>
            </div>
            
            <ProductGrid />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase text-foreground">Categories</h2>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-foreground"></div>
                    <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden group bg-[#D9D9D9]">
                    <Image src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=687" alt="Lifestyle" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-6 bottom-6 flex justify-between items-end">
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase text-white">Lifestyle <br /> Shoes</h3>
                        <div className="bg-foreground p-3 rounded-lg cursor-pointer hover:bg-black transition-colors"><MoveRight className="-rotate-45 text-white" size={20} /></div>
                    </div>
                </div>
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden group bg-[#D9D9D9]">
                    <Image src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1070" alt="Basketball" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-6 bottom-6 flex justify-between items-end">
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase text-white">Basketball <br /> Shoes</h3>
                        <div className="bg-foreground p-3 rounded-lg cursor-pointer hover:bg-black transition-colors"><MoveRight className="-rotate-45 text-white" size={20} /></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase text-foreground">Reviews</h2>
                <Link href="#" className="bg-primary text-white w-[189px] h-[48px] rounded-[8px] font-bold uppercase hover:bg-blue-700 transition-all flex items-center justify-center gap-1 text-sm">
                  See All <MoveRight size={16} />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Review Card 1 */}
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                        ))}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Good Quality</h4>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        I highly recommend shopping at Kicks store. The quality is amazing and the prices are very competitive.
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">JD</div>
                        <span className="text-sm font-semibold text-foreground">John Doe</span>
                    </div>
                </div>
                {/* Review Card 2 */}
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                        ))}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Good Quality</h4>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        I highly recommend shopping at Kicks store. Great selection and fast shipping. Will definitely come back!
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">JS</div>
                        <span className="text-sm font-semibold text-foreground">Jane Smith</span>
                    </div>
                </div>
                {/* Review Card 3 */}
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                        ))}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Good Quality</h4>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Amazing experience! The shoes fit perfectly and the customer service is top notch. Five stars!
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold text-sm">MJ</div>
                        <span className="text-sm font-semibold text-foreground">Mike Johnson</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
