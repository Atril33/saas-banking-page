const FAQs = () => {
  const faqs = [
    {
      qus: "Personalized Financial Insights",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
      active: true,
    },

    {
      qus: "Bill Payment Reminders",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
      active: false,
    },
    {
      qus: "Peer-to-Peer Transfers",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
      active: false,
    },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {faqs.map((question, index) => (
        <li
          className="w-[548px] rounded-[16px] bg-[#F2F5F7] p-5 max-md:w-full"
          key={index}
        >
          <div className="flex items-start gap-4">
            <span className="bg-[theme(color.primary)] h-7 w-7 content-center rounded-full text-center text-base text-white">
              {index + 1}
            </span>{" "}
            <div className="flex w-full flex-col">
              <p className="flex w-full items-center justify-between text-xl font-medium text-black">
                {question.qus} <i className="bi bi-chevron-down text-base"></i>
              </p>
              <p
                className={`mt-2 text-base font-medium text-gray-500 ${question.active === true ? "block" : "hidden"}`}
              >
                {question.ans}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FAQs;
