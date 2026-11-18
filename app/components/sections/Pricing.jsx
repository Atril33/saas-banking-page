"use client";
import { useState } from "react";
import TagBadge from "../ui/TagBadge";
import PricingCard from "../ui/PricingCard";

const Pricing = () => {
  const [pricingType, setPricingType] = useState("monthly");

  return (
    <section className="mx-12.5 mt-20 flex flex-col items-center gap-4 bg-[image:var(--pattern-image)] bg-no-repeat px-10 py-15 max-xl:bg-[image:none] max-md:w-[calc(100%-80px)]">
      <TagBadge text="Pricing Plan" />
      <h2 className="w-[808px] text-center text-5xl font-semibold text-white max-[900px]:w-full max-xl:text-black">
        Select a plan that will empower your business growth
      </h2>
      <p className="w-[544px] text-center text-lg text-white max-[900px]:w-full max-xl:text-gray-500">
        Each package includes personalized consultation and revisions to
        guarantee your satisfaction.
      </p>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex rounded-[32px] border-[2px] border-[#514F4F] bg-[#494949]">
          <div
            className={`w-32 cursor-pointer rounded-[100px] px-2.5 py-3 text-center text-base font-medium text-white ${pricingType === "monthly" ? "bg-[theme(color.primary)]" : "bg-[#494949]"}`}
            onClick={() => setPricingType("monthly")}
          >
            Monthly
          </div>
          <div
            className={`w-32 cursor-pointer rounded-[100px] px-2.5 py-3 text-center text-base font-medium text-white ${pricingType === "yearly" ? "bg-[theme(color.primary)]" : "bg-[#494949]"}`}
            onClick={() => setPricingType("yearly")}
          >
            Yearly
          </div>
        </div>

        <div className="my-5 grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
          <PricingCard
            title="Starter Plan"
            des="Perfect for larger organizations with advanced needs"
            pricing={`${pricingType === "monthly" ? `$19` : `$${19 * 12}`}`}
            metric="/ per month"
            options={[
              "Account Aggregation",
              "Expense Tracking",
              "Basic Analytics System",
              "Budgeting Tools",
              "24/7 Customer Support",
            ]}
          />

          <PricingCard
            title="Growth Plan"
            des="Ideal for growing startups and mid-sized companies"
            pricing={`${pricingType === "monthly" ? `$49` : `$${49 * 12}`}`}
            metric="/ per month"
            options={[
              "Everything in Starter Plan",
              "Advanced Budgeting Tools",
              "Customizable Dashboards",
              "Transaction Insights",
              "Enhanced Security",
            ]}
          />

          <PricingCard
            title="Business Plan"
            des="Perfect for larger organizations with advanced needs"
            pricing={`${pricingType === "monthly" ? `$199` : `$${199 * 12}`}`}
            metric="/ per month"
            options={[
              "Everything in Growth Plan",
              "Investment Tracking",
              "Integration Services",
              "24/7 VIP Support",
              "Premium Security",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
