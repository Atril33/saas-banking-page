"use client";
import Image from "next/image";
import { useState, useEffect, HTMLInputTypeAttribute } from "react";
import CurrencyConverterField from "../ui/CurrencyConverterField";
import { ReactFormState } from "react-dom/client";

export interface ExchangeRateList {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: Record<string, number>;
}


const CurrencyConverter = () => {
  const [rates, setRates] = useState<ExchangeRateList | null>(null);
  const [firstOpened, setFirstOpened] = useState<boolean>(false);
  const [secondOpened, setSecondOpened] = useState<boolean>(false);
  const [firstCurrency, setFirstCurrency] = useState<string>("USD");
  const [secondCurrency, setSecondCurrency] = useState<string>("PKR");
  const [firstIcon, setFirstIcon] = useState<string>('https://flagcdn.com/56x42/us.png');
  const [secondIcon, setSecondIcon] = useState<string>('https://flagcdn.com/56x42/pk.png');
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);


  useEffect(() => {
    const currencyList = async () => {
      try {
        const res = await fetch('/api/convert');
        if (!res.ok) throw new Error('Failed to fetch API')
        const data = await res.json();
        setRates(data)
      } catch (error) {
        console.error(error)
      }
    }

    currencyList()


  }, [])


  const handleConverter = ():void => {
   
    const finalAmount:number = (amount * rates?.conversion_rates[secondCurrency]) / rates?.conversion_rates[firstCurrency];

    setConvertedAmount(finalAmount.toFixed(2));

  
  }

  

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
        <CurrencyConverterField currencies={rates?.conversion_rates ?? {}} setToggle={setFirstOpened} opened={firstOpened} currency={firstCurrency} setCurrency={setFirstCurrency} icon={firstIcon} setIcon={setFirstIcon} amount={amount} setAmount={setAmount} readonly={false} />
        <Image
          src="/assets/conversion-icon.png"
          alt="Conversion Icon"
          width={34}
          height={34}
          className="absolute top-[67px]"
        />
        <CurrencyConverterField currencies={rates?.conversion_rates ?? {}} setToggle={setSecondOpened} opened={secondOpened} currency={secondCurrency} setCurrency={setSecondCurrency} icon={secondIcon} setIcon={setSecondIcon} convertedAmount={convertedAmount} readonly={true} /> 

        <h3 className="text-xl font-semibold text-black">Currency Markets</h3>
        <p className="text-sm text-gray-500">
          Latest prices of top crypto assets.
        </p>
        <button className="mt-2 w-full cursor-pointer rounded-[100px] bg-[#0F2028] p-2 text-base text-white uppercase" onClick={handleConverter}>
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
