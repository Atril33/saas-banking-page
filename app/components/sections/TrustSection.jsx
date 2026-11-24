import Image from "next/image";
import CTAButton from "../ui/CTAButton";

const TrustSection = () => {
  return (
    <section className="relative mt-20 flex h-[640px] w-[calc(100%_-_100px)] max-w-[1350px] flex-col items-center justify-center gap-4 rounded-[50px] bg-[image:var(--pattern-image)]">
      <div className="flex items-center gap-2 text-base text-white">
        <Image
          src="/assets/ratings.png"
          alt="5 Stars Rating"
          width={100}
          height={20}
        />{" "}
        4.9/5{" "}
      </div>
      <Image
        src="/assets/clients-images-frame.png"
        alt="Clients Pictures"
        width={200}
        height={40}
      />
      <p className="w-[262px] text-center text-base text-white">
        Over 100K+ Entrepreneurs, and business choose us
      </p>
      <h2 className="w-[798px] text-center text-[4rem] leading-[4rem] font-semibold text-white max-[885px]:w-full">
        Empowering Your Financial Freedom
      </h2>
      <p className="w-[598px] text-center text-lg font-medium text-gray-500 max-md:w-full">
        Trust us to deliver cutting-edge innovation, transparency, and
        personalized service, all designed to help you achieve financial freedom
      </p>
      <CTAButton text="Get Started now" />
    </section>
  );
};

export default TrustSection;
