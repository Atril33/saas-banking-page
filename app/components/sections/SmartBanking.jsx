import Image from "next/image";
import TagBadge from "../ui/TagBadge";
import FAQs from "../ui/FAQs";

const SmartBanking = () => {
  return (
    <section className="mx-12.5 mt-20 flex justify-between gap-4">
      <div>
        <Image
          src="/assets/currency-rates.png"
          alt="Currency Rate"
          width={614}
          height={630}
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <TagBadge text="Seamless Banking" />
        <h2 className="w-[536px] text-[64px] leading-[64px] font-semibold text-black">
          Smart Banking for a Digital World
        </h2>
        <p className="w-[548px] text-lg font-medium text-gray-500">
          Our Fintech banking service revolutionizes the way you manage your
          money, offering seamless, secure, and smart solutions for all your
          financial needs.
        </p>

        <FAQs />
      </div>
    </section>
  );
};

export default SmartBanking;
