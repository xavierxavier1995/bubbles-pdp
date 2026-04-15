import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import BrazilMap from '@svg-maps/brazil';
import WorldMap from '@svg-maps/world';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distributorsPath = path.join(__dirname, 'app', 'data', 'distributors.json');
const distributorsData = JSON.parse(fs.readFileSync(distributorsPath, 'utf8'));

const INTL_DISTRIBUTORS = [
  { id: 'cl-1', name: 'Distribuidora Santiago', country: 'Chile', countryCode: 'cl', phone: '56999999999', cities: ['Santiago'], lat: -33.4489, lng: -70.6693 },
  { id: 'cl-2', name: 'Pet Supplies Valparaíso', country: 'Chile', countryCode: 'cl', phone: '56988888888', cities: ['Valparaíso'], lat: -33.0456, lng: -71.6197 },
  { id: 'ca-1', name: 'Maple Pet Care', country: 'Canadá', countryCode: 'ca', phone: '14165550198', cities: ['Toronto'], lat: 43.65107, lng: -79.347015 }
];

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontre um Distribuidor | Bubbles® Cosméticos Pet Profissionais</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Figtree', sans-serif;
            background-color: #ffffff;
            color: #0D0C0D;
        }
        ::selection {
            background-color: #F4CDD4;
            color: #0D0C0D;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .map-path {
            transition: fill 0.3s ease;
            fill: #F3F4F6;
            stroke: #FFFFFF;
            stroke-width: 2;
        }
        .map-path.active {
            fill: #F4CDD4;
            cursor: pointer;
        }
        .map-path.active:hover {
            fill: #e8b8c2;
        }
        .map-path.selected {
            fill: #F48FB1 !important;
        }
        .world-map-path {
            transition: fill 0.3s ease;
            fill: #F3F4F6;
            stroke: #FFFFFF;
            stroke-width: 1;
        }
        .world-map-path.active {
            fill: #F48FB1;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col lg:flex-row">
        
        <!-- Coluna Esquerda -->
        <div class="w-full lg:w-[60%] flex flex-col h-screen overflow-y-auto scrollbar-hide">
            <div class="px-6 md:px-12 pt-8 pb-12 flex-1">
                
                <!-- Barra de Pesquisa -->
                <div class="w-full max-w-2xl mx-auto mb-8 sticky top-0 z-30 pt-4 pb-4 bg-white/95 backdrop-blur-md">
                    <div class="bg-white rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2 flex items-center transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div class="flex-1 px-6 py-2 flex flex-col justify-center">
                            <label for="search-location" class="text-[10px] font-bold text-gray-800 uppercase tracking-wider mb-0.5 cursor-pointer">
                                Onde
                            </label>
                            <input 
                                id="search-location"
                                type="text" 
                                placeholder="Digite sua cidade ou estado" 
                                class="w-full bg-transparent text-base text-[#0D0C0D] placeholder:text-gray-400 focus:outline-none"
                            />
                        </div>
                        <button class="w-12 h-12 rounded-full bg-[#F4CDD4] flex items-center justify-center shrink-0 hover:bg-[#e8b8c2] transition-colors shadow-sm" aria-label="Buscar">
                            <i data-lucide="search" class="w-5 h-5 text-white" stroke-width="2.5"></i>
                        </button>
                    </div>
                </div>

                <!-- Texto Institucional -->
                <div class="max-w-2xl mx-auto mb-10">
                    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        Encontre um Distribuidor Oficial
                    </h1>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        A Bubbles® está presente em todas as regiões do Brasil. Temos sempre uma distribuidora parceira pronta para atender seu banho e tosa com agilidade e consultoria técnica.
                    </p>
                </div>

                <!-- Grade de Cards -->
                <div class="max-w-2xl mx-auto relative">
                    <div class="sticky top-[88px] bg-white/90 backdrop-blur-md z-20 py-4 border-b border-gray-100 mb-6 flex items-center justify-between">
                        <h2 class="text-xl font-bold tracking-tight">Resultados da Busca</h2>
                        <span id="results-count" class="text-xs font-bold bg-[#F4CDD4]/30 text-[#0D0C0D] px-3 py-1.5 rounded-full">
                            0 parceiros
                        </span>
                    </div>

                    <div id="no-results" class="hidden bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 text-center shadow-sm flex flex-col items-center">
                        <i data-lucide="map-pin" class="w-12 h-12 text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-bold text-[#0D0C0D] mb-2">Nenhum distribuidor encontrado na sua região</h3>
                        <p class="text-gray-600 mb-8 max-w-md">
                            Não se preocupe! Você pode comprar diretamente conosco no whatsapp com condições especiais exclusivas.
                        </p>
                        <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Busquei%20por%20um%20distribuidor%20na%20minha%20cidade%20e%20n%C3%A3o%20encontrei.%20Gostaria%20de%20saber%20mais%20sobre%20as%20condi%C3%A7%C3%B5es%20especiais%20para%20comprar%20diretamente%20com%20voc%C3%AAs." target="_blank" rel="nofollow noopener noreferrer" class="bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center gap-2 shadow-sm shadow-[#25D366]/20">
                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                            Comprar com Condição Especial
                        </a>
                    </div>

                    <div id="distributors-grid" class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <!-- Cards will be injected here -->
                    </div>
                    
                    <div id="load-more-container" class="pt-8 pb-4 text-center hidden">
                        <button id="load-more-btn" class="bg-[#F4CDD4] text-[#0D0C0D] font-bold px-8 py-3 rounded-lg hover:bg-[#e8b8c2] transition-all shadow-sm hover:shadow-md text-sm">
                            Ver mais distribuidores
                        </button>
                    </div>
                </div>

                <!-- Footer CTA -->
                <div class="max-w-2xl mx-auto mt-16">
                    <div class="bg-[#FCF8F9] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div class="flex flex-col md:flex-row items-center text-center md:text-left gap-5">
                            <div class="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                                <i data-lucide="message-circle" class="w-6 h-6 text-[#0D0C0D]" stroke-width="1.5"></i>
                            </div>
                            <div>
                                <h2 class="text-lg font-bold text-[#0D0C0D] mb-1">Quer ser um distribuidor?</h2>
                                <p class="text-[#0D0C0D]/70 text-sm">Nossa equipe está pronta para ajudar você a ser um parceiro oficial.</p>
                            </div>
                        </div>
                        <button class="shrink-0 bg-[#0D0C0D] text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm">
                            Falar com equipe <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <!-- Coluna Direita (Mapa) -->
        <div class="hidden lg:block lg:w-[40%] h-screen sticky top-0 bg-gray-50 border-l border-gray-200 p-8 flex flex-col">
            <div class="flex-1 flex flex-col justify-center relative">
                
                <div class="absolute top-0 right-0 flex flex-col gap-2 z-10">
                    <button id="intl-btn" class="py-2 px-3 text-xs font-bold bg-white border border-gray-200 text-[#0D0C0D] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center gap-1.5">
                        <span class="flex items-center gap-1.5">
                            <i data-lucide="globe" class="w-3.5 h-3.5"></i> Internacional
                        </span>
                    </button>
                    
                    <div class="h-8">
                        <button id="clear-filter-btn" class="hidden w-full py-2 px-3 text-xs font-bold bg-[#F4CDD4] text-[#0D0C0D] rounded-lg hover:bg-[#e8b8c2] transition-colors shadow-sm flex items-center justify-center gap-1">
                            <i data-lucide="x" class="w-3 h-3"></i> Limpar Filtro
                        </button>
                    </div>
                </div>

                <div class="text-center mb-6 mt-8">
                    <h2 class="text-xl font-bold tracking-tight">Nossa Cobertura</h2>
                    <p id="map-subtitle" class="text-sm text-gray-500 mt-1">Selecione uma bolha no mapa para filtrar</p>
                </div>
                
                <div class="flex-1 flex items-center justify-center">
                    <div class="relative w-full max-w-md mx-auto aspect-square">
                        <svg id="brazil-map" viewBox="${BrazilMap.viewBox}" class="w-full h-full drop-shadow-sm">
                            <g>
                                ${BrazilMap.locations.map(loc => '<path id="' + loc.id + '" name="' + loc.name + '" d="' + loc.path + '" class="map-path"></path>').join('')}
                            </g>
                            <g id="map-pin" class="hidden pointer-events-none drop-shadow-md">
                                <path d="M0,-24 C8,-24 14,-16 14,-8 C14,4 0,16 0,16 C0,16 -14,4 -14,-8 C-14,-16 -8,-24 0,-24 Z" fill="#E91E63" stroke="#FFFFFF" stroke-width="2"/>
                                <circle cx="0" cy="-10" r="4" fill="#FFFFFF" />
                            </g>
                        </svg>
                        
                        <div id="map-tooltip" class="hidden absolute top-4 right-4 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100 pointer-events-none z-10">
                            <span class="text-sm font-bold text-[#0D0C0D]"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Modals -->
    <div id="cities-modal" class="hidden fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
        <div class="bg-white rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col shadow-xl relative">
            <div class="p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 id="cities-modal-title" class="font-bold text-[#0D0C0D] truncate pr-4">Cidades atendidas</h3>
                <button id="close-cities-modal" class="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors shrink-0">
                    <i data-lucide="x" class="w-4 h-4 text-gray-600"></i>
                </button>
            </div>
            <div class="p-4 border-b border-gray-100">
                <div class="relative">
                    <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"></i>
                    <input id="cities-search" type="text" placeholder="Buscar cidade..." class="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm text-[#0D0C0D] placeholder:text-gray-500 focus:outline-none focus:border-[#F4CDD4]">
                </div>
            </div>
            <div id="cities-list" class="p-4 overflow-y-auto flex-1 flex flex-wrap gap-2">
            </div>
        </div>
    </div>

    <div id="intl-effect" class="hidden fixed inset-0 z-[70] flex items-center justify-center bg-[#F4CDD4]/95 backdrop-blur-md transition-opacity duration-300">
        <div class="text-white text-4xl md:text-6xl font-extrabold tracking-tight animate-pulse flex items-center gap-4 drop-shadow-lg">
            <i data-lucide="globe" class="w-12 h-12 md:w-16 md:h-16"></i> Bubbles pelo Mundo
        </div>
    </div>

    <div id="intl-modal" class="hidden fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
        <div class="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
            <div class="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                <div class="flex items-center gap-3">
                    <div class="bg-[#F4CDD4] p-2.5 rounded-xl shadow-sm">
                        <i data-lucide="globe" class="w-6 h-6 text-[#0D0C0D]"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-extrabold text-[#0D0C0D]">Distribuidores Internacionais</h3>
                        <p class="text-sm text-gray-500 font-medium">Encontre a Bubbles pelo mundo</p>
                    </div>
                </div>
                <button id="close-intl-modal" class="p-2.5 bg-white hover:bg-gray-100 rounded-full transition-colors shrink-0 shadow-sm border border-gray-200">
                    <i data-lucide="x" class="w-5 h-5 text-gray-600"></i>
                </button>
            </div>
            <div class="p-6 overflow-y-auto flex-1 bg-white">
                <div class="mb-8 bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-inner">
                    <div class="relative w-full max-w-lg mx-auto aspect-video">
                        <svg viewBox="${WorldMap.viewBox}" class="w-full h-full drop-shadow-sm">
                            <g>
                                ${WorldMap.locations.map(loc => '<path id="' + loc.id + '" name="' + loc.name + '" d="' + loc.path + '" class="world-map-path"></path>').join('')}
                            </g>
                        </svg>
                    </div>
                </div>
                <div id="intl-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                </div>
            </div>
        </div>
    </div>

    <script>
        const DISTRIBUTORS = ${JSON.stringify(distributorsData)};
        const INTL_DISTRIBUTORS = ${JSON.stringify(INTL_DISTRIBUTORS)};
        const BRAZIL_LOCATIONS = ${JSON.stringify(BrazilMap.locations)};
        
        let searchQuery = '';
        let selectedState = null;
        let visibleCount = 6;
        let activeStates = [...new Set(DISTRIBUTORS.map(d => d.state.toUpperCase()))];
        let activeCountries = ['cl', 'ca'];

        const stateWeights = {
            'SP': 1, 'MG': 2, 'RJ': 3, 'BA': 4, 'PR': 5, 'RS': 6, 'PE': 7, 'CE': 8, 'PA': 9, 'SC': 10
        };

        // Initialize Icons
        lucide.createIcons();

        // Elements
        const searchInput = document.getElementById('search-location');
        const grid = document.getElementById('distributors-grid');
        const noResults = document.getElementById('no-results');
        const resultsCount = document.getElementById('results-count');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const loadMoreContainer = document.getElementById('load-more-container');
        const mapPaths = document.querySelectorAll('.map-path');
        const mapTooltip = document.getElementById('map-tooltip');
        const mapPin = document.getElementById('map-pin');
        const mapSubtitle = document.getElementById('map-subtitle');
        const clearFilterBtn = document.getElementById('clear-filter-btn');
        const intlBtn = document.getElementById('intl-btn');
        const intlEffect = document.getElementById('intl-effect');
        const intlModal = document.getElementById('intl-modal');
        const closeIntlModal = document.getElementById('close-intl-modal');
        const intlGrid = document.getElementById('intl-grid');
        const worldMapPaths = document.querySelectorAll('.world-map-path');
        
        const citiesModal = document.getElementById('cities-modal');
        const closeCitiesModal = document.getElementById('close-cities-modal');
        const citiesSearch = document.getElementById('cities-search');
        const citiesList = document.getElementById('cities-list');
        const citiesModalTitle = document.getElementById('cities-modal-title');
        
        let currentModalCities = [];

        // Map Setup
        mapPaths.forEach(path => {
            const id = path.id.toUpperCase();
            if (activeStates.includes(id)) {
                path.classList.add('active');
                
                path.addEventListener('click', () => {
                    selectedState = selectedState === id ? null : id;
                    visibleCount = 6;
                    updateMap();
                    renderDistributors();
                });

                path.addEventListener('mouseenter', () => {
                    const name = path.getAttribute('name');
                    mapTooltip.querySelector('span').textContent = name;
                    mapTooltip.classList.remove('hidden');
                });

                path.addEventListener('mouseleave', () => {
                    if (!selectedState) {
                        mapTooltip.classList.add('hidden');
                    } else {
                        const selectedName = BRAZIL_LOCATIONS.find(l => l.id.toUpperCase() === selectedState)?.name;
                        mapTooltip.querySelector('span').textContent = selectedName;
                    }
                });
            }
        });

        worldMapPaths.forEach(path => {
            if (activeCountries.includes(path.id.toLowerCase())) {
                path.classList.add('active');
            }
        });

        function updateMap() {
            mapPaths.forEach(path => {
                path.classList.remove('selected');
                if (selectedState && path.id.toUpperCase() === selectedState) {
                    path.classList.add('selected');
                    const bbox = path.getBBox();
                    const x = bbox.x + bbox.width / 2;
                    const y = bbox.y + bbox.height / 2;
                    mapPin.setAttribute('transform', \`translate(\${x}, \${y})\`);
                    mapPin.classList.remove('hidden');
                    
                    const selectedName = BRAZIL_LOCATIONS.find(l => l.id.toUpperCase() === selectedState)?.name;
                    mapTooltip.querySelector('span').textContent = selectedName;
                    mapTooltip.classList.remove('hidden');
                }
            });

            if (!selectedState) {
                mapPin.classList.add('hidden');
                mapTooltip.classList.add('hidden');
                clearFilterBtn.classList.add('hidden');
                mapSubtitle.innerHTML = 'Selecione uma bolha no mapa para filtrar';
            } else {
                clearFilterBtn.classList.remove('hidden');
                mapSubtitle.innerHTML = \`Mostrando parceiros em <strong>\${selectedState}</strong>\`;
            }
        }

        // Search
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            visibleCount = 6;
            renderDistributors();
        });

        clearFilterBtn.addEventListener('click', () => {
            selectedState = null;
            visibleCount = 6;
            updateMap();
            renderDistributors();
        });

        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 6;
            renderDistributors();
        });

        function getFilteredDistributors() {
            const filtered = DISTRIBUTORS.filter(d => {
                const matchesSearch = 
                    d.cities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase())) || 
                    d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    d.name.toLowerCase().includes(searchQuery.toLowerCase());
                
                const matchesState = selectedState ? d.state.toUpperCase() === selectedState : true;

                return matchesSearch && matchesState;
            });

            return filtered.sort((a, b) => {
                const weightA = stateWeights[a.state] || 99;
                const weightB = stateWeights[b.state] || 99;
                return weightA - weightB;
            });
        }

        function createCardHTML(dist, isIntl = false) {
            const visibleCities = dist.cities.slice(0, 3);
            const hiddenCount = dist.cities.length - 3;
            const whatsappMessage = encodeURIComponent('Olá! Vi no site da Bubbles que você é fornecedor e gostaria de comprar produtos para meu estabelecimento.');
            const whatsappLink = \`https://wa.me/\${dist.phone}?text=\${whatsappMessage}\`;
            const mapsLink = \`https://www.google.com/maps/search/?api=1&query=\${encodeURIComponent(dist.name + ' ' + dist.cities[0] + ' ' + (dist.state || dist.country))}\`;

            let citiesHtml = visibleCities.map(city => 
                \`<span class="text-[10px] font-bold bg-[#F4CDD4]/20 text-[#0D0C0D] px-2 py-1 rounded">\${city}</span>\`
            ).join('');

            if (hiddenCount > 0) {
                citiesHtml += \`<button onclick='openCitiesModal(\${JSON.stringify(dist.cities)}, "\${dist.name}")' class="text-[10px] font-bold bg-[#0D0C0D] text-white px-2 py-1 rounded transition-colors">+\${hiddenCount} CIDADES</button>\`;
            }

            return \`
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F4CDD4] transition-all flex flex-col h-full">
                    <h3 class="text-base font-bold text-[#0D0C0D] leading-tight mb-2 line-clamp-2" title="\${dist.name}">\${dist.name}</h3>
                    <div class="flex flex-wrap gap-1.5 mb-4">\${citiesHtml}</div>
                    <div class="mt-auto space-y-3">
                        <div class="flex items-center justify-between">
                            <div onclick="copyPhone('\${dist.phone}', this)" class="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0D0C0D] cursor-pointer transition-colors" title="Clique para copiar">
                                <i data-lucide="phone" class="w-3 h-3"></i>
                                <span class="font-mono">\${dist.phone}</span>
                                <i data-lucide="copy" class="w-3 h-3 ml-1 opacity-50 copy-icon"></i>
                                <span class="text-green-600 text-[10px] font-bold ml-1 hidden copy-success">Copiado!</span>
                            </div>
                            <a href="\${mapsLink}" target="_blank" rel="nofollow noopener noreferrer" class="text-gray-400 hover:text-[#0D0C0D] text-[10px] underline decoration-gray-200 underline-offset-2 transition-colors flex items-center gap-1">
                                <i data-lucide="map-pin" class="w-3 h-3"></i> Maps
                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <a href="tel:+\${dist.phone}" class="w-full bg-gray-50 text-[#0D0C0D] border border-gray-200 font-bold px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5 text-xs">
                                <i data-lucide="phone" class="w-3.5 h-3.5"></i> Ligar
                            </a>
                            <a href="\${whatsappLink}" target="_blank" rel="nofollow noopener noreferrer" class="w-full bg-[#25D366] text-white font-bold px-2 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-1.5 shadow-sm text-xs">
                                <svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            \`;
        }

        function renderDistributors() {
            const filtered = getFilteredDistributors();
            const visible = filtered.slice(0, visibleCount);
            
            resultsCount.textContent = \`\${filtered.length} parceiro\${filtered.length === 1 ? '' : 's'}\`;

            if (filtered.length === 0) {
                grid.classList.add('hidden');
                noResults.classList.remove('hidden');
                loadMoreContainer.classList.add('hidden');
            } else {
                grid.classList.remove('hidden');
                noResults.classList.add('hidden');
                grid.innerHTML = visible.map(d => createCardHTML(d)).join('');
                
                if (visibleCount < filtered.length) {
                    loadMoreContainer.classList.remove('hidden');
                } else {
                    loadMoreContainer.classList.add('hidden');
                }
                lucide.createIcons();
            }
        }

        // Cities Modal
        window.openCitiesModal = function(cities, name) {
            currentModalCities = cities;
            citiesModalTitle.textContent = \`Cidades atendidas - \${name}\`;
            citiesSearch.value = '';
            renderCitiesList();
            citiesModal.classList.remove('hidden');
        }

        closeCitiesModal.addEventListener('click', () => {
            citiesModal.classList.add('hidden');
        });

        citiesSearch.addEventListener('input', () => {
            renderCitiesList();
        });

        function renderCitiesList() {
            const search = citiesSearch.value.toLowerCase();
            const filtered = currentModalCities.filter(c => c.toLowerCase().includes(search));
            
            if (filtered.length === 0) {
                citiesList.innerHTML = '<p class="text-center text-gray-500 text-sm py-4 w-full">Nenhuma cidade encontrada.</p>';
            } else {
                citiesList.innerHTML = filtered.map(city => 
                    \`<span class="text-xs font-bold bg-[#F4CDD4]/20 text-[#0D0C0D] px-2.5 py-1.5 rounded-md border border-[#F4CDD4]/30">\${city}</span>\`
                ).join('');
            }
        }

        // Copy Phone
        window.copyPhone = function(phone, el) {
            navigator.clipboard.writeText(phone);
            const icon = el.querySelector('.copy-icon');
            const success = el.querySelector('.copy-success');
            icon.classList.add('hidden');
            success.classList.remove('hidden');
            setTimeout(() => {
                icon.classList.remove('hidden');
                success.classList.add('hidden');
            }, 2000);
        }

        // Intl Modal
        intlBtn.addEventListener('click', () => {
            intlEffect.classList.remove('hidden');
            setTimeout(() => {
                intlEffect.classList.add('hidden');
                intlModal.classList.remove('hidden');
                intlGrid.innerHTML = INTL_DISTRIBUTORS.map(d => createCardHTML(d, true)).join('');
                lucide.createIcons();
            }, 1000);
        });

        closeIntlModal.addEventListener('click', () => {
            intlModal.classList.add('hidden');
        });

        // Initial Render
        renderDistributors();
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'encontre-export.html'), htmlContent);
console.log('Exported encontre-export.html');
