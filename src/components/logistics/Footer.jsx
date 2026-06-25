import React from "react";
import { ExternalLink } from "lucide-react";

const LINK_GROUPS = [
  {
    title: "Услуги",
    links: ["Доставка грузов", "Экспресс-доставка", "Складские услуги", "Таможня"],
  },
  {
    title: "Компания",
    links: ["О нас", "Вакансии", "Партнёрам", "Пресса"],
  },
  {
    title: "Поддержка",
    links: ["Справочный центр", "Контакты", "FAQ", "Претензии"],
  },
  {
    title: "Правовая info",
    links: ["Условия", "Конфиденциальность", "Cookie", "Лицензии"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e]">
      <div className="max-w-[400px] mx-auto px-4 py-8">
        {/* Link Columns */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#9CA3AF] text-[11px] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & News */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6 mb-6">
          <div className="flex gap-3">
            {/* VKontakte */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-xs font-bold">VK</span>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-xs font-bold">YT</span>
            </a>
            {/* Telegram */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-xs font-bold">TG</span>
            </a>
          </div>
          <button className="flex items-center gap-1.5 bg-[#00C7D9] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#00A8BD] active:scale-95 transition-all">
            Новости
            <ExternalLink size={12} />
          </button>
        </div>

        {/* Copyright */}
        <p className="text-[#6B7280] text-[10px] text-center">
          © {new Date().getFullYear()} Деловые Линии. Все права защищены.
        </p>
      </div>
    </footer>
  );
}