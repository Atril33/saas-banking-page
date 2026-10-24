const GrowthCard = ({ value, metric, text, status = false }) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-10 rounded-[24px] px-4 py-17.5 ${status ? "bg-[theme(color.primary)] text-white" : "bg-[#F2F5F7]"}`}
    >
      <h3 className="flex items-start gap-1 text-5xl font-bold">
        {value}{" "}
        <span
          className={`text-[32px] ${status ? "text-[#D2F801]" : "text-black"}`}
        >
          {metric}
        </span>
      </h3>
      <p className="text-center text-lg">{text}</p>
    </div>
  );
};

export default GrowthCard;
