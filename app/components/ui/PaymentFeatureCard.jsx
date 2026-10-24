const PaymentFeatureCard = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[16px] border border-[#E3E7E8] px-3 py-4">
      {icon}
      <h4 className="w-[186px] text-base text-gray-500">{text}</h4>
    </div>
  );
};

export default PaymentFeatureCard;
