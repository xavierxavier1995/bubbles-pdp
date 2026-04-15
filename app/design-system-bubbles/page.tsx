"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Loader2, ArrowRight, X, Star, ShoppingBag } from 'lucide-react';

const ColorSwatch = ({ name, token, hex, rgb, cmyk, description }: any) => (
  <div className="flex flex-col gap-2">
    <div className="w-full h-20 rounded-lg border border-[#E5E5E5] shadow-sm" style={{ backgroundColor: hex }} />
    <div className="flex flex-col">
      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">{name}</span>
      <span className="text-[10px] font-mono text-muted">{token}</span>
      <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1">
        <span className="text-[9px] font-mono text-muted uppercase">HEX: {hex}</span>
        {rgb && <span className="text-[9px] font-mono text-muted uppercase">RGB: {rgb}</span>}
        {cmyk && <span className="text-[9px] font-mono text-muted uppercase">CMYK: {cmyk}</span>}
      </div>
      {description && <p className="text-[9px] text-muted mt-1 leading-tight">{description}</p>}
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle, id }: any) => (
  <div id={id} className="mb-10 pt-20">
    <h2 className="text-3xl font-black mb-2 uppercase">{title}</h2>
    {subtitle && <p className="text-muted text-sm">{subtitle}</p>}
    <div className="h-1 w-20 bg-brand-pink mt-4 rounded-full" />
  </div>
);

const ButtonDemo = ({ label, variant, size = 'md', state, rounded }: any) => {
  let className = "";
  if (variant === 'green') className = "btn-primary-green";
  if (variant === 'dark') className = "btn-dark";
  if (variant === 'outline') className = "btn-outline-dark";
  if (variant === 'outline-pink') className = "btn-outline-pink";
  if (variant === 'outline-super-pink') className = "btn-outline-super-pink";
  if (variant === 'pink-solid') className = "bg-brand-pink text-brand-dark font-black uppercase text-[13px] px-6 py-3 rounded-full hover:scale-105 transition-all";
  if (variant === 'black-pink') className = "bg-brand-dark text-brand-pink font-black uppercase text-[13px] px-6 py-3 rounded-md flex items-center gap-2 hover:gap-4 transition-all";
  if (variant === 'ghost') className = "btn-ghost";

  if (size === 'sm') className += " btn-sm";
  if (size === 'md') className += " btn-md";
  if (size === 'lg') className += " btn-lg";
  
  if (rounded === 'none') className += " !rounded-none";
  if (rounded === 'sm') className += " !rounded-sm";
  if (rounded === 'md') className += " !rounded-md";
  if (rounded === 'lg') className += " !rounded-lg";
  if (rounded === 'full') className += " !rounded-full";

  const isDisabled = state === 'disabled';
  const isLoading = state === 'loading';

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[10px] font-mono text-muted uppercase">{state || 'default'}</span>
      <button 
        className={`${className} ${isDisabled ? 'opacity-40 cursor-not-allowed' : ''} ${isLoading ? 'relative !text-transparent' : ''}`}
        disabled={isDisabled}
      >
        {isLoading && <Loader2 className={`absolute inset-0 m-auto animate-spin ${variant === 'outline' || variant === 'ghost' ? 'text-brand-dark' : 'text-white'}`} size={16} />}
        {label}
        {variant === 'black-pink' && <ArrowRight size={16} />}
      </button>
    </div>
  );
};

const B2BFormDemo = () => {
  const [step, setStep] = useState(2);
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="bg-white rounded-[20px] max-w-[480px] w-full p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] relative border border-[#E5E5E5]">
      <button className="absolute top-6 right-6 text-muted hover:text-brand-dark transition-colors">
        <X size={20} />
      </button>
      
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted">Etapa {step} de {totalSteps}</span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-dark">Perfil do Negócio</span>
        </div>
        <div className="h-[3px] w-full bg-[#E5E5E5] rounded-full overflow-hidden flex">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-brand-dark"
          />
        </div>
      </div>

      <div className="space-y-6 mb-10">
        <div>
          <label className="block text-[13px] font-semibold text-brand-dark mb-2">Nome da Empresa</label>
          <input type="text" className="input-bubbles" placeholder="Ex: Pet Shop Bubbles" />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-brand-dark mb-2">CNPJ</label>
          <input type="text" className="input-bubbles" placeholder="00.000.000/0000-00" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-semibold text-brand-dark mb-2">Cidade</label>
            <input type="text" className="input-bubbles" placeholder="São Paulo" />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-brand-dark mb-2">Estado</label>
            <input type="text" className="input-bubbles" placeholder="SP" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button className="btn-dark btn-full">AVANÇAR</button>
        <button className="btn-ghost text-[13px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <ArrowRight size={16} className="rotate-180" /> Voltar
        </button>
      </div>
    </div>
  );
};

const CashbackIcon = ({ size = 16, className = "" }: any) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
    <path d="M12 7v10" />
    <path d="M16 8h-4.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H8" />
  </svg>
);

const ProductCardDemo = () => {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-[12px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-all duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:-translate-y-1 cursor-pointer w-full max-w-[280px]">
      <div className="aspect-square bg-[#F7F7F7] relative overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <span className="bg-[#E03E3E] text-white text-[10px] font-black uppercase px-2 py-1 rounded-[4px] leading-none tracking-[0.06em]">PROMOÇÃO</span>
          <span className="bg-action-green text-white text-[10px] font-black uppercase px-2 py-1 rounded-full leading-none tracking-[0.06em]">15% OFF</span>
        </div>
        <img src="https://picsum.photos/seed/bubbles-p1/400/400" alt="Product Demo" className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={12} fill="#F5A623" color="#F5A623" />
          ))}
        </div>
        <h3 className="text-[13px] font-semibold text-brand-dark leading-[1.35] line-clamp-2 mb-4 h-9">
          Shampoo Profissional EGO 5L - Concentrado
        </h3>
        <div className="mb-4">
          <span className="text-[13px] text-[#AEAEAE] line-through block">R$ 299,90</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tracking-[-0.02em] text-brand-dark">R$ 249,90</span>
          </div>
          <span className="text-[11px] text-muted block mt-1">ou 3x de R$ 83,30 sem juros</span>
          <div className="flex items-center gap-1.5 mt-2 text-brand-dark">
            <CashbackIcon size={14} />
            <span className="text-[10px] font-bold">Ganhe <strong className="font-black">R$ 12,50</strong> de cashback</span>
          </div>
        </div>
        <button className="btn-primary-green w-full !py-2.5 !text-[11px]">COMPRAR</button>
      </div>
    </div>
  );
};

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'logos', label: 'Logos & Sub-marcas' },
    { id: 'colors', label: 'Cores' },
    { id: 'typography', label: 'Tipografia' },
    { id: 'icons', label: 'Ícones' },
    { id: 'spacing', label: 'Espaçamento' },
    { id: 'grid-layout', label: 'Grid & Layout' },
    { id: 'borders-shadows', label: 'Bordas & Sombras' },
    { id: 'buttons', label: 'Botões' },
    { id: 'forms', label: 'Formulários' },
    { id: 'b2b-form', label: 'Formulário B2B' },
    { id: 'cards', label: 'Cards de Produto' },
    { id: 'product-specific', label: 'Componentes de Produto' },
    { id: 'badges', label: 'Badges & Etiquetas' },
    { id: 'motion', label: 'Motion' },
    { id: 'product-categories', label: 'Categorias' },
    { id: 'copywriting', label: 'Copywriting' },
    { id: 'tone-of-voice', label: 'Tom de Voz' },
    { id: 'brand-personality', label: 'Personalidade' },
    { id: 'competitive-differentials', label: 'Diferenciais' },
    { id: 'brand-guidelines', label: 'Diretrizes' },
    { id: 'backgrounds-gradients', label: 'Backgrounds' },
    { id: 'tokens', label: 'Tokens CSS' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFDFD] flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-[#E5E5E5] sticky top-0 h-screen p-8 overflow-y-auto scrollbar-hide">
          <div className="mb-10">
            <span className="font-black text-2xl tracking-tighter text-brand-dark">BUBBLES</span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mt-1">Design System v1.0</p>
          </div>
          <nav className="flex flex-col gap-2 pb-20">
            {sections.map((s) => (
              <button 
                key={s.id} 
                onClick={() => scrollToSection(s.id)}
                className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all text-left cursor-pointer border-none ${activeSection === s.id ? 'bg-brand-pink text-brand-dark' : 'text-muted hover:bg-[#F7F7F7] bg-transparent'}`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-5 md:px-20 pb-40 overflow-x-hidden">
          {/* 1. HERO */}
          <section id="hero" className="bg-brand-dark text-white rounded-[20px] p-12 md:p-20 mt-10 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 block mb-4">Industrial de Luxo Chic</span>
              <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase">Design System v1.0</h1>
              <p className="text-white/70 text-lg mb-10 max-w-xl">Guia visual vivo para a marca de cosméticos pet premium mais desejada do Brasil.</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Figtree</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Feather Icons</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Shopify OS 2.0</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F4CDD4]/10 to-transparent pointer-events-none" />
          </section>

          {/* 2. LOGOS */}
          <SectionHeader title="Logos & Sub-marcas" id="logos" />
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-dark p-16 rounded-2xl flex flex-col items-center justify-center gap-6">
                <img src="https://bubbles.gabrielxavier.online/BUBBLES.svg" alt="Bubbles Logo Negative" className="h-16 invert brightness-0" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Aplicação Negativa</span>
              </div>
              <div className="bg-[#F4CDD4] p-16 rounded-2xl flex flex-col items-center justify-center gap-6">
                <img src="https://bubbles.gabrielxavier.online/BUBBLES.svg" alt="Bubbles Logo Institutional" className="h-16" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">Aplicação Institucional</span>
              </div>
            </div>
          </div>

          {/* 3. CORES */}
          <SectionHeader title="Cores" id="colors" />
          <div className="space-y-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <ColorSwatch name="Brand Pink" token="--color-brand-pink" hex="#F4CDD4" rgb="244, 205, 212" cmyk="0, 16, 13, 4" description="Cor primária institucional. Feminilidade, cuidado e suavidade." />
              <ColorSwatch name="Brand Dark" token="--color-brand-dark" hex="#0D0C0D" rgb="13, 12, 13" cmyk="0, 8, 0, 95" description="Cor de contraste e autoridade. Industrial de luxo." />
              <ColorSwatch name="Action Green" token="--color-action-green" hex="#3DB85C" rgb="61, 184, 92" cmyk="67, 0, 50, 28" description="Cor de conversão e compra. Exclusiva para CTAs de venda." />
              <ColorSwatch name="Promo Red" token="--color-promo-red" hex="#E03E3E" rgb="224, 62, 62" cmyk="0, 72, 72, 12" description="Cor de urgência, promoção e erros." />
            </div>
          </div>

          {/* 4. TIPOGRAFIA */}
          <SectionHeader title="Tipografia" id="typography" />
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E5E5E5] text-[10px] font-bold uppercase tracking-widest text-muted">
                  <th className="py-4 px-2">Nível</th>
                  <th className="py-4 px-2">Size</th>
                  <th className="py-4 px-2">Weight</th>
                  <th className="py-4 px-2">Spacing</th>
                  <th className="py-4 px-2">Uso</th>
                </tr>
              </thead>
              <tbody className="text-brand-dark">
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4 px-2 text-3xl font-black uppercase">H1 Display</td>
                  <td className="py-4 px-2 font-mono text-[10px]">64px</td>
                  <td className="py-4 px-2 text-xs">900 (Black)</td>
                  <td className="py-4 px-2 text-xs">-0.03em</td>
                  <td className="py-4 px-2 text-xs">Hero, Títulos de Seção</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4 px-2 text-xl font-bold uppercase">H2 Section</td>
                  <td className="py-4 px-2 font-mono text-[10px]">38px</td>
                  <td className="py-4 px-2 text-xs">700 (Bold)</td>
                  <td className="py-4 px-2 text-xs">-0.02em</td>
                  <td className="py-4 px-2 text-xs">Subtítulos principais</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4 px-2 text-base font-normal">Body Text</td>
                  <td className="py-4 px-2 font-mono text-[10px]">15px</td>
                  <td className="py-4 px-2 text-xs">400 (Regular)</td>
                  <td className="py-4 px-2 text-xs">normal</td>
                  <td className="py-4 px-2 text-xs">Textos longos, descrições</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 9. BOTÕES */}
          <SectionHeader title="Botões" id="buttons" />
          <div className="flex flex-wrap gap-8">
            <ButtonDemo label="COMPRAR" variant="green" rounded="full" />
            <ButtonDemo label="DARK BUTTON" variant="dark" rounded="md" />
            <ButtonDemo label="OUTLINE" variant="outline" rounded="md" />
            <ButtonDemo label="GHOST" variant="ghost" />
          </div>

          {/* 11. B2B FORM */}
          <SectionHeader title="Formulário Multi-step B2B" id="b2b-form" />
          <div className="flex">
            <B2BFormDemo />
          </div>

          {/* 12. CARDS */}
          <SectionHeader title="Cards de Produto" id="cards" />
          <div className="flex">
            <ProductCardDemo />
          </div>

          {/* 23. TOKENS */}
          <SectionHeader title="Tokens CSS" id="tokens" />
          <div className="bg-brand-dark p-8 rounded-2xl border border-white/10 overflow-x-auto">
            <pre className="text-[11px] font-mono text-[#F4CDD4]/80 leading-relaxed">
{`:root {
  --color-brand-pink: #F4CDD4;
  --color-brand-dark: #0D0C0D;
  --color-action-green: #3DB85C;
  --font-figtree: "Figtree", sans-serif;
  --radius-lg: 12px;
  --shadow-card: 0 2px 8px rgba(0,0,0,0.07);
}`}
            </pre>
          </div>

          {/* DOWNLOAD SECTION */}
          <div className="mt-20 p-16 bg-[#F4CDD4] rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0D0C0D 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase">Pronto para exportar?</h2>
              <p className="text-brand-dark/70 text-lg mb-10 max-w-2xl mx-auto">
                Este arquivo contém todo o código necessário para replicar este Design System em qualquer ambiente.
              </p>
              <button 
                className="bg-brand-dark text-white font-black uppercase tracking-widest px-12 py-5 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto border-none cursor-pointer"
              >
                <ShoppingBag size={24} />
                BAIXAR ARQUIVO COMPLETO (.HTML)
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
