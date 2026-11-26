// import img from "next/img";

const RecentClient = () => {
  return (
    <section
      className="my-10 flex w-full max-w-[1350px] flex-col items-center justify-center"
      id="about"
    >
      <h2 className="text-center text-[2.5rem] font-semibold text-black max-md:text-[2rem]">
        Our Recent Clients & Partners
      </h2>
      <div className="align-center my-4 grid grid-cols-5 justify-center gap-4 max-[500px]:grid-cols-2 max-lg:grid-cols-4 max-md:w-[90%] max-sm:grid-cols-3">
        <img
          src="/assets/logos/ephemeral.png"
          alt="Ephemeral Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/wildcrafted.png"
          alt="Wildcrafted Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/codecraft.png"
          alt="Codecraft Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/convergence.png"
          alt="Convergence Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/imgCompress.png"
          alt="ImgCompress Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/epicurious.png"
          alt="Epicurious Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/watchtower.png"
          alt="Watchtower Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/renaissance.png"
          alt="Renaissance Logo"
          width={150}
          height={50}
        />
        <img
          src="/assets/logos/constrastAi.png"
          alt="ConstrastAI Logo"
          width={150}
          height={50}
        />
        <img
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
