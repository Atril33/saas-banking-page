import Image from "next/image";
import Header from "../layout/Header";
import CTAButton from "../ui/CTAButton";
import CurrencyConverter from "../layout/CurrencyConverter";

const Hero = () => {
  return (
    <div className="h-250 w-full bg-[image:var(--pattern-image)] bg-no-repeat">
      <Header />
      <div className="mt-35 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-1 rounded-[100px] border-[1.5px] border-[#0A1519] bg-[#29383E] py-0.5 pr-3">
          <p className="rounded-[100px] bg-[#D2F801] px-3 py-0.5 text-sm text-black">
            New
          </p>
          <p className="text-sm text-white">Payment cards upgraded</p>
        </div>

        <h1 className="w-[657px] text-center text-[4rem] leading-[4rem] font-semibold text-white max-md:w-full">
          Cross-border payment made easy.
        </h1>
        <p className="w-[623px] text-center text-xl font-medium text-white max-md:w-full">
          We help individuals and businesses to securely send and receive money
          globally, without the bank fees.
        </p>
        <div className="m-5 flex items-center gap-2.5">
          <CTAButton text="Create account" />
          <button className="text-whssite flex items-center justify-center gap-2 rounded-[100px] bg-white p-1 pr-8 text-base">
            <Image
              src="/assets/watch-video-icon.png"
              alt="Watch Tutorial"
              width={40}
              height={40}
            />
            Watch Tutorial
          </button>
        </div>

        <div className="@container relative mt-25 flex w-[90%] items-center justify-center gap-8">
          <div className="flex flex-col items-end gap-12 max-[1075px]:hidden">
            <div className="flex w-54 flex-col justify-center rounded-[25px] bg-white px-6 py-5">
              <p className="text-base font-medium text-gray-500">
                Total balance
              </p>
              <div className="flex items-center justify-between gap-2.5">
                <h4 className="text-2xl font-semibold text-black">$9,647.00</h4>
                <p className="bg-[theme(color.primary)] rounded-[100px] px-2 py-1.5 text-xs">
                  +8.50%
                </p>
              </div>
            </div>

            <div className="mr-20 flex w-54 items-center justify-between gap-2.5 rounded-[25px] bg-white px-4 py-5">
              <Image
                src="/assets/currency-icon.png"
                alt="Received History"
                width={50}
                height={50}
              />
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-base font-medium text-gray-500">
                  Received
                </h4>
                <p className="text-[1.375rem] font-semibold text-black">
                  6790.67 EUR
                </p>
              </div>
            </div>
          </div>
          <CurrencyConverter />
          <div className="flex flex-col items-start gap-12 max-[1075px]:hidden">
            <div className="flex flex-col justify-center rounded-[25px] bg-white px-6 py-5">
              <p className="text-base font-medium text-gray-500">Net Income</p>
              <div className="flex items-center justify-between gap-2.5">
                <h4 className="text-2xl font-semibold text-black">$234.98K</h4>
                <Image
                  src="/assets/growing-icon.png"
                  alt="Growing Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="ml-20 flex items-center justify-between gap-2.5 rounded-[25px] bg-white px-6 py-5">
              <div className="relative flex w-[90px] items-center">
                <Image
                  src="/assets/client-1.png"
                  alt="Client One"
                  width={54}
                  height={54}
                  className="absolute left-0"
                />
                <Image
                  src="/assets/client-2.png"
                  alt="Client Two"
                  width={54}
                  height={54}
                  className="absolute right-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-[1.375rem] font-semibold text-black">
                  124,89K+
                </h4>
                <p className="text-base font-medium text-gray-500">
                  Trusted Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
