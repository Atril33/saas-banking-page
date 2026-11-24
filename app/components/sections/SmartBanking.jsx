import Image from "next/image";
import TagBadge from "../ui/TagBadge";
import FAQs from "../ui/FAQs";

const SmartBanking = () => {
  return (
    <section className="mt-20 flex w-full max-w-[1350px] justify-between gap-4 px-12.5 max-[885px]:flex-col">
      <div>
        <Image
          src="/assets/currency-rates.png"
          alt="Currency Rate"
          width={614}
          height={630}
          className="w-full max-[885px]:hidden"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <TagBadge text="Seamless Banking" />
        <h2 className="w-[536px] text-[4rem] leading-[64px] font-semibold text-black max-md:w-full">
          Smart Banking for a Digital World
        </h2>
        <p className="w-[548px] text-lg font-medium text-gray-500 max-md:w-full">
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
