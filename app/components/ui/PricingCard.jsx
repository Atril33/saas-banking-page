// import img from "next/img";

const PricingCard = ({ title, des, pricing, metric, options }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[32px] border-[2px] border-[#514F4F] bg-[#494949] px-8 py-6">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="w-full text-base text-white">{des}</p>
      <h4 className="text-4xl font-semibold text-white">
        {pricing} <span className="text-base text-white">{metric}</span>
      </h4>

      <ul className="rounded-[32px] border-[2px] border-[#514F4F] bg-[#494949] px-4 py-5">
        {options.map((option, index) => (
          <li
            className="my-3 flex items-center gap-2 text-base text-white"
            key={index}
          >
            <img
              src="/assets/tick-icon.png"
              alt="Tick Icon"
              width={15}
              height={15}
            />
            {option}
          </li>
        ))}
      </ul>
      <button className="bg-[theme(color.primary)] cursor-pointer rounded-[100px] px-2.5 py-4 text-base font-medium text-white">
        Select This Plan
      </button>
    </div>
  );
};

export default PricingCard;
