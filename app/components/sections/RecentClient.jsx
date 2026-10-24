import Image from "next/image";

const RecentClient = () => {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <h2 className="text-[40px] font-semibold text-black">
        Our Recent Clients & Partners
      </h2>
      <div className="my-4 grid grid-cols-5 gap-4">
        <Image
          src="/assets/logos/ephemeral.png"
          alt="Ephemeral Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/wildcrafted.png"
          alt="Wildcrafted Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/codecraft.png"
          alt="Codecraft Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/convergence.png"
          alt="Convergence Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/imgCompress.png"
          alt="ImgCompress Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/epicurious.png"
          alt="Epicurious Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/watchtower.png"
          alt="Watchtower Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/renaissance.png"
          alt="Renaissance Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/constrastAi.png"
          alt="ConstrastAI Logo"
          width={150}
          height={50}
        />
        <Image
          src="/assets/logos/nietzsche.png"
          alt="Nietzsche Logo"
          width={150}
          height={50}
        />
      </div>
      <p className="text-lg font-medium text-gray-500">
        Join 4,000+ companies already growing
      </p>
    </section>
  );
};

export default RecentClient;
