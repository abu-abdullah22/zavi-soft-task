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
      className="bg-gray-light rounded-[28px] overflow-hidden group cursor-pointer border border-transparent p-2 hover:border-primary/20 transition-all"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square rounded-[24px] overflow-hidden bg-gray-light">
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
          <h3 className="text-xl font-bold mb-4 uppercase truncate leading-tight">
            {product.title}
          </h3>
          
          <div className="flex items-center justify-between gap-2">
            <button className="flex-grow bg-foreground text-white text-xs font-bold py-3 px-4 rounded-xl uppercase hover:bg-black transition-colors">
               View Product - <span className="text-accent">${product.price}</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
