// import img from "next/img";
import TagBadge from "../ui/TagBadge";
import CTAButton from "../ui/CTAButton";

const CurrencyOptions = () => {
  return (
    <section className="mt-20 flex w-full max-w-[1350px] justify-between px-12.5 max-[885px]:flex-col">
      <div className="flex flex-col items-start gap-4 max-md:w-full">
        <TagBadge text="Limitless currency options" />
        <h2 className="w-[536px] text-[4rem] leading-[64px] font-semibold text-black max-md:w-full">
          One account for 90+ currencies worldwide.
        </h2>
        <p className="w-[455px] text-lg font-medium text-gray-500 max-md:w-full">
          Our platform allows you to send, receive, and convert currencies
          seamlessly in real-time, all while saving on fees.
        </p>

        <ul className="[&_li]text-lg list-none [&_li]:my-2 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
          <li className="currecy-item">
            <img
              src="/assets/tick-icon.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Convert between currencies instantly.
          </li>
          <li className="currecy-item">
            <img
              src="/assets/tick-icon.png"
              alt="Tick icon"
              width={20}
              height={20}
            />
            Simple and intuitive platform for managing.
          </li>
          <li className="currecy-item">
            <img
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
        <img
          src="/assets/currency-rates.png"
          alt="Currency Rate"
          width={614}
          height={630}
          className="w-full max-[885px]:hidden"
        />
      </div>
    </section>
  );
};

export default CurrencyOptions;
