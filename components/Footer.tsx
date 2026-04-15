/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Youtube, MessageCircle, ChevronDown, HelpCircle, Mail, Phone, Sparkles, Tag, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-[#0D0C0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8 mb-8">
          
          {/* Col 1: Produtos */}
          <div className="space-y-2">
            <h3 className="font-bold text-base tracking-tight hidden md:block">Produtos</h3>
            <details className="group md:hidden border-b border-gray-100 pb-4">
              <summary className="font-bold text-base flex justify-between items-center cursor-pointer list-none">
                Produtos
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" />
              </summary>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors font-medium text-[#0D0C0D]">Todos os produtos</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Shampoos</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Máscaras</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Condicionadores</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Perfumes</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Finalizadores</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Kits</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Auxiliares</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Acessórios</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Coloração</a></li>
                <li><a href="#" className="group hover:text-[#0D0C0D] transition-colors flex items-center gap-2">Lançamentos <Sparkles className="w-4 h-4 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" /></a></li>
                <li><a href="#" className="group hover:text-[#0D0C0D] transition-colors flex items-center gap-2">Promoções <Tag className="w-4 h-4 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" /></a></li>
              </ul>
            </details>
            <ul className="hidden md:block space-y-1.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors font-medium text-[#0D0C0D]">Todos os produtos</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Shampoos</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Máscaras</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Condicionadores</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Perfumes</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Finalizadores</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Kits</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Auxiliares</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Acessórios</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Coloração</a></li>
              <li><a href="#" className="group hover:text-[#0D0C0D] transition-colors flex items-center gap-2">Lançamentos <Sparkles className="w-4 h-4 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" /></a></li>
              <li><a href="#" className="group hover:text-[#0D0C0D] transition-colors flex items-center gap-2">Promoções <Tag className="w-4 h-4 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" /></a></li>
            </ul>
          </div>

          {/* Col 2: Linhas Bubbles */}
          <div className="space-y-2">
            <h3 className="font-bold text-base tracking-tight hidden md:block">Linhas Bubbles</h3>
            <details className="group md:hidden border-b border-gray-100 pb-4">
              <summary className="font-bold text-base flex justify-between items-center cursor-pointer list-none">
                Linhas Bubbles
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" />
              </summary>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">PRO</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Essential</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Xperience</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Collora</a></li>
              </ul>
            </details>
            <ul className="hidden md:block space-y-1.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">PRO</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Essential</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Xperience</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Collora</a></li>
            </ul>
          </div>

          {/* Col 3: Sobre */}
          <div className="space-y-2">
            <h3 className="font-bold text-base tracking-tight hidden md:block">Sobre</h3>
            <details className="group md:hidden border-b border-gray-100 pb-4">
              <summary className="font-bold text-base flex justify-between items-center cursor-pointer list-none">
                Sobre
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" />
              </summary>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                <li><a href="https://www.bubbles.com.br/pages/quem-somos?" className="hover:text-[#F4CDD4] transition-colors">Quem somos</a></li>
                <li><a href="https://www.encontre.bubbles.com.br/" className="hover:text-[#F4CDD4] transition-colors">Onde encontrar</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Blog Bubbles</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Academy (em breve)</a></li>
                <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Quero ser distribuidor</a></li>
                <li><a href="https://www.encontre.bubbles.com.br/" className="hover:text-[#F4CDD4] transition-colors">Encontrar distribuidor</a></li>
              </ul>
            </details>
            <ul className="hidden md:block space-y-1.5 text-sm text-gray-600">
              <li><a href="https://www.bubbles.com.br/pages/quem-somos?" className="hover:text-[#F4CDD4] transition-colors">Quem somos</a></li>
              <li><a href="https://www.encontre.bubbles.com.br/" className="hover:text-[#F4CDD4] transition-colors">Onde encontrar</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Blog Bubbles</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Academy (em breve)</a></li>
              <li><a href="#" className="hover:text-[#F4CDD4] transition-colors">Quero ser distribuidor</a></li>
              <li><a href="https://www.encontre.bubbles.com.br/" className="hover:text-[#F4CDD4] transition-colors">Encontrar distribuidor</a></li>
            </ul>

            <div className="pt-4">
              <h3 className="font-bold text-base tracking-tight mb-2">Minha conta</h3>
              <div className="space-y-1.5 text-sm text-gray-600">
                <p><a href="#" className="hover:text-[#F4CDD4] transition-colors font-medium">Entrar ou Cadastrar</a></p>
                <p><a href="#" className="hover:text-[#F4CDD4] transition-colors font-medium">Meus pedidos</a></p>
                <p><a href="#" className="hover:text-[#F4CDD4] transition-colors font-medium">Cadastrar na newsletter</a></p>
              </div>
            </div>
          </div>

          {/* Col 4: Suporte */}
          <div className="space-y-4 bg-gray-50 p-6 rounded-2xl md:bg-transparent md:p-0 md:rounded-none">
            <div>
              <h3 className="font-bold text-base tracking-tight mb-2">Contato</h3>
              <p className="text-sm text-gray-500 mb-3">Entendemos a rotina do seu banho e tosa. Conte com a nossa equipe para te apoiar no que precisar, estamos aqui por você.</p>
              <div className="space-y-1.5 text-sm text-gray-600">
                <p>
                  <a href="https://www.bubbles.com.br/pages/contact/" className="group hover:text-[#0D0C0D] transition-colors font-medium flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" />
                    Precisa de ajuda?
                  </a>
                </p>
                <p>
                  <a href="/faq" className="group hover:text-[#0D0C0D] transition-colors font-medium flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" />
                    Perguntas Frequentes (FAQ)
                  </a>
                </p>
                <p>
                  <a href="mailto:ajuda@bubbles.com.br" className="group hover:text-[#0D0C0D] transition-colors font-medium flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors" />
                    ajuda@bubbles.com.br
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/5514996312932?text=Olá,%20preciso%20de%20ajuda" target="_blank" rel="noopener noreferrer" className="group hover:text-[#0D0C0D] transition-colors font-medium flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#F4CDD4] group-hover:text-[#0D0C0D] transition-colors"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  14 996312932
                  </a>
                </p>
                <div className="pt-2">
                  <div className="flex items-start gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-[#F4CDD4] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0D0C0D]">Horário de funcionamento</p>
                      <p>Suporte Técnico Humanizado de segunda a sexta, das 8h às 17h30.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 md:border-none md:pt-0">
              <h4 className="font-semibold text-sm mb-3">Siga a Bubbles</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer: Security, Payments & Legal */}
        <div className="border-t border-gray-200 pt-4 mt-8">
          
          {/* Policies */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm font-medium items-center pb-4 border-b border-gray-100">
            <span className="font-bold text-gray-700 mr-1">Políticas:</span>
            <a href="/politica-de-frete-e-entrega" className="hover:text-[#0D0C0D] transition-colors whitespace-nowrap">Envio e Frete</a>
            <span className="text-gray-300">|</span>
            <a href="/politica-de-privacidade" className="hover:text-[#0D0C0D] transition-colors whitespace-nowrap">Privacidade</a>
            <span className="text-gray-300">|</span>
            <a href="/termos-de-servico" className="hover:text-[#0D0C0D] transition-colors whitespace-nowrap">Termos de Serviço</a>
            <span className="text-gray-300">|</span>
            <a href="/politica-de-troca-e-devolucoes" className="hover:text-[#0D0C0D] transition-colors whitespace-nowrap">Troca e Devoluções</a>
          </div>

          {/* Badges Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
            
            {/* Payments */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pagamento Seguro</span>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-[22px] w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-[22px] w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-[22px] w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-[22px] w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_validacao_oficial_banco_central_brasil.svg" alt="Pix" className="h-[20px] w-auto grayscale hover:grayscale-0 transition-all duration-300 ml-1" />
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
              <div className="flex flex-wrap justify-center md:justify-end gap-1.5 md:gap-2 items-center">
                <img src="https://cdn.shopify.com/s/images/badges/shopify-secure-badge-white.svg" alt="Shopify Secure" className="h-[24px] sm:h-[28px] md:h-[34px] w-auto border border-gray-200 rounded-md bg-white grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://cdn.shopify.com/s/files/1/0886/3596/5714/files/162134751179189.png?v=1725283377" alt="Site Seguro SSL" className="h-[24px] sm:h-[28px] md:h-[34px] w-auto border border-gray-200 rounded-md bg-white grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://cdn.shopify.com/s/files/1/0886/3596/5714/files/public.webp?v=1725283228" alt="Google Safe Browsing" className="h-[24px] sm:h-[28px] md:h-[34px] w-auto border border-gray-200 rounded-md bg-white grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://cdn.shopify.com/s/files/1/0455/2065/0401/files/logo_ra1000_inst.webp?v=1725449621" alt="RA1000" className="h-[24px] sm:h-[28px] md:h-[34px] w-auto border border-gray-200 rounded-md bg-white grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>

          </div>

          {/* Legal Text */}
          <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
            <p>© 2026 Bubbles Pet | CNPJ: 31.900.078/0001-96 | R. Fortunato Zilo, 238 - Vila Antonieta II, Lençóis Paulista - SP | CEP: 18681-200</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
