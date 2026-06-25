import React, { useState } from "react";
import { Search, ArrowDownUp, ArrowRight, HelpCircle } from "lucide-react";

export default function HeroBlock() {
  const [cityFrom, setCityFrom] = useState("Москва");
  const [cityTo, setCityTo] = useState("Санкт-Петербург");

  const handleSwap = () => {
    setCityFrom(cityTo);
    setCityTo(cityFrom);
  };

  return (
    <div className="bg-[#1a1a2e]">
      <div className="max-w-[400px] mx-auto px-4 pb-6 space-y-4">
        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Отследить отправление или поиск..."
            className="flex-1 h-11 rounded-xl bg-white px-4 text-sm text-[#1a1a2e] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[#00C7D9]/40 transition-shadow"
          />
          <button className="w-11 h-11 rounded-xl bg-[#ffcc00] flex items-center justify-center shrink-0 hover:bg-[#e6b800] active:scale-95 transition-all">
            <Search size={18} className="text-[#1a1a2e]" />
          </button>
        </div>

        {/* City Inputs */}
        <div className="flex gap-2 items-center">
          <div className="flex-1 space-y-2">
            <input
              type="text"
              value={cityFrom}
              onChange={(e) => setCityFrom(e.target.value)}
              className="w-full h-11 rounded-xl bg-white/10 border border-white/15 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#00C7D9]/60 focus:bg-white/15 transition-all"
              placeholder="Город отправления"
            />
            <input
              type="text"
              value={cityTo}
              onChange={(e) => setCityTo(e.target.value)}
              className="w-full h-11 rounded-xl bg-white/10 border border-white/15 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#00C7D9]/60 focus:bg-white/15 transition-all"
              placeholder="Город назначения"
            />
          </div>
          <button
            onClick={handleSwap}
            className="w-11 h-[90px] rounded-xl bg-[#ffcc00] flex items-center justify-center shrink-0 hover:bg-[#e6b800] active:scale-95 transition-all"
          >
            <ArrowDownUp size={18} className="text-[#1a1a2e]" />
          </button>
        </div>

        {/* Calculate Button */}
        <button className="w-full h-12 rounded-xl bg-[#ffcc00] text-[#1a1a2e] font-semibold text-sm hover:bg-[#e6b800] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ffcc00]/20">
          Рассчитать и заказать
          <ArrowRight size={16} />
        </button>

        {/* Help */}
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
          <div className="flex items-center gap-2">
            <HelpCircle size={16} className="text-[#9CA3AF]" />
            <span className="text-white/70 text-xs">Нужна помощь с выбором услуги?</span>
          </div>
          <button className="w-8 h-8 rounded-lg bg-[#ffcc00] flex items-center justify-center hover:bg-[#e6b800] active:scale-95 transition-all">
            <ArrowRight size={14} className="text-[#1a1a2e]" />
          </button>
        </div>
      </div>
    </div>
  );
}