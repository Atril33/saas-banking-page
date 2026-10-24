const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="mx-12.5 flex h-[255px] w-full flex-col items-center justify-center gap-3 rounded-[40px] border-[2px] border-[#E3E7E8] bg-[#F2F5F7] p-4 text-center">
      <div className="my-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
