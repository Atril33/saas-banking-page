import Image from "next/image";
import TagBadge from "../ui/TagBadge";
import PaymentFeatureCard from "../ui/PaymentFeatureCard";
import CTAButton from "../ui/CTAButton";
import GrowthCard from "../ui/GrowthCard";

const OurPayment = () => {
  return (
    <section className="mx-12.5 mt-20 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Image
            src="/assets/currency-rates.png"
            alt="Currency Rate"
            width={614}
            height={630}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <TagBadge text="Smart Payment" />
          <h2 className="w-[536px] text-[64px] leading-[64px] font-semibold text-black">
            Our payment system is easy to start using.
          </h2>
          <p className="w-[455px] text-lg font-medium text-gray-500">
            Its easy setup ensures businesses can start using it effortlessly,
            making financial management more straightforward and reliable.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <PaymentFeatureCard
              icon={
                <Image
                  src="/assets/feature-icons/secure-payment.png"
                  alt="Secure Payment"
                  width={50}
                  height={50}
                />
              }
              text="Encryption ensures your payments are safe."
            />

            <PaymentFeatureCard
              icon={
                <Image
                  src="/assets/feature-icons/mobile-icon.png"
                  alt="Mobile Banking"
                  width={50}
                  height={50}
                />
              }
              text="Manage payments on the go with our mobile app."
            />

            <PaymentFeatureCard
              icon={
                <Image
                  src="/assets/feature-icons/smooth-transactions.png"
                  alt="Smooth Transactions"
                  width={50}
                  height={50}
                />
              }
              text="Pay and receive any currencies effortlessly."
            />

            <PaymentFeatureCard
              icon={
                <Image
                  src="/assets/feature-icons/customer-support.png"
                  alt="Customer Support"
                  width={50}
                  height={50}
                />
              }
              text="Our team is available around the clock"
            />
          </div>

          <CTAButton text="Get Started now" />
        </div>
      </div>
      <div className="mt-20 flex gap-5">
        <GrowthCard
          value="234"
          metric="M"
          text="Supporting multiple currencies for users."
        />

        <GrowthCard
          value="768"
          metric="K"
          text="Gaining new users every single month."
          status={true}
        />

        <GrowthCard
          value="5.0"
          metric={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          }
          text="High star ratings from satisfied users."
        />

        <GrowthCard
          value="$8.8"
          metric="B"
          text="Generating increased revenue consistently"
        />
      </div>
    </section>
  );
};

export default OurPayment;
