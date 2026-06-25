import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import Header from "@/components/logistics/Header";
import HeroBlock from "@/components/logistics/HeroBlock";
import TabNav from "@/components/logistics/TabNav";
import ServiceGrid from "@/components/logistics/ServiceGrid";
import Footer from "@/components/logistics/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("people");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices(activeTab);
  }, [activeTab]);

  const loadServices = async (category) => {
    setIsLoading(true);
    try {
      const data = await base44.entities.Service.filter(
        { category },
        "sort_order",
        20
      );
      setServices(data);
    } catch (err) {
      setServices([]);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <Header />
      <HeroBlock />

      {/* Curved transition */}
      <div className="bg-[#1a1a2e]">
        <div className="bg-[#F5F5F7] rounded-t-3xl pt-1" />
      </div>

      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      <ServiceGrid services={services} isLoading={isLoading} />
      <Footer />
    </div>
  );
}