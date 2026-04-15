"use client";

import Link from 'next/link';
import { Search, ShoppingBag, Home } from 'lucide-react';
import { motion } from 'motion/react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function NotFound() {
  return (
    <div className={`h-screen w-full bg-[#0D0C0D] flex flex-col items-center justify-center p-6 text-white overflow-hidden relative ${poppins.className}`}>
      
      {/* Fundo Estático (sem animação) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#F4CDD4] rounded-full blur-[200px] opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        {/* Minimalist Logo */}
        <div className="mb-8">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://bubbles.gabrielxavier.online/BUBBLES.svg" 
              alt="Bubbles" 
              className="h-8 md:h-10 invert brightness-0 mx-auto"
            />
          </Link>
        </div>
        
        {/* Huge 404 Element */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[100px] sm:text-[120px] md:text-[150px] font-black leading-none mb-2 select-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30"
        >
          404
        </motion.h1>
        
        {/* Generic Messaging */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl font-bold mb-8 text-white/90 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed"
        >
          A página que você está procurando não existe.
        </motion.h2>

        {/* Barra de Pesquisa */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex justify-center mb-10"
        >
          <div className="relative w-full max-w-lg">
            <input 
              type="text" 
              placeholder="Pesquise no site..." 
              className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 md:py-5 text-white placeholder-white/40 focus:outline-none focus:border-[#F4CDD4] focus:ring-2 focus:ring-[#F4CDD4]/30 transition-all font-medium pr-16"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#F4CDD4] text-[#0D0C0D] rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </motion.div>

        {/* Redirect Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center"
        >
          <Link href="/" className="btn-outline-dark !border-white/20 !text-white hover:!bg-white hover:!text-[#0D0C0D] !rounded-full h-14 md:h-16 font-bold uppercase tracking-widest text-[11px] md:text-[13px] flex items-center justify-center transition-all duration-250 hover:scale-105 w-full sm:w-64">
            <Home className="w-4 h-4 md:w-5 md:h-5 mr-3" />
            VOLTAR PARA HOME
          </Link>
          <Link href="/produto" className="bg-[#F4CDD4] text-[#0D0C0D] hover:bg-white !rounded-full h-14 md:h-16 font-bold uppercase tracking-widest text-[11px] md:text-[13px] flex items-center justify-center transition-all duration-250 hover:scale-105 shadow-[0_6px_20px_rgba(244,205,212,0.15)] w-full sm:w-64">
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-3" />
            CONFIRA PRODUTOS
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
