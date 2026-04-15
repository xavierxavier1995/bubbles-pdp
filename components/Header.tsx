import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="bg-[#F4CDD4] text-black py-2 px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
        <span>KIT FONDUE DE CHOCOLATE EM PROMOÇÃO 🐰🤎</span>
        <div className="flex items-center gap-2 font-bold">
          <span>00 d</span> : <span>00 h</span> : <span>00 m</span>
          <Link href="#" className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors ml-2">
            Garantir
          </Link>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-[80px] flex items-center justify-between">
        <div className="flex items-center gap-4 lg:hidden">
          <button className="p-2 -ml-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <Link href="/" className="flex-shrink-0">
          <Image src="https://www.bubbles.com.br/cdn/shop/files/logo-bubbles.png?v=1754313552&width=165" alt="Bubbles" width={165} height={39} className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-gray-900">
          <Link href="#" className="hover:text-[#F48FB1] transition-colors">Promoções</Link>
          <Link href="#" className="hover:text-[#F48FB1] transition-colors flex items-center gap-1">Produtos <span className="text-[10px]">▼</span></Link>
          <Link href="#" className="hover:text-[#F48FB1] transition-colors flex items-center gap-1">Linhas <span className="text-[10px]">▼</span></Link>
          <Link href="#" className="hover:text-[#F48FB1] transition-colors flex items-center gap-1">Necessidades <span className="text-[10px]">▼</span></Link>
          <Link href="#" className="hover:text-[#F48FB1] transition-colors flex items-center gap-1">Coloração <span className="text-[10px]">▼</span></Link>
          <Link href="#" className="hover:text-[#F48FB1] transition-colors flex items-center gap-1">Tipos de pelagem <span className="text-[10px]">▼</span></Link>
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="p-2 hover:text-[#F48FB1] transition-colors hidden lg:block">
            <Search className="w-[22px] h-[22px]" />
          </button>
          <Link href="#" className="p-2 hover:text-[#F48FB1] transition-colors hidden lg:block">
            <User className="w-[22px] h-[22px]" />
          </Link>
          <Link href="#" className="p-2 hover:text-[#F48FB1] transition-colors relative">
            <ShoppingCart className="w-[22px] h-[22px]" />
            <span className="absolute top-0 right-0 bg-[#F4CDD4] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">1</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
