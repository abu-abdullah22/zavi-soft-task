"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: {
        name: string;
    };
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Use first image or placeholder
  const imageUrl = (() => {
    if (!product.images || product.images.length === 0) return "https://via.placeholder.com/400";
    
    let firstImage = product.images[0];
    
    // Handle cases where the API returns an array string like '["url"]' instead of a real array
    if (typeof firstImage === 'string' && firstImage.startsWith('[')) {
      try {
        const parsed = JSON.parse(firstImage);
        if (Array.isArray(parsed) && parsed.length > 0) {
          firstImage = parsed[0];
        }
      } catch (e) {
        // Fallback for malformed JSON strings like ["url1", "url2", "url3"]
        firstImage = firstImage.replace(/[\[\]"]/g, '').split(',')[0].trim();
      }
    }
    
    // Some URLs might be relative or broken, ensure it's a string
    return typeof firstImage === 'string' ? firstImage : "https://via.placeholder.com/400";
  })();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        {/* Image Container: #ECEEF0 bg, 28px rounding, thick white border */}
        <div className="relative aspect-[318/350] w-full bg-[#ECEEF0] rounded-[28px] overflow-hidden border-[5px] border-white">
          <Image
            src={imageUrl || "https://via.placeholder.com/400"}
            alt={product.title}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* "New" Badge */}
          <div className="absolute top-0 left-0">
            <div className="bg-[#4A69E2] text-white text-[12px] font-bold px-4 py-2 rounded-br-[20px] rounded-tl-[28px] uppercase tracking-wide">
              New
            </div>
          </div>
        </div>

        {/* Text + Button Area — sits on section background */}
        <div className="mt-[10px] flex flex-col flex-1 gap-[10px]">
          <h3 className="text-[20px] lg:text-[22px] font-bold uppercase leading-[1.15] text-[#232321] font-rubik line-clamp-2">
            {product.title}
          </h3>
          
          <div className="mt-auto">
            <button className="w-full h-[52px] bg-[#232321] text-white text-[12px] font-bold rounded-[8px] uppercase hover:bg-black transition-colors flex items-center justify-center gap-1 tracking-wide">
               VIEW PRODUCT - <span className="text-[#FFA52F]">${product.price}</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
