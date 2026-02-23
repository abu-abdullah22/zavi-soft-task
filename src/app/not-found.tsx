import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#232321] flex flex-col items-center justify-center p-8 text-center">
      <div className="relative mb-12">
        <h1 className="text-[120px] md:text-[200px] font-black uppercase italic leading-none text-white opacity-10 tracking-tighter select-none">
          KICKS
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-primary italic tracking-widest animate-pulse">
            Incoming
          </h2>
        </div>
      </div>
      
      <p className="text-white/60 text-lg mb-12 max-w-md">
        We&apos;re preparing something special for this page. Join the KicksPlus club to stay updated!
      </p>
      
      <Link 
        href="/" 
        className="bg-primary text-white px-12 py-4 rounded-[12px] font-bold uppercase hover:bg-blue-700 transition-all flex items-center gap-2 group"
      >
        <MoveLeft className="group-hover:-translate-x-1 transition-transform" />
        Back To Home
      </Link>
    </div>
  );
}
