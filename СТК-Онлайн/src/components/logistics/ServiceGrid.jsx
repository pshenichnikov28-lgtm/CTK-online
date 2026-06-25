import React from "react";
import ServiceCard from "./ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceGrid({ services, isLoading }) {
  if (isLoading) {
    return (
      <div className="max-w-[400px] mx-auto px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-[#EEF0F3] animate-pulse">
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] mb-3" />
              <div className="h-3 bg-[#F5F5F7] rounded w-3/4 mb-2" />
              <div className="h-2 bg-[#F5F5F7] rounded w-full mb-1" />
              <div className="h-2 bg-[#F5F5F7] rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[400px] mx-auto px-4 pb-6">
      <div className="grid grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#9CA3AF] text-sm">No services available in this category.</p>
        </div>
      )}
    </div>
  );
}