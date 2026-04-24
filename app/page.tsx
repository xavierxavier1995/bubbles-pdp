import Link from 'next/link';
import { Sparkles, ArrowRight, Package } from 'lucide-react';

export default function ProjectHub() {
  const pages = [
    {
      title: 'Design System',
      path: '/design-system-bubbles',
      description: 'Guia visual completo da Bubbles Pet Cosmetics.',
      icon: Sparkles,
      status: 'Novo',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Página de Produto',
      path: '/produto',
      description: 'Página de detalhes do produto principal (Neutralizador Pineapple) de alta conversão.',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Página de Produto (V2)',
      path: '/produto-2',
      description: 'Clone da página de produto com a nova seção "Sobre a Bubbles".',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'PDP Neutralizador Pineapple',
      path: '/shampoo-pet-neutralizador-pineapple-essential-5l-1-5',
      description: 'Clone com ajustes de preço, cashback e prazo de entrega automático.',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-pink-100 text-pink-700'
    },
    {
      title: 'PDP Kit Fondue de Chocolate',
      path: '/kit-pet-fondue-de-chocolate-xperience-4-produtos',
      description: 'Página de produto focada na experiência do kit Fondue Xperience.',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'PDP Kit Pet Perfumes',
      path: '/kit-pet-perfumes-experimentacao',
      description: 'Página de produto para o kit de experimentação de perfumes.',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-teal-100 text-teal-700'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0D0C0D] font-sans selection:bg-[#F4CDD4] selection:text-[#0D0C0D] p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Ambiente de Desenvolvimento</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hub do Projeto Bubbles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Navegue pelas páginas em desenvolvimento para o novo site da Bubbles Pet Profissional. Selecione um dos links abaixo para visualizar.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          {pages.map((page, index) => (
            <Link 
              key={index} 
              href={page.path}
              className="group block bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#F4CDD4] hover:shadow-lg hover:shadow-[#F4CDD4]/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center text-[#0D0C0D] group-hover:scale-110 transition-transform">
                  <page.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${page.statusColor}`}>
                  {page.status}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-2 group-hover:text-[#F4CDD4] transition-colors">
                {page.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {page.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D0C0D] group-hover:gap-3 transition-all">
                Visualizar Página <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
