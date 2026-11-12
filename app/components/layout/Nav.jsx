import Image from "next/image";
const Navbar = () => {
  return (
    <div className="fixed flex h-24 w-full items-center justify-between bg-transparent">
      <Image
        src="/assets/logos/logo.png"
        alt="Euphoria Logo"
        width={130}
        height={54}
        className="ml-[50px]"
      />
      <ul className="flex list-none gap-7 max-lg:hidden [&_li]:text-base [&_li]:text-white">
        <li>About</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>Company</li>
        <li>Resources</li>
      </ul>
      <div className="mr-[50px] flex gap-2.5 [&_button]:w-25 [&_button]:rounded-[100px] [&_button]:px-6 [&_button]:py-2.5 [&_button]:text-base [&_button]:outline-none">
        <button className="border border-white text-white">Sign in</button>
        <button className="bg-[theme(color.primary)] border border-transparent text-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
