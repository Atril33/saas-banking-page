import Image from "next/image";
import TagBadge from "../ui/TagBadge";
import FeatureCard from "../ui/FeatureCard";

const Features = () => {
  return (
    <section
      className="mx-12.5 mt-20 flex max-w-[1350px] flex-col items-center justify-center gap-4"
      id="services"
    >
      <TagBadge text="Features" />
      <h2 className="w-[798px] text-center text-[4rem] leading-[4rem] font-semibold text-black max-md:w-full">
        Banking Reimagined for the Future You
      </h2>
      <p className="w-[598px] text-center text-lg font-medium text-gray-500 max-md:w-full">
        Trust us to deliver cutting-edge innovation, transparency, and
        personalized service, all designed to help you achieve financial freedom
      </p>

      <div className="mt-4 grid grid-cols-3 justify-items-center gap-4 max-lg:grid-cols-2 max-lg:gap-6 max-md:grid-cols-1">
        <FeatureCard
          icon={
            <Image
              src="/assets/feature-icons/instant-account-setup.png"
              alt="Instant Account Setup"
              width={56}
              height={56}
            />
          }
          title="Instant Account Setup"
          description="Customers can set up a bank account in minutes"
        />

        <FeatureCard
          icon={
            <Image
              src="/assets/feature-icons/payment-icon.png"
              alt="Realtime Payment"
              width={56}
              height={56}
            />
          }
          title="Real-Time Payments"
          description="Enables instant money transfers, both domestically and internationally"
        />

        <FeatureCard
          icon={
            <Image
              src="/assets/feature-icons/mobile-icon.png"
              alt="Mobile Banking"
              width={56}
              height={56}
            />
          }
          title="Mobile Banking"
          description="Full-featured mobile app that allows users to manage their finances"
        />

        <FeatureCard
          icon={
            <Image
              src="/assets/feature-icons/payment-saving.png"
              alt="Automated Savings"
              width={56}
              height={56}
            />
          }
          title="Automated Savings"
          description="Round up purchases or set regular transfers into a savings account"
        />

        <FeatureCard
          icon={
            <Image
              src="/assets/feature-icons/ai-budgeting.png"
              alt="AI-Powered Budgeting"
              width={56}
              height={56}
            />
          }
          title="AI-Powered Budgeting"
          description="AI tools analyze spending patterns and provide personalized budgeting"
        />

        <FeatureCard
          icon={
            <Image
              src="/assets/feature-icons/credit-card.png"
              alt="Virtual Credit Cards"
              width={56}
              height={56}
            />
          }
          title="Virtual Credit Cards"
          description="Generate virtual cards instantly for online shopping"
        />
      </div>
    </section>
  );
};

export default Features;
