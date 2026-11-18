"use client";
import { useState } from "react";
import type { ExchangeRateList } from "../layout/CurrencyConverter";

const CurrencyConverterField = ({
  currencies,
}: {
  currencies: ExchangeRateList["conversion_rates"];
}) => {

   const [isOpened, setIsOpened] = useState<boolean>(false);
   const [currencySelect, setCurrencySelect] = useState<string>('USD');
   const [currencyIcon, setCurrencyIcon] = useState<string>('https://flagcdn.com/56x42/us.png')
   const currencyCodes = Object.keys(currencies);

   const selectCurrency = (e: React.MouseEvent<HTMLLIElement>, currency:string) => {
    let countryCode = currency.slice(0,2).toLowerCase()
    let flag = `https://flagcdn.com/56x42/${countryCode}.png`
    e.stopPropagation();
    setCurrencySelect(currency);
    setCurrencyIcon(flag)
    setIsOpened(false);
  }

  return (
    <div className="mb-2 flex w-full items-center justify-between rounded-[20px] border-[12px] border-[#EFF2F1] bg-white relative">

      <div className="flex items-center justify-center gap-1 p-2 text-base font-medium" onClick={() => setIsOpened((prev) => !prev)}>
        {isOpened ? (  <ul className="bg-white flex items-center justify-center p-2 text-base font-medium flex-col max-h-[400px] overflow-y-scroll w-full rounded-[8px] absolute bottom-0 left-0">
        {currencyCodes.map((currency, index) => (
          <li className="bg-white w-full p-2 cursor-pointer" key={index} onClick={(e) => selectCurrency(e, currency)}>{currency}</li>
        ))}
      </ul>) : (<></>)}
        
        <img src={currencyIcon} alt="USD" width={28} height={28} />
        {currencySelect}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
          

        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>
      <div>
        <input
          type="number"
          placeholder="0.00"
          className="border-none text-right outline-none"
        />
      </div>
    </div>
  );
};

export default CurrencyConverterField;
