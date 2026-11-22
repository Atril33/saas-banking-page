"use client";
import React, { useState } from "react";
import type { ExchangeRateList } from "../layout/CurrencyConverter";


type CurrencyConverterFieldProps = {
  currencies: ExchangeRateList["conversion_rates"];
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  opened: boolean;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<boolean>>;
  icon: string;
  setIcon: React.Dispatch<React.SetStateAction<string>>
  readonly: boolean
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  convertedAmount: number;

  // amount: number | string; 
  // onAmountChange: (value: number) => number;
  // selectedCurrency: string
};

const CurrencyConverterField = ({currencies,  setToggle, opened, currency, setCurrency, icon, setIcon, setAmount, convertedAmount, readonly}:CurrencyConverterFieldProps) => {
  const currencyCodes = Object.keys(currencies);
  return (
    <div className="mb-2 flex w-full items-center justify-between rounded-[20px] border-[12px] border-[#EFF2F1] bg-white relative">

      <div className="flex items-center justify-center gap-1 p-2 text-base font-medium" onClick={() =>  setToggle((prev) => !prev)}>
       
        { opened ? (<ul className="absolute bottom-0 left-0 flex max-h-[400px] w-full flex-col items-center justify-center overflow-y-scroll rounded-[8px] bg-white p-2 text-base font-medium">
          {currencyCodes.map((currency, index) => (
            <li
              className="w-full cursor-pointer bg-white p-2 flex justify-between"
              key={index}
              onClick={() => {
                 setCurrency(currency)
                   let countryCode = currency.slice(0,2).toLowerCase()
                   let flag = `https://flagcdn.com/56x42/${countryCode}.png`
                   setIcon(flag)
                }
                }
            >
              {currency} <span className="text-medium text-gray-500">{currencies[currency].toFixed(2)}</span>
            </li>
          ))}
        </ul>) : (<></>)}  
        
         <img src={icon} alt="USD" width={28} height={28} />
        {currency}
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
          value={convertedAmount}
          onChange={(e) => setAmount(Number(e.target.value))}
          readOnly={readonly} 
        />
      </div>
    </div>
  );
};

export default CurrencyConverterField;
