import Image from "next/image";

const TestimonialsCard = ({ name, position, review }) => {
  return (
    <div className="flex w-[332px] flex-col justify-center gap-3 rounded-[24px] bg-[#F2F5F7] p-6">
      <div>
        <h4 className="text-xl font-medium text-black">{name}</h4>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
      <p className="w-[284px] text-base font-medium text-gray-800">{review}</p>
      <Image
        src="/assets/ratings.png"
        alt="Star Rating"
        width={100}
        height={20}
      />
    </div>
  );
};

export default TestimonialsCard;
