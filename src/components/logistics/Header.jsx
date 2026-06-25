import React from "react";
import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#1a1a2e] sticky top-0 z-50">
      <div className="max-w-[400px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00C7D9] flex items-center justify-center">
            <span className="text-white font-bold text-xs">DL</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight tracking-wide">
              Delovye Linii
            </p>
            <p className="text-[#9CA3AF] text-[10px] leading-tight">Логистика</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20">
            <Bell size={16} className="text-white" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F59E0B] rounded-full" />
          </button>
          <button className="w-9 h-9 rounded-full bg-[#00C7D9]/20 flex items-center justify-center transition-colors hover:bg-[#00C7D9]/30">
            <User size={16} className="text-[#00C7D9]" />
          </button>
        </div>
      </div>
    </header>
  );
}