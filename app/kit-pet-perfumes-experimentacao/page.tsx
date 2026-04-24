'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Check, ChevronDown, ChevronUp, Plus, Minus, Menu, Search, User, RefreshCcw, Feather, Heart, Map, Shield, Droplet, Sun, Layers, Award, Scissors, Truck, Frown, X, Smile, Gift, Wind, FileText, List, Activity, HelpCircle, Maximize2, ChevronLeft, ChevronRight, VolumeX } from 'react-feather';
import { RotateCcw, ShieldCheck, CreditCard, Headset, Clock, Users, Heart as HeartLucide, Package, Star as StarLucide } from 'lucide-react';
import { motion } from 'framer-motion';

const CarouselWrapper = ({ children, carouselRef, hideArrows }: { children: React.ReactNode, carouselRef: React.RefObject<HTMLDivElement | null>, hideArrows?: boolean }) => {
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {!hideArrows && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      {children}
    </div>
  );
};

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

export default function ProdutoClonado() {
  const [mainImage, setMainImage] = useState(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const addToCartRef = useRef<HTMLButtonElement>(null);
  const statsCarouselRef = useRef<HTMLDivElement>(null);

  const price = 169.90;
  const regularPrice = 199.90;
  const discountPercentage = Math.round((1 - price / regularPrice) * 100);

  const [deliveryDates, setDeliveryDates] = useState({ min: '', max: '' });

  useEffect(() => {
    const today = new Date();
    const dateMin = new Date(today);
    dateMin.setDate(today.getDate() + 2);
    const dateMax = new Date(today);
    dateMax.setDate(today.getDate() + 10);

    const formatDateLong = (date: Date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleDateString('pt-BR', { month: 'long' }).toLowerCase();
      return `${day} de ${month}`;
    };

    setDeliveryDates({
      min: formatDateLong(dateMin),
      max: formatDateLong(dateMax)
    });
  }, []);

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
    { url: 'https://www.bubbles.com.br/cdn/shop/files/e853207538f4657d2a910faf993fec05.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Capa' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/33dffdf4f9810a31be8ea7aef944a14b.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 2' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/f8c5b9c6b26d27ff9400171385b25c08.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 3' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/1d1f692a6a7bb45543eed46517b6473a.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 4' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/2a7bcc50f6a56561c54bd070b4169f31.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 5' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/efde3f7f691a2d9091d28e950ea727cf.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 6' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/aa91885b5323a988c6009db8f409b1e5.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 7' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/d22be81b816cfd4728d502f65d85fff2.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 8' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/5e89e64a5f9c2cbb584d23446c993789.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 9' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/259dc6c59ead144cfff6d5117bc6e710.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 10' },
    { url: 'https://www.bubbles.com.br/cdn/shop/files/dd30b31a67f0d4d9029b8f618125cf50.jpg?v=1744823039&width=1100', alt: 'Kit Pet Perfumes de Experimentação - Imagem 11' }
  ];

  const remainingReviews = [
    { name: "Marcia Regina Pereira de Azevedo Azevedo", date: "30/07/2025", title: "Eu gostei", text: "Eu gostei ,pois já uso nos pets a algum tempo.", rating: 5 },
    { name: "Jadenilton Cruz Araújo", date: "19/07/2025", title: "Produto bom", text: "Produto bom e de boa qualidade", rating: 5 },
    { name: "Cássia", date: "12/07/2025", title: "Perfeito", text: "Perfeito", rating: 5 },
    { name: "Thiago", date: "28/06/2025", title: "Fantástico", text: "Fantástico", rating: 5 },
    { name: "Anônimo", date: "15/06/2025", title: "Cheirosos, mas alguns não valem a pena l.", text: "Foi bom comprar o kit pois assim posso afirmar para vocês que os mais cheirosos são:<br/>- Puppy<br/>- Jabuticaba<br/>- cappucino<br/>- Brave<br/>Alguns tem um cheiro muito fraco, não fixa. Me decepcionei com o candy.<br/>Fiz uma compra grande e não veio o brinde prometido, fiquei chateada kkkkkk", rating: 4 },
    { name: "Thaina Rodrigues", date: "13/06/2025", title: "Um melhor do que o outro!", text: "Um melhor do que o outro!", rating: 5 },
    { name: "Sandra", date: "06/06/2025", title: "Cheirinho bem marcante , o Pet volta na outra semana ainda com o cheiro do perfume ❤️", text: "Cheirinho bem marcante , o Pet volta na outra semana ainda com o cheiro do perfume ❤️", rating: 5 },
    { name: "Gisele", date: "23/05/2025", title: "Os perfumes são um mais gostoso que o outro,eles duram quase a semana toda no pet.", text: "Os perfumes são um mais gostoso que o outro,eles duram quase a semana toda no pet.", rating: 5 },
    { name: "Eliana S", date: "20/05/2025", title: "ótimo", text: "Excelente!", rating: 5 },
    { name: "Jessica", date: "10/05/2025", title: "Todos os perfumes são marcantes", text: "Todos os perfumes são marcantes", rating: 5 },
    { name: "Maria", date: "04/05/2025", title: "Perfume maravilhosos", text: "Perfume maravilhosos", rating: 5 },
    { name: "Marisa", date: "28/04/2025", title: "Alguns deles eu não compraria , mas alguns sim são bons.", text: "Alguns deles eu não compraria , mas alguns sim são bons.", rating: 4 },
    { name: "Marina", date: "27/04/2025", title: "Estou ainda restando", text: "Estou ainda restando", rating: 5 },
    { name: "Thyane", date: "27/04/2025", title: "Amo todos uso e super recomendo", text: "Amo todos uso e super recomendo", rating: 5 },
    { name: "PRISCILA", date: "26/04/2025", title: "Excelente... Os perfumes são maravilhosos", text: "Excelente... Os perfumes são maravilhosos", rating: 5 },
    { name: "Gabriela", date: "26/04/2025", title: "Ótimas fragrâncias, super feliz com minha aquisição. Meus clientes cheirosos, como merecem estar.", text: "Ótimas fragrâncias, super feliz com minha aquisição. Meus clientes cheirosos, como merecem estar.", rating: 5 },
    { name: "OAYANNA", date: "24/04/2025", title: "Bom rendimento, cheiro bem agradável e pelo bem macio.", text: "Bom rendimento, cheiro bem agradável e pelo bem macio.", rating: 5 },
    { name: "Vilma", date: "16/04/2025", title: "Perfumes tem uma duração excelente e são super cheirosos", text: "Perfumes tem uma duração excelente e são super cheirosos", rating: 5 },
    { name: "Ana", date: "14/04/2025", title: "Coleção perfeição colonias de ótima fixação ds p conhecer todas fragrâncias e pedir as maiores ,o...", text: "Coleção perfeição colonias de ótima fixação ds p conhecer todas fragrâncias e pedir as maiores ,o pedido chegou logo muito bem embalado amei recomendo !!", rating: 5 },
    { name: "Avaline", date: "05/04/2025", title: "Perfumes excelentes, ótima fixação 😍❤️", text: "Perfumes excelentes, ótima fixação 😍❤️", rating: 5 },
    { name: "Daniela Aparecida", date: "31/03/2025", title: "Aroma maravilhosos e inesquecíveis 🥰🫶", text: "Aroma maravilhosos e inesquecíveis 🥰🫶", rating: 5 },
    { name: "Maria Juliana", date: "31/03/2025", title: "Ótimos", text: "Ótimos", rating: 5 },
    { name: "Manuela", date: "29/03/2025", title: "Produto extremamente cheiroso, fixação ótima", text: "Produto extremamente cheiroso, fixação ótima", rating: 5 },
    { name: "Thais Aparecida", date: "25/03/2025", title: "Achei alguns perfumes com a fixação um pouco mais fraca que outros mas as fragrâncias são boas", text: "Achei alguns perfumes com a fixação um pouco mais fraca que outros mas as fragrâncias são boas", rating: 4 },
    { name: "Geanine", date: "15/03/2025", title: "Maravilhosos muito cheirosos", text: "Maravilhosos muito cheirosos", rating: 5 },
    { name: "Maria", date: "04/03/2025", title: "Muito bom", text: "Muito bom", rating: 5 },
    { name: "CHARLIES Giovani", date: "05/01/2025", title: "Perfumes maravilhosos", text: "Perfumes maravilhosos", rating: 5 },
    { name: "Nilza", date: "01/01/2025", title: "Ótimo", text: "Ótimo", rating: 5 }
  ];

  return (
    <div className="font-poppins text-black bg-white min-h-screen relative pb-20 md:pb-0">
      {/* SEO & STRUCTURED DATA (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "KIT PET PERFUMES DE EXPERIMENTAÇÃO",
              "image": ["https://www.bubbles.com.br/cdn/shop/files/e853207538f4657d2a910faf993fec05.jpg?v=1744823039&width=1100"],
              "description": "Explore as nossas fragrâncias mais desejadas com o Kit Pet Perfumes de Experimentação da Bubbles.",
              "sku": "BUB-PERFUMES-EXP",
              "mpn": "BUB-PERFUMES-EXP",
              "brand": { "@type": "Brand", "name": "Bubbles Pet" },
              "offers": {
                "@type": "Offer",
                "url": "https://bubblespet.com.br/products/kit-pet-perfumes-experimentacao",
                "priceCurrency": "BRL",
                "price": price.toString(),
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "33"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quais fragrâncias acompanham o Kit Pet Perfumes de Experimentação?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O kit inclui 10 fragrâncias icônicas de 30ml cada: Brave, Candy, Cacau com Cereja, Child, Chocolate Belga, Impera, Jabuticaba, Macadâmia, Puppy e Ultra."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qual o rendimento do kit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O kit tem um excelente rendimento de aproximadamente 1.200 borrifadas, com um custo baixíssimo por banho (R$ 0,14)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pode ser utilizado em gatos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, as fragrâncias são adequadas para uso em cães e gatos de todas as raças a partir de 4 semanas de vida."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Os perfumes têm boa fixação?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim! A nossa assinatura olfativa possui fragrâncias em classe Eau de Parfum, proporcionando fixação de até 7 dias na pelagem do pet."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://bubblespet.com.br/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Kits",
                  "item": "https://bubblespet.com.br/collections/kits"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Kit Pet Perfumes de Experimentação",
                  "item": "https://bubblespet.com.br/products/kit-pet-perfumes-experimentacao"
                }
              ]
            }
          ])
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --pink: #f4cdd4;
          --pink-dark: #eec0c9;
          --pink-light: #fdf0f6;
          --orange: #e65100;
          --yellow-light: #fff8e7;
          --amber: #ffe082;
          --green: #2db85a;
          --text-dark: #1a1a1a;
          --text-mid: #555555;
          --text-light: #999999;
          --border: #f0f0f0;
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 16px;
          --radius-xl: 20px;
        }

        /* CRITICAL CSS: ABOVE THE FOLD */
        .hero-gallery { min-height: 450px; contain: layout; }
        .buy-box { contain: content; }
        header { transform: translateZ(0); will-change: transform; transition: box-shadow 0.3s ease; }
        
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

        /* Esconder rodapé global apenas para esta landing page */
        footer {
            display: none !important;
        }
      `}} />



      <div>
        {/* BLOCO 3: BREADCRUMB */}
        <div className="max-w-[1200px] mx-auto px-4 py-3 text-[11px] text-[var(--text-mid)] flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="#" className="hover:text-[var(--pink)]">Início</Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-[var(--pink)]">Kits</Link>
          <span>&gt;</span>
          <span className="text-black">Kit Pet Perfumes de Experimentação</span>
        </div>

        {/* BLOCO 4: HERO SECTION */}
        <section className="max-w-[1200px] mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-12">

          {/* GALERIA */}
          <div className="flex flex-col md:flex-row gap-4 md:sticky md:top-24 self-start">

            {/* Thumbnails (Left on desktop, bottom on mobile) */}
            <div className="order-2 md:order-1 flex md:flex-col gap-3 pb-2 md:pb-0 md:pr-2 md:w-24 flex-shrink-0 items-center md:items-start justify-center">
              <div className="flex md:flex-col gap-3 overflow-hidden w-full items-center">
                {images.slice(thumbnailStartIndex, thumbnailStartIndex + 5).map((img, idx) => {
                  const actualIdx = thumbnailStartIndex + idx;
                  return (
                    <button
                      key={actualIdx}
                      onClick={() => setMainImage(actualIdx)}
                      className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-[var(--radius-sm)] overflow-hidden border-2 transition-all ${mainImage === actualIdx ? 'border-[#F4CDD4] shadow-sm' : 'border-transparent hover:border-gray-200'}`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Arrows for thumbnails */}
              <div className="flex items-center justify-center gap-2 mt-1 md:w-full">
                <button 
                  onClick={() => setThumbnailStartIndex((prev) => Math.max(0, prev - 1))}
                  disabled={thumbnailStartIndex === 0}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-white transition-colors p-1.5 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setThumbnailStartIndex((prev) => Math.min(images.length - 5, prev + 1))}
                  disabled={thumbnailStartIndex >= images.length - 5}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-white transition-colors p-1.5 rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
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
                priority
              />

              {/* Expand Icon */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-black p-2 rounded-lg shadow-sm hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </button>
            </div>
          </div>

          {/* BUY BOX */}
          <div className="flex flex-col">

            <div className="mb-4">
              <h3 className="text-[14px] font-[600] text-black mb-3 text-left">Veja mais sobre o produto</h3>
              <div className="flex gap-3">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#F4CDD4] relative">
                  <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop" alt="Uso no pet" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#F4CDD4] relative">
                  <Image src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=400&auto=format&fit=crop" alt="Textura" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#F4CDD4] relative">
                  <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop" alt="Detalhe" fill className="object-cover" />
                </div>
              </div>
            </div>

            <h1 className="text-[20px] md:text-[26px] font-[600] text-[var(--text-dark)] leading-[1.2] mb-2 uppercase text-left">
              KIT PET PERFUMES DE EXPERIMENTAÇÃO
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
              <a href="#reviews" className="text-[13px] text-gray-500 underline font-medium hover:text-gray-700">
                33 avaliações
              </a>
            </div>

            <div className="mb-4 flex gap-2">
              <span className="bg-[var(--green)] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase">
                {discountPercentage}% OFF
              </span>
              <span className="bg-[#f4cdd4] text-black border border-[#eec0c9] text-[12px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                BRINDE GRÁTIS
              </span>
            </div>

            <div className="mb-2 flex items-baseline gap-3 flex-wrap">
              <span className="text-[32px] md:text-[40px] font-[600] text-black leading-none tracking-tighter">
                R$ {(price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-[15px] text-gray-400 line-through font-medium">
                R$ {(regularPrice * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="mb-2 md:mb-6">
              <span className="text-[13px] text-gray-500 font-medium">6x de R$ {((price * quantity) / 6).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} sem juros</span>
            </div>

            <div className="flex items-center justify-between text-[11px] md:text-[14px] text-[#666] mb-1 md:mb-6 font-medium bg-gray-50/50 px-1 py-1.5 rounded-lg md:bg-transparent md:p-0 whitespace-nowrap overflow-hidden">
              <div className="flex items-center gap-1">
                <CashbackIcon className="w-4 h-4 text-[#666]" />
                <span>Ganhe <strong className="text-black font-semibold">R$ {((price * quantity) * 0.05).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> de cashback</span>
              </div>
              <span className="text-[9px] md:hidden px-0.5 py-0.5 bg-[var(--pink-light)] text-[var(--text-dark)] rounded font-black tracking-tighter shrink-0 ml-1">CASHBACK</span>
            </div>

            <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-[10px] bg-[#f7f7f7] mb-4 md:mb-4 order-3">
              <div className="p-4 text-center border-r border-gray-200">
                <span className="block text-[10px] text-gray-400 uppercase font-medium tracking-widest mb-1">Rendimento</span>
                <span className="block text-[15px] font-medium text-black">1.200 borrifadas</span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-[10px] text-gray-400 uppercase font-medium tracking-widest mb-1">Custo/Banho</span>
                <span className="block text-[15px] font-medium text-black">R$ 0,14</span>
              </div>
            </div>



            {/* BLOCO: GARANTIAS (REFINED) */}
            <div className="py-4 md:py-6 mb-4 md:mb-8 border-b border-gray-200 order-5 md:order-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f4] flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-black uppercase tracking-tighter">Garantia</span>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">7 dias para trocar</span>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f4] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-black uppercase tracking-tighter">Compra segura</span>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">Sem burocracia</span>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f4] flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-black uppercase tracking-tighter">Até 6x S/ JUROS</span>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">Com nota fiscal</span>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f4] flex items-center justify-center">
                    <Headset className="w-5 h-5 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-black uppercase tracking-tighter">Suporte</span>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">Expertise Real</span>
                  </div>
                </div>
              </div>
            </div>


            {/* QUANTITY AND ADD TO CART - SIDE BY SIDE */}
            <div className="mb-4 order-4 md:order-5">
              <p className="font-[700] text-[12px] text-[var(--text-dark)] uppercase mb-2">QUANTIDADE:</p>
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
                    className="flex-1 h-[52px] bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[16px] md:text-[18px] uppercase tracking-wide rounded-[10px] flex items-center justify-center transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Comprar
                  </button>
                </div>

                {(price * quantity) > 399.00 && (
                  <div className="bg-gradient-to-r from-[#ff8da1] to-[var(--pink)] text-white p-1 md:p-3 rounded-[var(--radius-md)] flex items-center gap-1.5 md:gap-3 shadow-[0_4px_15px_rgba(244,143,161,0.4)] animate-pulse border border-[#ffb3c1]">
                    <Gift className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="block font-bold text-[10px] sm:text-[11px] md:text-[14px] uppercase tracking-wide truncate">Brinde Grátis Desbloqueado!</span>
                      <span className="block text-[9px] sm:text-[10px] md:text-[12px] opacity-90 leading-[1.1] whitespace-normal">Brinde especial em compras acima de <strong className="font-black">R$399,00</strong></span>
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* SHIPPING CALCULATOR (MINIMALIST) */}
            <div className="p-0 mb-4 md:mb-6 order-6">
              <h4 className="font-[700] text-[12px] text-[var(--text-dark)] uppercase mb-2 flex items-center gap-2">
                Frete e Prazo <Truck className="w-4 h-4 text-[var(--pink)]" />
              </h4>
              <div className="bg-[#fdf0f6] border border-[#f4cdd4] rounded-[12px] p-4 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Package size={14} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-black leading-tight">
                    Chegará entre {deliveryDates.min} e {deliveryDates.max}
                  </span>
                  <span className="text-[12px] text-gray-500 font-medium">
                    Confirme o prazo final na próxima etapa.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-[var(--border)] gap-2 order-7">
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

        {/* BLOCO 5: BARRA DE BENEFÍCIOS (OPÇÃO A - EDITORIAL MINIMALISTA) */}
        <section className="bg-white py-16 px-4 border-t border-b border-gray-100">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

              <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-[32px] md:text-[40px] font-semibold text-black leading-[1.1] uppercase tracking-tighter">
                  O Segredo <br className="hidden md:block" /> dos Melhores <br className="hidden md:block" /> Groomers.
                </h2>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: "Assinatura Olfativa", desc: "Fragrâncias Eau de Parfum com fixação de até 7 dias em cada frasco.", icon: Shield },
                  { title: "Variedade em Um Kit", desc: "Explore diferentes famílias olfativas e descubra o favorito dos seus clientes.", icon: Droplet },
                  { title: "Fidelização Garantida", desc: "Pets que chegam cheirosos de volta criam clientes que voltam sempre.", icon: Layers },
                  { title: "Experiência Completa", desc: "Do banho à finalização, uma fragrância marcante que eleva o valor do serviço.", icon: Sun }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F4CDD4] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[16px] text-black uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-[13px] text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* BLOCO 6: ACCORDIONS */}
        <section className="max-w-[800px] mx-auto px-4 py-16">
          <h2 className="text-[22px] md:text-[26px] font-semibold text-[var(--text-dark)] mb-6 text-center">
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
                  <FileText className="w-4 h-4 text-[#999]" aria-hidden="true" /> Descrição
                </span>
                {openAccordion === 1 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed space-y-4">
                  <p>Explore as nossas fragrâncias mais desejadas com o Kit Pet Perfumes de Experimentação da Bubbles. Ideal para quem deseja conhecer os perfumes antes de investir nas versões maiores, este kit reúne 10 fragrâncias icônicas em versões de 30ml cada, podendo ser:</p>
                  <p><strong>Brave, Candy, Cacau com Cereja, Child, Chocolate Belga, Impera, Jabuticaba, Macadâmia, Puppy, Ultra</strong></p>
                  <p><strong>Indicações:</strong> Para uso em cães e gatos de todas as raças e idades (a partir de 4 semanas de vida).</p>
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
                  <Star className="w-4 h-4 text-[#999]" aria-hidden="true" /> Benefícios
                </span>
                {openAccordion === 2 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Ideal para teste de fragrância.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Ótima opção para venda no balcão.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Embalagens práticas e fáceis de aplicar.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Perfumes 100% veganos, hipoalergênicos e cruelty free.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Modo de uso */}
            <div className="border-b border-[var(--border)] last:border-0">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[15px] text-[var(--text-dark)] flex items-center gap-2">
                  <List className="w-4 h-4 text-[#999]" /> Modo de uso
                </span>
                {openAccordion === 3 ? <ChevronUp className="w-5 h-5 text-[var(--text-mid)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-mid)]" />}
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 pt-2 text-[14px] text-[var(--text-mid)] leading-relaxed">
                  <p>Com os pelos secos, aplique uma pequena quantidade do perfume a uma distância segura (aproximadamente 15 cm) evitando olhos, focinho e área genital. Pode ser reaplicado sempre que necessário.</p>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* BLOCO 7: SEÇÃO COMPARATIVA PREMIUM */}
        <section className="bg-white py-24 px-4 overflow-hidden">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[22px] md:text-[26px] font-semibold text-black leading-tight uppercase tracking-tighter mb-4">
                O Padrão Bubbles vs. O Mercado Comum
              </h2>
              <p className="text-[14px] md:text-[16px] text-gray-500 max-w-2xl mx-auto font-medium">
                Entenda por que groomers profissionais não trocam a Bubbles por marcas genéricas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">

              {/* Lado Negativo: SEM Bubbles */}
              <div className="relative p-8 md:p-10 rounded-[10px] bg-[#F9F9F9] border border-dashed border-gray-300 opacity-70">
                <div className="mb-8">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[2px] mb-2 block">Marcas Genéricas</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-500 uppercase">A Realidade Comum</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    "Fragrância fraca que some em poucas horas",
                    "Cheiro artificial que mascara sem neutralizar",
                    "Sem opção de variedade: um único perfume genérico",
                    "Sem identidade olfativa para o serviço do groomer"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-red-200 bg-red-50 flex items-center justify-center">
                        <X size={11} className="text-red-400" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] font-medium text-gray-400 leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lado Positivo: COM Bubbles */}
              <div className="relative p-8 md:p-10 rounded-[10px] bg-[#fdf5f7] border-2 border-[#F4CDD4] md:scale-[1.03] origin-center">
                {/* Accent bar top */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#F4CDD4] to-[#f0a8b8] rounded-t-[10px]" />

                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black text-white text-[10px] font-semibold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg z-10">
                  <Check size={10} strokeWidth={3} /> Escolha Profissional
                </div>

                <div className="mb-8">
                  <span className="text-[10px] font-bold text-[var(--pink)] uppercase tracking-[2px] mb-2 block">Bubbles Pro</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-black uppercase">O Padrão Bubbles</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    "Fragrâncias Eau de Parfum com fixação de até 7 dias",
                    "Neutralização real do odor com Tecnologia Sniff Tech",
                    "Kit com múltiplas fragrâncias para personalizar cada banho",
                    "Assinatura olfativa que diferencia e fideliza os clientes"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#F4CDD4] flex items-center justify-center">
                        <Check size={11} className="text-black" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] font-semibold text-black leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>



        {/* BLOCO 9: SEÇÃO DE REVIEWS */}
        <section id="reviews" className="bg-[var(--pink-light)] py-16 px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-center text-[22px] md:text-[26px] font-semibold text-[var(--text-dark)] mb-8">
              Confira O que os groomers estão dizendo
            </h2>

            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[36px] font-semibold text-[var(--text-dark)] leading-none">4.9</span>
                <div className="flex flex-col">
                  <div className="flex text-[#F4A522] mb-1">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[13px] text-[var(--text-mid)]">33 avaliações verificadas</span>
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
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Marcelly Ferreira</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">07/03/2026</span>
                </div>
                <p className="font-bold text-[14px] text-black mb-1">Os perfumes são ótimos</p>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed">
                  &quot;Os perfumes são ótimos, um com o cheiro mais gostoso que o outro, eu já uso o EGO chocolate belga e tem uma excelente fixação. Vou testar os outros nos clientes para receber os feedbacks.&quot;
                </p>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Yasmin Rufino</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">01/12/2025</span>
                </div>
                <p className="font-bold text-[14px] text-black mb-1">Maravilhoso demais Irei pegar os tamanhos</p>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed">
                  &quot;Maravilhoso demais<br/>Irei pegar os tamanhos maiores com certeza<br/>Ideal para experimentarmos e comprarmos os que mais nos agrada🤩👏&quot;
                </p>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">JAQUELINE DOMINGUES</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">12/11/2025</span>
                </div>
                <p className="font-bold text-[14px] text-black mb-1">ma-ra-vi-lho-sos!</p>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed">
                  &quot;Esses perfumes são ma-ra-vi-lho-sos! Todos são uma delícia, sem exceção.&quot;
                </p>
              </div>

              {/* Review 4 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Renata Alves</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">05/11/2025</span>
                </div>
                <p className="font-bold text-[14px] text-black mb-1">Amei</p>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed">
                  &quot;Amei, veio até brinde 🥰&quot;
                </p>
              </div>

              {/* Review 5 */}
              <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[15px] text-[var(--text-dark)]">Magna Ferreira</span>
                    </div>
                    <div className="flex text-[#F4A522]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--text-light)]">28/10/2025</span>
                </div>
                <p className="font-bold text-[14px] text-black mb-1">A quantidade e pouco apenas 30ml</p>
                <p className="text-[14px] text-[var(--text-mid)] leading-relaxed">
                  &quot;A quantidade e pouco apenas 30ml. Porem como gosto de variar muito, pois meus clientes sempre são os mesmo, vale o preço.<br/>Assim tenho 10 fragrâncias como opção e não enjoo do cheiro tão fácil.<br/>Fale sim comprar. Aguardo novas fragrâncias viu fica a dica.&quot;
                </p>
              </div>
              
              {showAllReviews && remainingReviews.map((review, idx) => (
                <div key={idx} className="bg-white rounded-[var(--radius-md)] p-6 shadow-sm animate-fade-in-down">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-[15px] text-[var(--text-dark)]">{review.name}</span>
                      </div>
                      <div className="flex text-[#F4A522]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-[12px] text-[var(--text-light)]">{review.date}</span>
                  </div>
                  <p className="font-bold text-[14px] text-black mb-1">{review.title}</p>
                  <p className="text-[14px] text-[var(--text-mid)] leading-relaxed" dangerouslySetInnerHTML={{ __html: `&quot;${review.text}&quot;` }}></p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="px-8 py-3 border-2 border-black text-black font-bold rounded-full hover:bg-gray-50 transition-colors"
              >
                {showAllReviews ? 'Ocultar avaliações ‹' : 'Ver todas as 33 avaliações ›'}
              </button>
            </div>
          </div>
        </section>

        {/* BLOCO 10.5: VIDEO CAROUSEL (ESTILO TOLSTOY) */}
        <section className="py-20 px-4 overflow-hidden bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-[22px] md:text-[28px] font-semibold text-[#0F0C0D] mb-12 uppercase tracking-tight">
              Veja nossos produtos em ação
            </h2>

            <div className="relative group">
              <div
                className="flex items-center gap-4 md:gap-12 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar px-[10%] md:px-[20%]"
                ref={statsCarouselRef} // Reusing ref for scroll container
              >
                {[
                  {
                    id: 1,
                    videoUrl: "https://cdn.shopify.com/videos/c/vp/a0e482e520b0434ab958c4f5a3b324dd/a0e482e520b0434ab958c4f5a3b324dd.HD-720p-1.6Mbps-72997058.mp4",
                    thumbnail: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/preview_images/a0e482e520b0434ab958c4f5a3b324dd.thumbnail.0000000000.jpg?v=1770917450&width=960&height=540",
                    productImg: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/d14fee130503eeeb57094f3782b978d6.jpg?v=1744823033&width=80",
                    title: "KIT PET INVERNO CAPPUCCINO (4 ITENS)",
                    price: "R$ 391,90",
                    oldPrice: "R$ 651,90",
                    views: "1.2M"
                  },
                  {
                    id: 2,
                    videoUrl: "https://cdn.shopify.com/videos/c/vp/89f93b061e2c42248726fa759a54e189/89f93b061e2c42248726fa759a54e189.HD-720p-4.5Mbps-67290869.mp4",
                    thumbnail: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/preview_images/89f93b061e2c42248726fa759a54e189.thumbnail.0000000000.jpg?v=1768833735&width=960&height=540",
                    productImg: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/mockup_pro_oleo-de-argan_100ml.jpg?v=1772714982&width=80",
                    title: "ÓLEO DE ARGAN PET PRO (EGO) 100ML",
                    price: "R$ 109,90",
                    views: "850K",
                    isActive: true
                  },
                  {
                    id: 3,
                    videoUrl: "https://cdn.shopify.com/videos/c/vp/dcda4bc412d04536907700afacec41b8/dcda4bc412d04536907700afacec41b8.HD-720p-4.5Mbps-67290685.mp4",
                    thumbnail: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/preview_images/dcda4bc412d04536907700afacec41b8.thumbnail.0000000000.jpg?v=1768833548&width=960&height=540",
                    productImg: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/shampoo-pet-realcador-de-cores-pro-ego-1l-110-7350095.jpg?v=1774903935&width=80",
                    title: "SHAMPOO PET REALÇADOR DE CORES PRO (EGO) 1L (1:10)",
                    price: "R$ 133,90",
                    views: "1.0M"
                  },
                  {
                    id: 4,
                    videoUrl: "https://cdn.shopify.com/videos/c/vp/9aebc584e39d4e588b836378fd61c9b8/9aebc584e39d4e588b836378fd61c9b8.HD-720p-1.6Mbps-70264168.mp4",
                    thumbnail: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/preview_images/9aebc584e39d4e588b836378fd61c9b8.thumbnail.0000000000.jpg?v=1770149578&width=960&height=540",
                    productImg: "https://cdn.shopify.com/s/files/1/0627/3322/1999/files/kit-pet-gelato-de-pistache-xperience-4-itens-7935828.jpg?v=1774903874&width=80",
                    title: "KIT PET GELATO DE PISTACHE XPERIENCE [4 ITENS]",
                    price: "R$ 344,90",
                    views: "540K"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex-shrink-0 snap-center flex flex-col items-center transition-all duration-500 ${item.isActive ? 'w-[280px] md:w-[320px] z-10 scale-110' : 'w-[240px] md:w-[280px] opacity-60 grayscale-[0.3]'}`}
                  >
                    {/* Video Area */}
                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group/video">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover/video:scale-110 transition-transform">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                        </div>
                      </div>

                      {/* Views Badge */}
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-md flex items-center gap-1">
                        <Activity size={10} /> {item.views}
                      </div>

                      {/* Mute toggle */}
                      <div className="absolute bottom-4 right-4 text-white/70">
                        <VolumeX size={18} />
                      </div>
                    </div>

                    {/* Product Info Box - Tolstoy Style */}
                    <div className="mt-4 w-[95%] bg-white rounded-xl border border-gray-200 shadow-xl p-3 flex items-center gap-3">
                      <div className="w-14 h-14 relative flex-shrink-0 rounded-lg overflow-hidden border border-gray-50">
                        <Image src={item.productImg} alt="Prod" fill className="object-contain p-1" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-black text-black leading-tight mb-1 line-clamp-2 uppercase tracking-tighter">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-[12px] font-black text-[var(--pink)]">{item.price}</span>
                          {item.oldPrice && <span className="text-[9px] text-gray-400 line-through font-bold">{item.oldPrice}</span>}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                        <Plus size={16} strokeWidth={3} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>



        {/* Who is Bubbles Section */}
        <section id="quem-somos" className="relative py-12 px-4 md:px-10 overflow-hidden flex items-center min-h-[60vh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://bubbles.gabrielxavier.online/capa_linha-pro.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="https://www.bubbles.com.br/cdn/shop/videos/c/vp/6fd9894dcddb47b5883886091db28520/6fd9894dcddb47b5883886091db28520.HD-1080p-7.2Mbps-45960585.mp4?v=0" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 z-10" />

          <div className="max-w-7xl mx-auto relative z-20 w-full">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[#F4CDD4] text-[10px] font-semibold uppercase tracking-[0.4em] mb-3 block"
              >
                Nossa Essência
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl font-semibold text-white mb-6 tracking-tighter"
              >
                Quem é a <span className="text-[#F4CDD4]">Bubbles®?</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="space-y-4 text-white/90 text-sm md:text-lg leading-relaxed font-medium">
                  <p>
                    A Bubbles® nasceu da vontade de transformar a experiência de banho e tosa em algo mais profissional, sensorial e consciente, tanto para o groomer quanto para o pet.
                  </p>
                  <p>
                    Com <span className="text-[#F4CDD4] font-semibold">mais de 7 anos de história</span>, elevamos o padrão do mercado, transformando cada atendimento em uma experiência memorável.
                  </p>
                </div>
              </motion.div>
            </div>

            <CarouselWrapper carouselRef={statsCarouselRef} hideArrows={false}>
              <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar touch-pan-x lg:grid lg:grid-cols-5 lg:gap-3" ref={statsCarouselRef}>
                {[
                  { label: "Tempo de Mercado", val: "+7 Anos", icon: Clock, desc: "Pioneirismo e Inovação" },
                  { label: "NPS e Satisfação", val: "4.9/5.0", icon: StarLucide, desc: "Aprovação Máxima" },
                  { label: "Base de Groomers", val: "+5.000", icon: Users, desc: "Especialistas de Elite" },
                  { label: "Clientes Ativos", val: "+20.000", icon: HeartLucide, desc: "Tutores Apaixonados" },
                  { label: "Mix de Soluções", val: "+50", icon: Package, desc: "Produtos Exclusivos" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-[20px] text-center shadow-2xl hover:bg-white/10 hover:border-[#F4CDD4]/30 transition-all duration-500 group min-w-[200px] lg:min-w-0 snap-center"
                  >
                    <div className="w-10 h-10 bg-[#F4CDD4]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#F4CDD4] transition-all duration-500">
                      <stat.icon size={18} className="text-[#F4CDD4] group-hover:text-[#080808] transition-colors duration-500" />
                    </div>
                    <p className="text-xl font-semibold text-white mb-1 tracking-tight">{stat.val}</p>
                    <p className="text-[#F4CDD4] text-[11px] font-semibold uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-white/40 text-[10px] font-semibold uppercase tracking-tighter">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CarouselWrapper>
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
              loading="lazy"
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
            <Image src={images[0].url} alt="Miniatura do Kit Pet Perfumes de Experimentação" fill className="object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-[700] text-[var(--text-dark)] truncate max-w-[180px] md:max-w-none block">Kit Pet Perfumes de Experimentação</span>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[15px] md:text-[18px] font-semibold text-black leading-none whitespace-nowrap">R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span className="text-[9px] md:text-[10px] text-[#666] bg-gray-100 px-1 md:px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap shrink-0">
                <CashbackIcon className="w-3 h-3" /> <span>+<strong className="font-bold">R$ {(price * 0.05).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> cashback</span>
              </span>
            </div>
          </div>
        </div>
        <button className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold uppercase tracking-wide text-[18px] py-2 md:py-3 px-6 md:px-8 rounded-[var(--radius-md)] flex items-center justify-center transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]">
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
