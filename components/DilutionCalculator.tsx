'use client';

import { useState } from 'react';

export function DilutionCalculator() {
  const [proportion, setProportion] = useState('1:4');
  const [customProduct, setCustomProduct] = useState(1);
  const [customWater, setCustomWater] = useState(10);
  const [finalVolume, setFinalVolume] = useState(500);

  const handleProportionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProp = e.target.value;
    setProportion(newProp);
    if (newProp === '1:4') {
      setFinalVolume(500);
    } else if (newProp === '1:5') {
      setFinalVolume(600);
    } else if (newProp === '1:10') {
      setFinalVolume(1100);
    }
  };

  let pParts = 1;
  let wParts = 10;

  if (proportion === 'custom') {
    pParts = customProduct;
    wParts = customWater;
  } else {
    const parts = proportion.split(':');
    pParts = parseInt(parts[0]);
    wParts = parseInt(parts[1]);
  }

  const tParts = pParts + wParts;
  const productParts = pParts;
  const waterParts = wParts;
  const totalParts = tParts;

  let productMl = 0;
  let waterMl = 0;

  if (tParts > 0 && finalVolume > 0) {
    const partVolume = finalVolume / tParts;
    productMl = Math.round(partVolume * pParts);
    waterMl = Math.round(partVolume * wParts);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-4 md:p-6 shadow-lg shadow-gray-100/50">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Calculadora Interativa (Compacta) */}
        <div className="md:col-span-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-gray-700">Proporção</label>
              <select 
                value={proportion}
                onChange={handleProportionChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-[#0D0C0D] font-medium focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
              >
                <option value="1:1">1:1 (Uso Direto)</option>
                <option value="1:4">1:4 (Sensorial / Essential)</option>
                <option value="1:5">1:5</option>
                <option value="1:10">1:10 (Ego / Pro)</option>
                <option value="custom">Customizado</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-gray-700">Volume Final (ml)</label>
              <div className="relative">
                <input 
                  type="number" 
                  min="10"
                  step="10"
                  value={finalVolume}
                  onChange={(e) => setFinalVolume(parseInt(e.target.value) || 0)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-[#0D0C0D] font-bold focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">ml</span>
              </div>
            </div>
          </div>

          {proportion === 'custom' && (
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">Partes de Produto</label>
                <input 
                  type="number" min="1" value={customProduct} onChange={(e) => setCustomProduct(parseInt(e.target.value) || 1)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">Partes de Água</label>
                <input 
                  type="number" min="1" value={customWater} onChange={(e) => setCustomWater(parseInt(e.target.value) || 1)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>
          )}

          {/* Resultados */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="bg-white p-3 rounded-xl border border-[#F4CDD4]/50 shadow-sm text-center flex flex-col justify-between">
              <span className="block text-[9px] md:text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Produto Concentrado</span>
              <strong className="text-xl md:text-2xl font-black text-[#0D0C0D]">{productMl} <span className="text-[10px] md:text-xs text-gray-400 font-medium">ml</span></strong>
            </div>
            <div className="bg-white p-3 rounded-xl border border-blue-200 shadow-sm text-center flex flex-col justify-between">
              <span className="block text-[9px] md:text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Água</span>
              <strong className="text-xl md:text-2xl font-black text-blue-600">{waterMl} <span className="text-[10px] md:text-xs text-blue-300 font-medium">ml</span></strong>
            </div>
            <div className="col-span-2 md:col-span-1 bg-white p-3 rounded-xl border border-purple-200 shadow-sm text-center flex flex-col justify-between">
              <span className="block text-[9px] md:text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Mistura Final</span>
              <strong className="text-xl md:text-2xl font-black text-purple-600">{finalVolume} <span className="text-[10px] md:text-xs text-purple-300 font-medium">ml</span></strong>
            </div>
          </div>
        </div>

        {/* Ilustração Visual */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-center flex-1">
            <p className="text-center text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Mistura Final</p>
            
            <div className="flex items-end justify-between gap-2 w-full">
              {/* Produto */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-6 h-8 bg-[#F4CDD4]/30 border border-[#F4CDD4] rounded-b-md rounded-t-sm flex items-end justify-center pb-0.5 mb-2">
                  <div className="w-full h-3/4 bg-[#F4CDD4]/80 rounded-b-sm"></div>
                </div>
                <div className="text-center h-8 flex flex-col justify-end">
                  <strong className="block text-xs text-[#0D0C0D] leading-tight">{productParts} Parte{productParts !== 1 ? 's' : ''}</strong>
                  <span className="text-[10px] text-gray-500 leading-tight">Produto Concentrado</span>
                </div>
              </div>

              <div className="text-gray-400 font-black text-lg mb-8">+</div>

              {/* Água */}
              <div className="flex flex-col items-center flex-1">
                <div className="flex flex-wrap gap-1 justify-center max-w-[56px] md:max-w-[84px] mb-2">
                  {Array.from({ length: Math.min(waterParts, 10) }).map((_, i) => (
                    <div key={`w-${i}`} className="bg-blue-50 border border-blue-200 rounded-b-md rounded-t-sm flex items-end justify-center pb-0.5 w-6 h-8">
                      <div className="w-full h-3/4 bg-blue-300/50 rounded-b-sm"></div>
                    </div>
                  ))}
                  {waterParts > 10 && <span className="text-xs font-bold text-gray-400 self-center">+{waterParts - 10}</span>}
                </div>
                <div className="text-center h-8 flex flex-col justify-end">
                  <strong className="block text-xs text-[#0D0C0D] leading-tight">{waterParts} Parte{waterParts !== 1 ? 's' : ''}</strong>
                  <span className="text-[10px] text-gray-500 leading-tight">Água</span>
                </div>
              </div>

              <div className="text-gray-400 font-black text-lg mb-8">=</div>

              {/* Total */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-10 bg-purple-50 border border-purple-200 rounded-b-md rounded-t-sm flex items-end justify-center pb-0.5 mb-2">
                  <div className="w-full h-full bg-purple-300/50 rounded-b-sm"></div>
                </div>
                <div className="text-center h-8 flex flex-col justify-end">
                  <strong className="block text-xs text-[#0D0C0D] leading-tight">{totalParts} Partes</strong>
                  <span className="text-[10px] text-gray-500 leading-tight">Mistura Final</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alerta Sticky */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg py-2 px-3 text-center">
            <p className="text-xs text-amber-800 font-medium">
              <strong>⚠️ IMPORTANTE:</strong> Sempre coloque a água primeiro para evitar espuma excessiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
