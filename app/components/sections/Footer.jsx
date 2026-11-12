import Image from "next/image";
import FooterLinks from "../ui/FooterLinks";

const Footer = () => {
  return (
    <footer className="mt-20 flex w-full flex-col bg-[image:var(--pattern-image)] p-4">
      <div className="items-first mx-12.5 mt-20 flex flex-wrap justify-between gap-4">
        <div className="flex flex-col gap-6">
          <Image
            src="/assets/logos/logo.png"
            alt="Euphoria Logo"
            width={167}
            height={100}
          />
          <p className="w-[265px] text-base text-mist-300">
            Empowering Your Projects, Enhancing Your Success, Every Step of the
            Way.
          </p>

          <ul className="flex list-none items-center gap-2">
            <li>
              <Image
                src="/assets/facebook.png"
                alt="Facebook Icon"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn Icon"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/assets/instagram.png"
                alt="Instagram Icon"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/assets/twitter.png"
                alt="Twitter Icon"
                width={50}
                height={50}
              />
            </li>
          </ul>
        </div>

        <FooterLinks
          title="Home"
          links={[
            "Product Features",
            "Benefits",
            "How To Use",
            "Key Features",
            "Pricing",
            "Testimonials",
            "FAQ’s",
          ]}
        />

        <FooterLinks
          title="App"
          links={["Mobile App", "Desktop App", "How To Use"]}
        />

        <FooterLinks
          title="All Pages"
          links={[
            "Home",
            "App",
            "Blog",
            "Blog Open",
            "Contact",
            "Privacy Policy",
            "404",
          ]}
        />

        <div className="flex flex-col justify-center gap-2 rounded-[16px] border border-mist-300 bg-[#2E3934] px-5">
          <h3 className="text-base font-medium text-white">Download our App</h3>
          <div className="flex w-full items-center justify-between gap-2 rounded-[12px] border border-mist-300 bg-[#2F3A34] px-10 py-3">
            <Image
              src="/assets/google-play.png"
              alt="Google Play Icon"
              width={24}
              height={24}
            />
            <div>
              <p className="text-xs text-mist-300">Get it on</p>
              <h4 className="text-base text-white">Google Play</h4>
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-2 rounded-[12px] border border-mist-300 bg-[#2F3A34] px-10 py-3">
            <Image
              src="/assets/apple.png"
              alt="Apple Store Icon"
              width={24}
              height={24}
            />
            <div>
              <p className="text-xs text-mist-300">Download on the</p>
              <h4 className="text-base text-white">App Store</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full items-center border-t border-mist-300">
        <p className="font-regular p-4 text-base text-mist-300">
          © 2024 Euphoria. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
