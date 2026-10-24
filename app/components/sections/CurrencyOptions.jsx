import Image from "next/image";
import TagBadge from "../ui/TagBadge";
import CTAButton from "../ui/CTAButton";

const CurrencyOptions = () => {
  return (
    <section className="mx-12.5 mt-20 flex justify-between">
      <div className="flex flex-col items-start gap-4">
        <TagBadge text="Limitless currency options" />
        <h2 className="w-[536px] text-[64px] leading-[64px] font-semibold text-black">
          One account for 90+ currencies worldwide.
        </h2>
        <p className="w-[455px] text-lg font-medium text-gray-500">
          Our platform allows you to send, receive, and convert currencies
          seamlessly in real-time, all while saving on fees.
        </p>

        <ul className="[&_li]text-lg list-none [&_li]:my-2 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
          <li className="currecy-item">
            <Image
              src="/assets/tick-icon.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Convert between currencies instantly.
          </li>
          <li className="currecy-item">
            <Image
              src="/assets/tick-icon.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Simple and intuitive platform for managing.
          </li>
          <li className="currecy-item">
            <Image
              src="/assets/tick-icon.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Manage your currencies anytime, anywhere
          </li>
        </ul>

        <CTAButton text="Get Started now" />
      </div>

      <div>
        <Image
          src="/assets/currency-rates.png"
          alt="Currency Rate"
          width={614}
          height={630}
        />
      </div>
    </section>
  );
};

export default CurrencyOptions;
