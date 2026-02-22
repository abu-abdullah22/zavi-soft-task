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
  const imageUrl = product.images[0]?.startsWith('[') 
    ? JSON.parse(product.images[0])[0] 
    : product.images[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden group cursor-pointer"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-[#F3F3F3] rounded-2xl">
           <Image
            src={imageUrl || "https://via.placeholder.com/400"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl uppercase">
              New
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-bold mb-1 uppercase truncate leading-tight text-foreground">
            {product.title}
          </h3>
          
          <button className="w-full bg-foreground text-white text-xs font-bold py-3 px-4 rounded-lg uppercase hover:bg-black transition-colors mt-3">
             View Product - <span className="text-accent">${product.price}</span>
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
