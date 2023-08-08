import PricingCard from "@/components/ui/PricingCard";
import React from "react";

const Pricing = () => {
  return (
    <section className="w-full h-screen flex gap-3 items-center justify-center">
      <PricingCard />
      <PricingCard />
      <PricingCard />
    </section>
  );
};


export default Pricing