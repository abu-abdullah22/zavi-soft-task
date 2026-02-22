"use client";

import { removeFromCart, updateQuantity } from "@/lib/features/cartSlice";
import { RootState } from "@/lib/store";
import { Heart, MoveRight, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="container-custom py-16 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Cart Items */}
        <div className="flex-grow">
          <div className="mb-10">
            <h1 className="text-3xl font-black uppercase mb-2">Saving to celebrate</h1>
            <p className="text-gray-500 text-sm">
                Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-6 lg:p-8 border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold uppercase mb-6">Your Bag</h2>
            {items.length === 0 ? (
                <div className="py-10 text-center">
                    <p className="text-gray-500 mb-6">Your bag is empty.</p>
                    <Link href="/" className="text-primary font-bold uppercase underline">Continue Shopping</Link>
                </div>
            ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-6 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-40 h-40 relative rounded-2xl overflow-hidden bg-gray-light flex-shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold uppercase max-w-[200px] leading-tight">{item.title}</h3>
                            <p className="text-xl font-bold text-primary">${item.price}.00</p>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">Men's Road Running Shoes</p>
                          <div className="flex gap-10 text-sm font-semibold mb-4">
                            <span>Size {item.size || 'N/A'}</span>
                            <div className="flex items-center gap-4">
                                <span>Quantity</span>
                                <select 
                                    value={item.quantity} 
                                    onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                                    className="bg-transparent border-none focus:ring-0 p-0"
                                >
                                    {[1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Heart size={20} /></button>
                          <button 
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 sticky top-30">
            <h2 className="text-2xl font-bold uppercase mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 font-semibold">
                    <span>{items.reduce((a, b) => a + b.quantity, 0)} Items</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-semibold">
                    <span>Delivery</span>
                    <span>${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-semibold">
                    <span>Sales Tax</span>
                    <span>-</span>
                </div>
            </div>

            <div className="flex justify-between text-2xl font-bold uppercase mb-8 pt-8 border-t border-gray-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-foreground text-white font-bold py-5 rounded-xl uppercase hover:bg-black transition-all mb-4 flex justify-between items-center px-8">
                Checkout <MoveRight size={20} />
            </button>
            
            <p className="text-center text-xs font-bold uppercase underline cursor-pointer">Use a promo code</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
