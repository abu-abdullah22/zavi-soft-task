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
        
        <div className="mx-auto max-w-[1320px] relative w-full h-[400px] lg:h-[750px] rounded-[32px] overflow-hidden bg-gray-200 shadow-2xl">
            {/* Product of the Year Badge */}
            <div className="absolute left-0 top-[20px] lg:top-[40px] w-[40px] lg:w-[67px] h-[150px] lg:h-[237px] bg-[#232321] text-white flex items-center justify-center rounded-r-[16px] z-20">
                <span className="rotate-[-90deg] font-bold uppercase text-[10px] lg:text-sm whitespace-nowrap tracking-tight">Nike product of the year</span>
            </div>
            {/* Main Hero Shoe Image */}
           <Image 
            src="/hero-main.png" 
            alt="Hero Shoe"
            fill
            className="object-cover"
            priority
           />
           
           {/* Overlay Content */}
           <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-lg flex flex-col items-start">
              <h2 className="text-[40px] lg:text-[74px] font-semibold text-white uppercase font-rubik leading-none lg:mb-4">
                Nike Air Max
              </h2>
              <p className="text-white/80 text-sm lg:text-[24px] font-semibold font-sans leading-tight mb-8">
                Nike introducing the new air max for everyone&apos;s comfort
              </p>
              <button className="bg-[#4A69E2] text-white w-[138px] h-[48px] rounded-[8px] transition-transform active:scale-95 flex items-center justify-center px-[32px] py-[8px]">
                <span className="w-[74px] h-[17px] font-rubik font-medium text-[14px] leading-[1] tracking-[0.25px] uppercase whitespace-nowrap">Shop Now</span>
              </button>
           </div>
           
           {/* Small Thumbnail Shoes */}
           <div className="absolute right-6 bottom-6 lg:right-12 lg:bottom-12 hidden lg:flex flex-col gap-4">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30 flex items-center justify-center">
                  <Image src="/hero-thumb-1.png" width={80} height={80} className="w-full h-full object-contain" alt="side view" />
              </div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30 flex items-center justify-center">
                  <Image src="/hero-thumb-2.png" width={80} height={80} className="w-full h-full object-contain" alt="side view" />
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
      <section className="py-20 bg-[#232321]">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-0">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl lg:text-[74px] font-semibold uppercase text-white font-rubik leading-[0.95]">Categories</h2>
                <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <MoveRight className="rotate-180 text-white" size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                        <MoveRight className="text-white" size={20} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-[600px] rounded-tl-[48px] md:rounded-bl-[48px] overflow-hidden group bg-[#ECEEF0]">
                    <div className="absolute inset-0 p-12">
                         <Image src="/lifestyleshoes.png" alt="Lifestyle" fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="absolute left-10 bottom-10">
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase text-foreground leading-[0.9]">Lifestyle <br /> Shoes</h3>
                    </div>
                    <div className="absolute right-10 bottom-10">
                        <div className="bg-[#232321] p-4 rounded-xl cursor-pointer hover:bg-black transition-colors">
                          <MoveRight className="-rotate-45 text-white" size={24} />
                        </div>
                    </div>
                </div>
                <div className="relative h-[600px] md:rounded-tr-[48px] md:rounded-br-[48px] overflow-hidden group bg-[#F6F6F6]">
                    <div className="absolute inset-0 p-12">
                        <Image src="/basket_ball_shoes.png" alt="Basketball" fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="absolute left-10 bottom-10">
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase text-foreground leading-[0.9]">Basketball <br /> Shoes</h3>
                    </div>
                    <div className="absolute right-10 bottom-10">
                        <div className="bg-[#232321] p-4 rounded-xl cursor-pointer hover:bg-black transition-colors">
                          <MoveRight className="-rotate-45 text-white" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-[48px] lg:text-[74px] font-bold uppercase text-foreground leading-none">Reviews</h2>
                <Link href="#" className="bg-primary text-white px-8 py-3 rounded-[8px] font-bold uppercase hover:bg-blue-700 transition-all text-sm tracking-tight">
                  See All
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {[
                  { id: 1, avatar: "/reviewer-1.png", img: "/review-image-1.png" },
                  { id: 2, avatar: "/reviewer-2.png", img: "/review-image-2.png" },
                  { id: 3, avatar: "/reviewer-3.png", img: "/review-image-3.png" }
                ].map((review) => (
                  <div key={review.id} className="flex flex-col rounded-[28px] overflow-hidden bg-white group h-full transition-transform hover:translate-y-[-4px]">
                    {/* Top Content */}
                    <div className="p-8 pb-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <div className="flex flex-col">
                          <h4 className="text-2xl font-bold text-foreground mb-1 leading-tight tracking-tight">Good Quality</h4>
                          <p className="text-gray-500 text-base leading-snug">
                            I highly recommend shopping from kicks
                          </p>
                        </div>
                        
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0 shadow-md">
                          <Image 
                            src={review.avatar} 
                            alt="Reviewer" 
                            width={64} 
                            height={64} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mt-auto pb-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="fill-[#FFA52F] text-[#FFA52F]" />
                          ))}
                        </div>
                        <span className="text-base font-bold text-foreground ml-1">5.0</span>
                      </div>
                    </div>

                    {/* Bottom Image */}
                    <div className="relative aspect-[400/300] w-full overflow-hidden">
                      <Image 
                        src={review.img} 
                        alt="Review Image" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority={review.id === 1}
                      />
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}
