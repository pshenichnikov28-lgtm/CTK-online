import React from "react";

const TABS = [
  { key: "people", label: "Частным лицам" },
  { key: "business", label: "Бизнесу" },
  { key: "manufacturers", label: "Производителям" },
  { key: "online_stores", label: "Интернет-магазинам" },
  { key: "importers_exporters", label: "Импорт/Экспорт" },
];

export default function TabNav({ activeTab, onTabChange }) {
  return (
    <div className="max-w-[400px] mx-auto px-4 py-4">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-[#1a1a2e] text-white shadow-md"
                : "bg-[#F5F5F7] text-[#6B7280] hover:bg-[#EEF0F3] hover:text-[#1a1a2e]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}