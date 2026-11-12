import Image from "next/image";
import CurrencyConverterField from "../ui/CurrencyConverterField";

const CurrencyConverter = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image
        src="/assets/currency-converting.png"
        alt="Currency Converter"
        width={52}
        height={52}
        className="max-[1075px]:hidden"
      />
      <div className="relative flex flex-col items-center justify-center rounded-[25px] bg-white p-3">
        <CurrencyConverterField />
        <Image
          src="/assets/conversion-icon.png"
          alt="Conversion Icon"
          width={34}
          height={34}
          className="absolute top-[67px]"
        />
        <CurrencyConverterField />
        <h3 className="text-xl font-semibold text-black">Currency Markets</h3>
        <p className="text-sm text-gray-500">
          Latest prices of top crypto assets.
        </p>
        <button className="mt-2 w-full rounded-[100px] bg-[#0F2028] p-2 text-base text-white uppercase">
          Convert
        </button>
      </div>
      <Image
        src="/assets/converted-currency.png"
        alt="Converted Currency"
        width={52}
        height={52}
        className="max-[1075px]:hidden"
      />
    </div>
  );
};

export default CurrencyConverter;
