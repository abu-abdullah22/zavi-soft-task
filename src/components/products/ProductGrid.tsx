"use client";

import { useGetProductsQuery } from "@/lib/services/api";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[350px] bg-gray-100 animate-pulse rounded-[28px]" />
        ))}
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-bold text-red-500">Failed to load products</h3>
        <p className="text-gray-500">Please try again later.</p>
      </div>
    );
  }

  // Show exactly four products on the landing page as requested
  const displayProducts = products.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
