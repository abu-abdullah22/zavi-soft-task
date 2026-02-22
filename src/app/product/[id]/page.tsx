"use client";

import ProductCard from "@/components/products/ProductCard";
import { addToCart } from "@/lib/features/cartSlice";
import { useGetProductQuery, useGetProductsByCategoryQuery } from "@/lib/services/api";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading, isError } = useGetProductQuery(Number(id));
  const { data: recommendations } = useGetProductsByCategoryQuery(product?.category.id || 1);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("navy");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (isLoading) return <div className="py-20 text-center">Loading product...</div>;
  if (isError || !product) return <div className="py-20 text-center">Product not found</div>;

  const images = product.images.map((img: string) => 
    img.startsWith('[') ? JSON.parse(img)[0] : img
  );

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: images[0],
      size: selectedSize?.toString(),
    }));
    alert("Added to cart!");
  };

  return (
    <div className="container-custom py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
        
        {/* Left: Image Gallery */}
        <div className="flex-grow">
          <div className="relative aspect-square rounded-[40px] overflow-hidden bg-gray-light mb-4">
             <Image 
                src={images[activeImageIndex]} 
                alt={product.title} 
                fill 
                className="object-cover"
             />
             <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase">
                    New Release
                </span>
             </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.slice(0, 4).map((img : string, idx: number) => (
              <button 
                key={idx} 
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-primary' : 'border-transparent'}`}
              >
                <Image src={img} alt={`${product.title} ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-[450px] flex-shrink-0">
          <div className="mb-2">
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase">
                New Release
            </span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2 leading-tight">
            {product.title}
          </h1>
          <p className="text-3xl font-bold text-primary mb-8">
            ${product.price}.00
          </p>

          <div className="mb-8">
            <h3 className="font-bold uppercase text-sm mb-4">Color</h3>
            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedColor("navy")}
                className={`w-8 h-8 rounded-full bg-[#232321] border-2 ${selectedColor === "navy" ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'}`} 
              />
              <button 
                onClick={() => setSelectedColor("green")}
                className={`w-8 h-8 rounded-full bg-[#707E6E] border-2 ${selectedColor === "green" ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'}`} 
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold uppercase text-sm">Size</h3>
                <button className="text-xs font-bold uppercase underline">Size Chart</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl font-bold text-sm transition-all ${selectedSize === size ? 'bg-foreground text-white' : 'bg-white border border-gray-100 hover:border-primary'}`}
                >
                    {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mb-10">
            <button 
                onClick={handleAddToCart}
                className="flex-grow bg-foreground text-white font-bold py-4 rounded-xl uppercase hover:bg-black transition-all"
            >
                Add to Cart
            </button>
            <button className="bg-foreground text-white p-4 rounded-xl hover:bg-black transition-all">
                <Heart size={24} />
            </button>
          </div>

          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl uppercase hover:bg-blue-700 transition-all mb-10">
            Buy it now
          </button>

          <div>
            <h3 className="font-bold uppercase text-sm mb-4">About the product</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
                {product.description}
            </p>
          </div>
        </div>

      </div>

      {/* Recommendations */}
      <div className="mb-20">
        <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl font-black uppercase">You may also like</h2>
            <div className="flex gap-2">
                <button className="p-3 bg-gray-200 rounded-lg"><ChevronLeft size={20} /></button>
                <button className="p-3 bg-foreground text-white rounded-lg"><ChevronRight size={20} /></button>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations?.slice(0, 4).map((rec: any) => (
                <ProductCard key={rec.id} product={rec} />
            ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;
