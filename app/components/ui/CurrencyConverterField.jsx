import Image from "next/image";

const CurrencyConverterField = () => {
  return (
    <div className="mb-2 flex items-center justify-between rounded-[20px] border-[12px] border-[#EFF2F1] bg-white">
      <div className="flex items-center justify-center gap-1 p-2 text-base font-medium">
        <Image src="/assets/usd.png" alt="USD" width={28} height={28} />
        USD{" "}
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
