import React from "react";
import {
  Package, Mail, Truck, Warehouse, Globe, ShieldCheck,
  Route, Zap, FileText, Factory, Clock, Container,
  CheckCircle, ShoppingCart, MapPin, RotateCcw, Code,
  ClipboardList, Box
} from "lucide-react";

const ICON_MAP = {
  Package, Mail, Truck, Warehouse, Globe, ShieldCheck,
  Route, Zap, FileText, Factory, Clock, Container,
  CheckCircle, ShoppingCart, MapPin, RotateCcw, Code,
  ClipboardList, Box
};

export default function ServiceCard({ service }) {
  const IconComp = ICON_MAP[service.icon] || Box;

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col justify-between border border-[#EEF0F3] hover:border-[#00C7D9]/30 hover:shadow-lg hover:shadow-[#00C7D9]/5 transition-all duration-300 group cursor-pointer">
      <div>
        <div className="w-10 h-10 rounded-xl bg-[#E0F7FA] flex items-center justify-center mb-3 group-hover:bg-[#00C7D9]/20 transition-colors">
          <IconComp size={20} className="text-[#00C7D9]" />
        </div>
        <h3 className="text-[13px] font-semibold text-[#1a1a2e] leading-tight mb-1">
          {service.title}
        </h3>
        <p className="text-[11px] text-[#6B7280] leading-relaxed line-clamp-2">
          {service.description}
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        {service.price && (
          <span className="text-[11px] font-semibold text-[#00C7D9]">
            {service.price}
          </span>
        )}
        {service.badge && (
          <span className="text-[9px] font-bold uppercase tracking-wider bg-[#FDF3D9] text-[#D97706] px-2 py-0.5 rounded-full">
            {service.badge}
          </span>
        )}
      </div>
    </div>
  );
}