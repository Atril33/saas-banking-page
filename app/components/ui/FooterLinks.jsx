const FooterLinks = ({ title, links }) => {
  return (
    <div className="flex w-[200px] flex-col gap-4 max-md:w-full">
      <h4 className="text-base font-medium text-white">{title}</h4>
      <ul className="list-none">
        {links.map((link, index) => (
          <li className="font-regular my-2 text-base text-mist-300" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
