'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Check, ChevronDown, ChevronUp, Plus, Minus, Menu, Search, User, RefreshCcw, Feather, Heart, Map, Shield, Droplet, Sun, Layers, Award, Scissors, Truck, Frown, X, Smile, Gift, Wind, FileText, List, Activity, HelpCircle, Maximize2, ChevronLeft, ChevronRight, VolumeX } from 'react-feather';

const CashbackIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21v-5h5" />
    <path d="M14 10h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3" />
    <path d="M12 8v8" />
  </svg>
);

export default function Produto2() {
  const [mainImage, setMainImage] = useState(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [shippingResult, setShippingResult] = useState<{days: number, price: string} | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const addToCartRef = useRef<HTMLButtonElement>(null);

  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setMainImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    const currentRef = addToCartRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const images = [
    { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop', alt: 'Shampoo Pineapple Essential 5L' },
    { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', alt: 'Pet no Banho' },
    { url: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=800&auto=format&fit=crop', alt: 'Ingredientes Naturais' },
    { url: 'https://images.unsplash.com/photo-1586445580980-08080211283e?q=80&w=800&auto=format&fit=crop', alt: 'Textura da Espuma' }
  ];

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length >= 8) {
      setShippingResult({ days: 3, price: '15,90' });
    }
  };

  return (
    <div className="font-sans text-[var(--text-dark)] bg-white min-h-screen relative pb-20 md:pb-0">
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --pink: #E6007E;
          --pink-dark: #C2006A;
          --pink-light: #FDF0F6;
          --orange: #E65100;
          --yellow-light: #FFF8E7;
          --amber: #FFE082;
          --green: #2DB85A;
          --text-dark: #1A1A1A;
          --text-mid: #555555;
          --text-light: #999999;
          --border: #F0F0F0;
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 16px;
          --radius-xl: 20px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        @keyframes strong-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37,211,102, 0); }
        }
        .animate-strong-pulse {
          animation: strong-pulse 1.5s infinite;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />

      {/* BLOCO 1: TOP BANNER (ROTATING) */}
      <div className="bg-[#EAD1D6] text-[#333] text-[11px] font-[700] py-2 overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center">
           <span className="mx-6 flex items-center gap-2"><Heart className="w-4 h-4" /> 100% VEGANOS E CRUELTY FREE</span>
           <span className="mx-6 flex items-center gap-2"><Award className="w-4 h-4" /> A MARCA FAVORITA DOS MELHORES GROOMERS</span>
           <span className="mx-6 flex items-center gap-2"><Scissors className="w-4 h-4" /> GANHE 10% OFF <span className="bg-white/60 px-2 py-0.5 rounded-full text-[10px]">PRIMEIRA10 Copiar</span></span>
           <span className="mx-6 flex items-center gap-2"><Truck className="w-4 h-4" /> FRETE GRÁTIS POR REGIÃO</span>
           {/* Repeat for infinite effect */}
           <span className="mx-6 flex items-center gap-2"><Heart className="w-4 h-4" /> 100% VEGANOS E CRUELTY FREE</span>
           <span className="mx-6 flex items-center gap-2"><Award className="w-4 h-4" /> A MARCA FAVORITA DOS MELHORES GROOMERS</span>
           <span className="mx-6 flex items-center gap-2"><Scissors className="w-4 h-4" /> GANHE 10% OFF <span className="bg-white/60 px-2 py-0.5 rounded-full text-[10px]">PRIMEIRA10 Copiar</span></span>
           <span className="mx-6 flex items-center gap-2"><Truck className="w-4 h-4" /> FRETE GRÁTIS POR REGIÃO</span>
        </div>
      </div>

      {/* BLOCO 2: HEADER */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 border-b border-gray-100 h-[60px] md:h-[80px] flex items-center justify-between px-4 md:px-8`}>
        <div className="flex items-center gap-4">
          <button className="md:hidden text-[var(--text-dark)]">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://www.bubbles.com.br/cdn/shop/files/logo-bubbles.png?v=1754313552&width=165" 
              alt="Bubbles" 
              width={140} 
              height={45} 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-[600] text-black">
          <Link href="#" className="hover:text-[var(--pink)] transition-colors">Promoções</Link>
          <Link href="#" className="hover:text-[var(--pink)] transition-colors flex items-center gap-1">Produtos <ChevronDown className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-[var(--pink)] transition-colors flex items-center gap-1">Linhas <ChevronDown className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-[var(--pink)] transition-colors flex items-center gap-1">Necessidades <ChevronDown className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-[var(--pink)] transition-colors flex items-center gap-1">Coloração <ChevronDown className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-[var(--pink)] transition-colors flex items-center gap-1">Tipos de pelagem <ChevronDown className="w-4 h-4" /></Link>
        </nav>

        <div className="flex items-center gap-5">
          <button className="hidden md:block text-black hover:text-[var(--pink)] transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="hidden md:block text-black hover:text-[var(--pink)] transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button className="relative text-black hover:text-[var(--pink)] transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-[#EAD1D6] text-black text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </header>

      <div>
        {/* BLOCO 3: BREADCRUMB */}
        <div className="max-w-[1200px] mx-auto px-4 py-3 text-[11px] text-[var(--text-mid)] flex items-center gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Link href="#" className="hover:text-[var(--pink)]">Início</Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-[var(--pink)]">Shampoos</Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-[var(--pink)]">Linha Essential</Link>
          <span>&gt;</span>
          <span className="text-[var(--pink)] font-medium">Shampoo Neutralizador Pineapple</span>
        </div>

        {/* BLOCO 4: HERO SECTION */}
        <section className="max-w-[1200px] mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-12">
          
          {/* GALERIA */}
          <div className="flex flex-col md:flex-row gap-4 md:sticky md:top-24 self-start">
            
            {/* Thumbnails (Left on desktop, bottom on mobile) */}
            <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto scrollbar-hide pb-2 md:pb-0 md:pr-2 md:w-24 flex-shrink-0">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-[var(--radius-sm)] overflow-hidden border-2 transition-all ${mainImage === idx ? 'border-[var(--pink)]' : 'border-transparent hover:border-[var(--pink)]'}`}
                >
                  <Image 
                    src={img.url} 
                    alt={img.alt}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
              {/* Arrows for desktop */}
              <div className="hidden md:flex items-center justify-center gap-4 mt-2">
                <button onClick={prevImage} className="bg-[var(--pink-light)] text-[var(--pink)] hover:bg-[var(--pink)] hover:text-white transition-colors p-2 rounded-full shadow-sm">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextImage} className="bg-[var(--pink-light)] text-[var(--pink)] hover:bg-[var(--pink)] hover:text-white transition-colors p-2 rounded-full shadow-sm">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image (Right on desktop, top on mobile) */}
            <div className="order-1 md:order-2 relative aspect-square w-full rounded-[var(--radius-xl)] bg-gray-100 overflow-hidden flex flex-col items-center justify-center transition-opacity duration-300 group">
              <Image 
                src={images[mainImage].url} 
                alt={images[mainImage].alt}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setIsFullscreen(true)}
                referrerPolicy="no-referrer"
              />
              
              {/* Expand Icon */}
              <button 
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-black p-2 rounded-lg shadow-sm hover:bg-white hover:text-[var(--pink)] transition-colors z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 bg-[var(--pink)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                LINHA ESSENTIAL
              </div>
              <div className="absolute top-4 right-4 bg-[var(--green)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 flex items-center gap-1">
                <Check className="w-3 h-3" strokeWidth={3} /> VEGANO
              </div>
            </div>
          </div>

          {/* BUY BOX */}
          <div className="flex flex-col">
            <span className="text-[var(--pink)] text-[11px] font-bold uppercase tracking-[2px] mb-2 block">
              LINHA ESSENTIAL · NEUTRALIZADOR DE ODORES
            </span>

            <div className="mb-4">
              <h3 className="text-[14px] font-[800] text-black mb-3">Veja mais sobre o produto</h3>
              <div className="flex gap-3">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[var(--pink)] relative">
                  <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop" alt="Uso no pet" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[var(--pink)] relative">
                  <Image src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=400&auto=format&fit=crop" alt="Textura" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[var(--pink)] relative">
                  <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop" alt="Detalhe" fill className="object-cover" />
                </div>
              </div>
            </div>

            <h1 className="text-[20px] md:text-[26px] font-[800] text-[var(--text-dark)] leading-[1.2] mb-2">
              SHAMPOO PET NEUTRALIZADOR PINEAPPLE ESSENTIAL 5L (1:5)
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#F4A522]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[13px] text-[var(--text-light)]">4.9 · </span>
              <a href="#reviews" className="text-[13px] text-[var(--pink)] underline font-medium hover:text-[var(--pink-dark)]">
                87 avaliações
              </a>
            </div>

            <div className="mb-2 flex items-center gap-3 flex-wrap">
              <span className="text-[32px] font-[900] text-black leading-none">
                R$ {(206.90 * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-[18px] text-[#888] line-through">
                R$ {(229.90 * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="bg-[#5cb85c] text-white text-[12px] font-bold px-3 py-1 rounded-full">
                10% de desconto
              </span>
            </div>
            <p className="text-[14px] text-black mb-2">
              6x de R$ {((206.90 * quantity) / 6).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} sem juros
            </p>
            
            <div className="flex items-center gap-1 text-[14px] text-[#666] mb-6 font-medium">
              <CashbackIcon className="w-4 h-4 text-[#666]" />
              <span>Ganhe <strong className="text-black">R$ {((206.90 * quantity) * 0.05).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> de cashback</span>
            </div>

            <div className="bg-[#f5f5f5] rounded-[var(--radius-md)] p-3 mb-6 flex justify-between items-center text-center divide-x divide-gray-300">
              <div className="flex-1 px-2">
                <span className="block text-[11px] text-[#666] uppercase tracking-wider mb-1">Rendimento</span>
                <span className="block text-[14px] font-bold text-black">300 banhos</span>
              </div>
              <div className="flex-1 px-2">
                <span className="block text-[11px] text-[#666] uppercase tracking-wider mb-1">Custo/banho</span>
                <span className="block text-[14px] font-bold text-black">R$ 0,69</span>
              </div>
              <div className="flex-1 px-2">
                <span className="block text-[11px] text-[#666] uppercase tracking-wider mb-1">Diluição</span>
                <span className="block text-[14px] font-bold text-black">1:5</span>
              </div>
            </div>

            {/* QUANTITY AND ADD TO CART - SIDE BY SIDE */}
            <div className="mb-4">
              <p className="font-[700] text-[12px] mb-2 text-[var(--text-dark)]">Quantidade: <span className="text-[#888] font-normal">{quantity} no carrinho</span></p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex items-center border border-[#E0E0E0] rounded-[var(--radius-md)] h-[52px] bg-white w-[120px] flex-shrink-0">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--pink)] transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center font-bold text-[16px]">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--pink)] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    ref={addToCartRef}
                    className="flex-1 h-[52px] bg-[#25D366] hover:bg-[#1DA851] text-white font-[900] text-[18px] uppercase tracking-wide rounded-[var(--radius-md)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(37,211,102,0.4)] active:scale-[0.98]"
                  >
                    Comprar
                  </button>
                </div>
                
                {(206.90 * quantity) > 399.00 && (
                  <div className="bg-gradient-to-r from-[var(--pink)] to-[#ff8da1] text-white p-1 md:p-3 rounded-[var(--radius-md)] flex items-center gap-1.5 md:gap-3 shadow-[0_4px_15px_rgba(244,143,161,0.4)] animate-pulse border border-[#ffb3c1]">
                    <Gift className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="block font-bold text-[10px] sm:text-[11px] md:text-[14px] uppercase tracking-wide truncate">Brinde Grátis Desbloqueado!</span>
                      <span className="block text-[9px] sm:text-[10px] md:text-[12px] opacity-90 leading-[1.1] whitespace-normal">Brinde especial em compras acima de <strong className="font-black">R$399,00</strong></span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SHIPPING CALCULATOR */}
            <div className="bg-gray-50 border border-[var(--border)] rounded-[var(--radius-md)] p-4 mb-4">
              <h4 className="text-[13px] font-[700] text-[var(--text-dark)] mb-2 flex items-center gap-2">
                <Truck className="w-4 h-4" /> Calcular frete e prazo
              </h4>
              <form onSubmit={handleCalculateShipping} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Informe seu CEP" 
                  value={cep}
                  onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  className="flex-1 h-[44px] px-3 border border-[#E0E0E0] rounded-[var(--radius-sm)] text-[14px] focus:outline-none focus:border-[var(--pink)]"
                />
                <button 
                  type="submit"
                  className="h-[44px] px-4 bg-white border border-[var(--pink)] text-[var(--pink)] font-bold text-[13px] rounded-[var(--radius-sm)] hover:bg-[var(--pink-light)] transition-colors"
                >
                  Calcular
                </button>
              </form>
              
              {shippingResult && (
                <div className="mt-3 pt-3 border-t border-[var(--border)] flex justify-between items-center text-[13px]">
                  <div className="flex flex-col">
                    <span className="font-bold text-[var(--text-dark)]">Sedex</span>
                    <span className="text-[var(--text-mid)]">Até {shippingResult.days} dias úteis</span>
                  </div>
                  <span className="font-bold text-[var(--green)]">
                    R$ {shippingResult.price}
                  </span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-[var(--border)] gap-2">
              {[
                { id: 'premium', text: 'linha premium', icon: Star },
                { id: 'veganos', text: '100% veganos', icon: Feather },
                { id: 'cruelty', text: 'cruelty free', icon: Heart },
                { id: 'nacional', text: '100% nacional', icon: Map },
              ].map((emblem) => (
                <div key={emblem.id} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0 relative flex items-center justify-center bg-white rounded-full">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
                    <path d="M 81.6, 35 A 35,35 0 1,1 18.4, 35" fill="none" stroke="#1A1A1A" strokeWidth="1" />
                    <path id={`curve-${emblem.id}`} d="M 13,50 a 37,37 0 1,1 74,0" fill="none" />
                    <text fontSize="8.5" fontWeight="600" fill="#1A1A1A" letterSpacing="0.05em">
                      <textPath href={`#curve-${emblem.id}`} startOffset="50%" textAnchor="middle">
                        {emblem.text}
                      </textPath>
                    </text>
                  </svg>
                  <emblem.icon className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A] relative z-10 mt-1" strokeWidth={1.5} />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BLOCO 5: BARRA DE BENEFÍCIOS */}
        <section className="bg-[var(--pink-light)] py-12 px-4 mt-8">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-[22px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-8">
              Por que os groomers amam o Pineapple Essential?
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-[var(--radius-md)] p-4 text-center hover:scale-[1.03] hover:shadow-md transition-all flex flex-col items-center">
                <Shield className="w-8 h-8 mb-3 text-[var(--pink)]" strokeWidth={1.5} />
                <h3 className="font-bold text-[13px] text-[var(--text-dark)] mb-1">Elimina odores</h3>
                <p className="text-[11px] text-[var(--text-mid)]">Sem mascarar, neutraliza na raiz</p>
              </div>
              <div className="bg-white rounded-[var(--radius-md)] p-4 text-center hover:scale-[1.03] hover:shadow-md transition-all flex flex-col items-center">
                <Droplet className="w-8 h-8 mb-3 text-[var(--pink)]" strokeWidth={1.5} />
                <h3 className="font-bold text-[13px] text-[var(--text-dark)] mb-1">Hidratação intensa</h3>
                <p className="text-[11px] text-[var(--text-mid)]">Deoplex Clear + antioxidantes</p>
              </div>
              <div className="bg-white rounded-[var(--radius-md)] p-4 text-center hover:scale-[1.03] hover:shadow-md transition-all flex flex-col items-center">
                <Star className="w-8 h-8 mb-3 text-[var(--pink)]" strokeWidth={1.5} />
                <h3 className="font-bold text-[13px] text-[var(--text-dark)] mb-1">Brilho e maciez</h3>
                <p className="text-[11px] text-[var(--text-mid)]">Pelo sedoso desde a 1ª lavagem</p>
              </div>
              <div className="bg-white rounded-[var(--radius-md)] p-4 text-center hover:scale-[1.03] hover:shadow-md transition-all flex flex-col items-center">
                <Sun className="w-8 h-8 mb-3 text-[var(--pink)]" strokeWidth={1.5} />
                <h3 className="font-bold text-[13px] text-[var(--text-dark)] mb-1">Extrato tropical</h3>
                <p className="text-[11px] text-[var(--text-mid)]">Ação antioxidante natural</p>
              </div>
              <div className="bg-white rounded-[var(--radius-md)] p-4 text-center hover:scale-[1.03] hover:shadow-md transition-all col-span-2 md:col-span-1 flex flex-col items-center">
                <Layers className="w-8 h-8 mb-3 text-[var(--pink)]" strokeWidth={1.5} />
                <h3 className="font-bold text-[13px] text-[var(--text-dark)] mb-1">Diluição 1:5</h3>
                <p className="text-[11px] text-[var(--text-mid)]">5L viram 30L prontos</p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 6: ACCORDIONS */}
        <section className="max-w-[800px] mx-auto px-4 py-16">
          <h2 className="text-[20px] md:text-[24px] font-[800] text-[var(--text-dark)] mb-6 text-center">
            Tudo sobre o produto
          </h2>
          
          <div className="border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden bg-white">
            
            {/* Accordion 1: Descrição */}
            <div className="border-b border-[var(--border)]">
              <button 
                onClick={() => toggleAccordion(1)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[15px] text-[var(--text-dark)] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[var(--pink)]" /> Descrição
                </span>
                {openAccordion === 1 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed space-y-4">
                  <p>O Shampoo Neutralizador Pineapple Essential é uma edição especial da linha Essential, desenvolvido para proporcionar limpeza eficiente da pelagem enquanto auxilia na redução dos odores indesejados.</p>
                  <p>Sua fórmula atua diretamente nas principais fontes de mau cheiro, como umidade, sebo e sujeira, ajudando a neutralizar odores sem apenas mascará-los. Com nova fórmula, oferece maior formação de espuma, facilitando a distribuição do produto na pelagem e proporcionando um banho mais prático e confortável para o profissional.</p>
                  <p>Sua fragrância Pineapple (abacaxi) traz uma experiência olfativa marcante e refrescante, deixando os pets perfumados por mais tempo e transformando o banho em um momento ainda mais agradável.</p>
                  <p>Ideal para uso na rotina de banho e tosa, promove limpeza eficiente, sensação de frescor e pelagem macia, com o diferencial de uma fragrância tropical exclusiva desta edição especial.</p>
                </div>
              )}
            </div>

            {/* Accordion 2: Benefícios */}
            <div className="border-b border-[var(--border)]">
              <button 
                onClick={() => toggleAccordion(2)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[15px] text-[var(--text-dark)] flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--pink)]" /> Benefícios
                </span>
                {openAccordion === 2 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Neutraliza odores da pelagem, atuando nas principais fontes de mau cheiro</li>
                    <li>Nova fórmula com maior formação de espuma, facilitando o banho</li>
                    <li>Fragrância marcante de abacaxi (Pineapple), com sensação tropical e refrescante</li>
                    <li>Limpeza eficiente sem agredir a pele e os pelos</li>
                    <li>Deixa a pelagem macia, leve e perfumada por mais tempo</li>
                    <li>Facilita a aplicação e distribuição do produto na pelagem</li>
                    <li>Ideal para a rotina profissional de banho e tosa</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Modo de uso */}
            <div className="border-b border-[var(--border)]">
              <button 
                onClick={() => toggleAccordion(3)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[15px] text-[var(--text-dark)] flex items-center gap-2">
                  <List className="w-4 h-4 text-[var(--pink)]" /> Modo de uso
                </span>
                {openAccordion === 3 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed">
                  <p>Dilua uma porção de shampoo para cinco porções de água, misturando com movimentos circulares até a diluição total. Com um frasco diluidor, aplique o produto e, com as mãos, massageie os pelos até formar uma rica espuma. Após a limpeza, remova totalmente a espuma dos pelos.</p>
                </div>
              )}
            </div>

            {/* Accordion 4: Composição */}
            <div className="border-b border-[var(--border)] last:border-0">
              <button 
                onClick={() => toggleAccordion(4)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[15px] text-[var(--text-dark)] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[var(--pink)]" /> Composição
                </span>
                {openAccordion === 4 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 4 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed">
                  <p className="uppercase text-xs leading-relaxed">ÁGUA, LAURILSULFATO DE SÓDIO, COCOAMIDOPROPILBETAÍNA, DIETANOLAMINA COCAMIDA, FRAGRÂNCIA, PEG-90M, DIESTEARATO DE PEG-150, POLIQUATÉRNIO-7, EDETATO DISSÓDICO, METILCLOROISOTIAZOLINONA E METILISOTIAZOLINONA, HEXIL CINAMAL, LIMONENO, ÁCIDO CÍTRICO, LINALOL, CORANTE AMARELO DE TARTRAZINA 19140.</p>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* BLOCO 7: SEÇÃO ANTES/DEPOIS */}
        <section className="bg-[#F9F9F9] py-16 px-4">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-center text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-10">
              Com vs. Sem o Pineapple Essential
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Sem o produto */}
              <div className="bg-[#FFEBEE] border border-[#FFCDD2] rounded-[var(--radius-lg)] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Frown className="w-8 h-8 text-[#C62828]" strokeWidth={1.5} />
                  <h3 className="text-[#C62828] font-[800] text-[16px] tracking-wide">SEM O PRODUTO</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#B71C1C] text-[15px]">Odor volta em poucas horas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#B71C1C] text-[15px]">Pelo ressecado e sem brilho</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#B71C1C] text-[15px]">Shampoo comum mascara, não elimina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#B71C1C] text-[15px]">Baixo rendimento = custo alto</span>
                  </li>
                </ul>
              </div>

              {/* Com o produto */}
              <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded-[var(--radius-lg)] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Smile className="w-8 h-8 text-[#2E7D32]" strokeWidth={1.5} />
                  <h3 className="text-[#2E7D32] font-[800] text-[16px] tracking-wide">COM PINEAPPLE ESSENTIAL</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#1B5E20] text-[15px] font-medium">Odor neutralizado na raiz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#1B5E20] text-[15px] font-medium">Pelo macio, brilhante e hidratado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#1B5E20] text-[15px] font-medium">Tecnologia Deoplex Clear comprovada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#1B5E20] text-[15px] font-medium">30L prontos com apenas 5L concentrado</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCO 8: BUNDLE "COMPRE JUNTO" */}
        <section className="max-w-[1000px] mx-auto px-4 py-16">
          <div className="bg-[var(--yellow-light)] border-2 border-dashed border-[var(--amber)] rounded-[var(--radius-lg)] p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-2 flex items-center justify-center gap-3">
                <Gift className="w-8 h-8 text-[var(--orange)]" /> Kit Neutralizador Completo
              </h2>
              <p className="text-[15px] text-[var(--text-mid)]">
                O combo favorito dos groomers profissionais
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                <div className="w-24 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 text-[var(--pink)]">
                  <Sun className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-bold text-[var(--text-dark)]">Shampoo Pineapple 5L</p>
              </div>
              <div className="text-2xl font-bold text-[var(--orange)] hidden md:block">+</div>
              <div className="text-2xl font-bold text-[var(--orange)] md:hidden">+</div>
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                <div className="w-24 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 text-[var(--pink)]">
                  <Droplet className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-bold text-[var(--text-dark)]">Condicionador Essential 5L</p>
              </div>
              <div className="text-2xl font-bold text-[var(--orange)] hidden md:block">+</div>
              <div className="text-2xl font-bold text-[var(--orange)] md:hidden">+</div>
              <div className="flex flex-col items-center text-center w-full md:w-1/3">
                <div className="w-24 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 text-[var(--pink)]">
                  <Wind className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-bold text-[var(--text-dark)]">Deo Colônia Pineapple 500ml</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <span className="text-[14px] text-[#BBB] line-through mb-1">R$ 341,70</span>
                <div className="flex items-center gap-3">
                  <span className="text-[32px] font-[900] text-[var(--text-dark)] leading-none">R$ 289,90</span>
                  <span className="bg-[var(--orange)] text-white text-[11px] font-bold px-2 py-1 rounded-md">
                    Economize R$ 51,80
                  </span>
                </div>
              </div>
              
              <button className="w-full md:w-auto px-8 py-4 bg-[var(--orange)] hover:bg-[#d84b00] text-white font-[800] text-[16px] rounded-[10px] transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Adicionar Kit ao Carrinho
              </button>
            </div>
          </div>
        </section>

        {/* BLOCO 9: SEÇÃO DE REVIEWS */}
        <section id="reviews" className="bg-[var(--pink-light)] py-16 px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-center text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-8">
              O que os groomers estão dizendo
            </h2>

            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[52px] font-[900] text-[var(--text-dark)] leading-none">4.9</span>
                <div className="flex flex-col">
                  <div className="flex text-[#F4A522] mb-1">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[13px] text-[var(--text-mid)]">87 avaliações verificadas</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button className="px-4 py-2 bg-white border border-[var(--pink)] text-[var(--pink)] rounded-full text-[13px] font-bold">Todos</button>
              <button className="px-4 py-2 bg-white border border-transparent text-[var(--text-mid)] hover:bg-gray-50 rounded-full text-[13px] font-medium transition-colors">5 estrelas</button>
              <button className="px-4 py-2 bg-white border border-transparent text-[var(--text-mid)] hover:bg-gray-50 rounded-full text-[13px] font-medium transition-colors">4 estrelas</button>
              <button className="px-4 py-2 bg-white border border-transparent text-[var(--text-mid)] hover:bg-gray-50 rounded-full text-[13px] font-medium transition-colors">Com foto</button>
            </div>

            <div className="space-y-3 mb-8">
              {/* Review 1 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Camila R.</span>
                      <span className="bg-[var(--pink-light)] text-[var(--pink-dark)] text-[10px] font-bold px-2 py-0.5 rounded-full">Pet Shop Fofo Pata · SP</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">15/03/2025</span>
                </div>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed mb-3">
                  &quot;Uso há 8 meses no meu pet shop e não troco por nada. O odor some de verdade, não é aquela coisa de mascarar com perfume. A diluição 1:5 rende absurdamente bem — um frasco de 5L dura quase 2 meses no meu volume de atendimento. Recomendo demais para qualquer groomer.&quot;
                </p>
                <div className="text-[12px] text-[var(--text-light)] flex items-center gap-1">
                  <Heart className="w-3 h-3" /> Usa em Spitz, Golden Retriever e Shih-tzu
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Marcos T.</span>
                      <span className="bg-[var(--pink-light)] text-[var(--pink-dark)] text-[10px] font-bold px-2 py-0.5 rounded-full">Groomer Certificado · RJ</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">02/03/2025</span>
                </div>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed mb-3">
                  &quot;O pelo fica sedoso desde a primeira lavagem. Meus clientes percebem a diferença e sempre perguntam o que eu usei. O cheiro de abacaxi é suave e agradável, dura horas depois do banho. Melhor neutralizador que já usei em 12 anos de profissão.&quot;
                </p>
                <div className="text-[12px] text-[var(--text-light)] flex items-center gap-1">
                  <Heart className="w-3 h-3" /> Golden Retriever e Labrador
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Juliana F.</span>
                      <span className="bg-[var(--pink-light)] text-[var(--pink-dark)] text-[10px] font-bold px-2 py-0.5 rounded-full">Tutora · MG</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">20/02/2025</span>
                </div>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed mb-3">
                  &quot;Uso em casa no meu Golden. Deixou os pelos dos meus cachorrinhos muito cheirosos e limpinhos, ficou bastante sedoso. Super aprovado e recomendo bastante! Já comprei 3 vezes.&quot;
                </p>
                <div className="text-[12px] text-[var(--text-light)] flex items-center gap-1">
                  <Heart className="w-3 h-3" /> Golden Retriever
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-3 border-2 border-[var(--pink)] text-[var(--pink)] font-bold rounded-full hover:bg-white transition-colors">
                Ver todas as 87 avaliações ›
              </button>
            </div>
          </div>
        </section>

        {/* BLOCO 10.5: VIDEO CAROUSEL */}
        <section className="py-16 px-4 overflow-hidden bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-10">
              Veja nossos produtos em ação
            </h2>
            
            <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {[
                {
                  id: 1,
                  videoThumbnail: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop",
                  productImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
                  title: "SHAMPOO PET REALÇADOR DE COR PRO (EGO) 1L (1:10)",
                  oldPrice: "R$ 149,90",
                  newPrice: "R$ 119,90"
                },
                {
                  id: 2,
                  videoThumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop",
                  productImage: "https://images.unsplash.com/photo-1586445580980-08080211283e?q=80&w=800&auto=format&fit=crop",
                  title: "KIT PET TEXTURIZADOR PRO (EGO) (4 ITENS)",
                  oldPrice: "R$ 518,90",
                  newPrice: "R$ 440,90"
                },
                {
                  id: 3,
                  videoThumbnail: "https://images.unsplash.com/photo-1537151608804-ea6f1184cfe8?q=80&w=600&auto=format&fit=crop",
                  productImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
                  title: "BASIQ KIT BLUEBERRY PET [KIT 3 PRODUTOS]",
                  oldPrice: "R$ 599,90",
                  newPrice: "R$ 359,90",
                  isActive: true // Para simular o card central maior
                },
                {
                  id: 4,
                  videoThumbnail: "https://images.unsplash.com/photo-1587300003388-59208cb962cb?q=80&w=600&auto=format&fit=crop",
                  productImage: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=800&auto=format&fit=crop",
                  title: "SHAMPOO PET NEUTRO ESSENTIAL 5L (1:5)",
                  oldPrice: "R$ 245,90",
                  newPrice: "R$ 195,90"
                },
                {
                  id: 5,
                  videoThumbnail: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=600&auto=format&fit=crop",
                  productImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
                  title: "KIT PET COMPLETO PRO",
                  oldPrice: "R$ 1.523,90",
                  newPrice: "R$ 1.447,90"
                }
              ].map((item) => (
                <div 
                  key={item.id} 
                  className={`flex-shrink-0 snap-center flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 cursor-pointer hover:shadow-md ${item.isActive ? 'w-[300px] md:w-[340px] scale-[1.02] shadow-lg border-[var(--pink-light)]' : 'w-[260px] md:w-[280px] hover:scale-[1.01]'}`}
                >
                  {/* Video Area */}
                  <div className={`relative w-full ${item.isActive ? 'aspect-[9/16]' : 'aspect-[3/4]'} bg-gray-200 overflow-hidden`}>
                    <Image 
                      src={item.videoThumbnail} 
                      alt="Video thumbnail" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay gradient for better icon visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    
                    {/* View count indicator */}
                    <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      1.00M
                    </div>

                    {/* Mute icon */}
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                      <VolumeX className="w-4 h-4" />
                    </button>
                    
                    {/* Play icon overlay if not active */}
                    {!item.isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Info Area */}
                  <div className="p-4 flex gap-3 items-center bg-white">
                    <div className="w-12 h-12 relative flex-shrink-0 bg-gray-50 rounded-md border border-gray-100 overflow-hidden">
                      <Image 
                        src={item.productImage} 
                        alt={item.title} 
                        fill 
                        className="object-contain p-1"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[11px] font-bold text-[var(--text-dark)] leading-tight mb-1 line-clamp-2 uppercase">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[var(--text-light)] line-through">{item.oldPrice}</span>
                        <span className="text-[12px] font-black text-black">{item.newPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 11: PRODUTOS RELACIONADOS */}
        <section className="bg-[#F9F9F9] py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-10">
              Você também vai gostar
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'Shampoo Neutralizador Basiq 5L', desc: 'Diluição 1:4', price: 'R$149,90', emoji: '🧴' },
                { name: 'Condicionador Essential 5L', desc: 'Para todas as pelagens', price: 'R$139,90', emoji: '💆' },
                { name: 'Deo Colônia Pineapple 500ml', desc: 'Fragrância prolongada', price: 'R$59,90', emoji: '🌸' }
              ].map((prod, idx) => (
                <div key={idx} className="bg-white rounded-[var(--radius-md)] p-4 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-transparent hover:border-[var(--pink-light)] flex flex-col items-center text-center">
                  <div className="w-full aspect-square bg-[var(--yellow-light)] rounded-xl mb-4 flex items-center justify-center text-5xl">
                    {prod.emoji}
                  </div>
                  <h3 className="font-bold text-[14px] text-[var(--text-dark)] mb-1 line-clamp-2">{prod.name}</h3>
                  <p className="text-[12px] text-[var(--text-mid)] mb-3">{prod.desc}</p>
                  <span className="font-[900] text-[16px] text-[var(--pink)] mt-auto">{prod.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 12: NOSSAS LINHAS */}
        <section className="py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-10">
              Conheça nossas linhas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Linha Pro', desc: 'Performance superior para profissionais exigentes.', image: 'https://www.bubbles.com.br/cdn/shop/files/logo-bubbles-pro.png?v=1756150663&width=200', color: 'bg-black', textColor: 'text-white', descColor: 'text-gray-300' },
                { name: 'Linha Essential', desc: 'Hidratação e cuidado premium para o dia a dia.', image: 'https://www.bubbles.com.br/cdn/shop/files/logo-bubbles-essential.png?v=1756150690&width=200', color: 'bg-[#FDF0F6]', textColor: 'text-[#E6007E]', descColor: 'text-[var(--text-mid)]' },
                { name: 'Linha Xperience', desc: 'Experiência sensorial única e resultados incríveis.', image: 'https://www.bubbles.com.br/cdn/shop/files/logo-bubbles-xperience.png?v=1756150984&width=200', color: 'bg-[#FFF8E1]', textColor: 'text-[#F57C00]', descColor: 'text-[var(--text-mid)]' },
                { name: 'Linha Collora', desc: 'Cores vibrantes e proteção para pelagens tingidas.', image: 'https://www.bubbles.com.br/cdn/shop/files/logo-bubbles-collora.png?v=1756150931&width=200', color: 'bg-[#E3F2FD]', textColor: 'text-[#1976D2]', descColor: 'text-[var(--text-mid)]' }
              ].map((linha, idx) => (
                <div key={idx} className={`${linha.color} rounded-[var(--radius-lg)] p-8 text-center hover:-translate-y-2 transition-transform cursor-pointer shadow-sm flex flex-col items-center`}>
                  <div className="h-16 mb-4 relative w-full flex justify-center items-center">
                    <Image src={linha.image} alt={linha.name} fill className="object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className={`text-xl font-black mb-3 ${linha.textColor}`}>{linha.name}</h3>
                  <p className={`${linha.descColor} text-sm leading-relaxed`}>{linha.desc}</p>
                  <button className={`mt-6 px-6 py-2 rounded-full border-2 border-current ${linha.textColor} font-bold text-sm hover:bg-white/20 transition-colors`}>
                    Ver produtos
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 13: FAQ */}
        <section className="bg-white max-w-[800px] mx-auto px-4 py-16">
          <h2 className="text-center text-[24px] md:text-[28px] font-[800] text-[var(--text-dark)] mb-8">
            Perguntas frequentes
          </h2>
          
          <div className="space-y-3">
            {[
              {
                q: "Qual a diferença entre o Neutralizador Pineapple e o Neutralizador Essential tradicional?",
                a: "A principal diferença está na fragrância e na formulação da edição especial. O Neutralizador Pineapple possui fragrância marcante de abacaxi, além de nova fórmula com maior formação de espuma, proporcionando uma experiência de banho ainda mais sensorial. A função de neutralizar odores da pelagem continua a mesma."
              },
              {
                q: "O Neutralizador Pineapple substitui o Neutralizador Essential tradicional?",
                a: "Não. Ele é uma edição especial da linha Essential, criada como uma opção diferenciada de fragrância e experiência no banho."
              },
              {
                q: "A diluição é a mesma do Neutralizador Essential?",
                a: "Sim. A diluição recomendada é 1 parte de shampoo para 5 partes de água."
              },
              {
                q: "Ele realmente neutraliza odores ou apenas perfuma?",
                a: "O produto foi desenvolvido para auxiliar na redução dos odores da pelagem, atuando nas principais fontes de mau cheiro, como umidade, sebo e sujeira, além de deixar uma fragrância agradável."
              },
              {
                q: "A fragrância de abacaxi é muito forte?",
                a: "A fragrância foi desenvolvida para ser marcante e agradável, trazendo uma sensação tropical e refrescante após o banho."
              },
              {
                q: "Pode ser usado em cães e gatos?",
                a: "Sim, o produto pode ser utilizado em cães e gatos, respeitando sempre as recomendações de uso."
              },
              {
                q: "Pode ser usado em qualquer tipo de pelagem?",
                a: "Sim. O shampoo foi desenvolvido para uso em diferentes tipos de pelagem, promovendo limpeza e sensação de frescor."
              },
              {
                q: "Posso usar em filhotes?",
                a: "Não recomendamos para filhotes com menos de 4 semanas de vida. Para filhotes entre 4 semanas e 3 meses, recomendamos consultar seu médico veterinário antes do uso."
              },
              {
                q: "Posso guardar o produto já diluído?",
                a: "Não. Após a diluição, o produto deve ser usado em até 24 horas. Sempre lave o frasco diluidor antes de preparar uma nova quantidade. O produto concentrado (não diluído) tem validade normal de 24 meses."
              },
              {
                q: "Qual a diferença entre a linha Essential e a linha Basiq?",
                a: "A linha Essential combina Deoplex Clear com Extrato de Frutas Tropicais, oferecendo hidratação intensa e ação antioxidante superior. A linha Basiq usa tecnologia Sniff Tech com Booster de Espuma, com foco na limpeza profunda. Ambas são neutralizadoras de odores — a Essential tem ação hidratante premium."
              },
              {
                q: "Qual a validade do produto?",
                a: "O produto tem validade de 24 meses a partir da data de fabricação impressa na embalagem, desde que conservado em local fresco e ao abrigo da luz."
              },
              {
                q: "Os produtos são testados em animais?",
                a: "Não! Somos uma marca 100% cruelty-free. Nossos produtos não são testados em animais em nenhuma etapa da produção."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden bg-white">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-bold text-[15px] text-[var(--text-dark)] pr-4">
                    {faq.q}
                  </span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[var(--pink)] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)] flex-shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-[14px] text-[var(--text-mid)] leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FULLSCREEN MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={() => setIsFullscreen(false)}>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsFullscreen(false); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-10 text-white/70 hover:text-[var(--pink)] transition-colors bg-black/50 p-3 rounded-full z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl h-[60vh] md:h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={images[mainImage].url} 
              alt={images[mainImage].alt}
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-10 text-white/70 hover:text-[var(--pink)] transition-colors bg-black/50 p-3 rounded-full z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* BLOCO 12: STICKY ADD TO CART */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:px-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-[999] transition-transform duration-300 flex items-center justify-between ${isStickyVisible ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md overflow-hidden relative border border-gray-100 hidden sm:block">
            <Image src={images[0].url} alt="Produto" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-[700] text-[var(--text-dark)] line-clamp-1">Shampoo Pineapple Essential 5L</span>
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-[900] text-black leading-none">R$ 206,90</span>
              <span className="text-[10px] text-[#666] bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1"><CashbackIcon className="w-3 h-3" /> +R$ 10,34 cashback</span>
            </div>
          </div>
        </div>
        <button className="bg-[#25D366] hover:bg-[#1DA851] text-white font-[900] uppercase tracking-wide text-[14px] md:text-[16px] py-2 md:py-3 px-6 md:px-8 rounded-[var(--radius-md)] flex items-center gap-2 transition-all hover:scale-[1.05] active:scale-[0.98] animate-strong-pulse shadow-[0_0_20px_rgba(37,211,102,0.8)]">
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden md:inline">Comprar agora</span>
          <span className="md:hidden">Comprar</span>
        </button>
      </div>

      {/* FIM DA PÁGINA */}
      <ul style={{ display: 'none' }}>
        <li>Notas para o desenvolvedor Shopify:</li>
        <li>- Substituir hardcoded prices por {"{{ product.price | money }}"} e {"{{ product.compare_at_price | money }}"}</li>
        <li>- Substituir imagens por loop em product.images</li>
        <li>- App recomendado para Reviews: Loox ou Judge.me</li>
        <li>- App recomendado para Bundle: Frequently Bought Together</li>
        <li>- Lógica de rendimento deve usar metafields ou tags para identificar diluição (ex: product.metafields.custom.dilution_ratio)</li>
        <li>- O Sticky ATC pode ser implementado nativamente no tema Dawn ou via app (ex: Sticky Add To Cart BOOSTER)</li>
      </ul>
    </div>
  );
}
