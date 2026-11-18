"use client";
import { useState } from "react";

const FAQs = () => {
  const [activeAnswer, setActiveAnswer] = useState(0);

  const faqs = [
    {
      qus: "Personalized Financial Insights",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
    },
    {
      qus: "Bill Payment Reminders",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
    },
    {
      qus: "Peer-to-Peer Transfers",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
    },
  ];

  const handleToggle = (index) => {
    setActiveAnswer((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="flex flex-col gap-2">
      {faqs.map((question, index) => {
        const isOpen = activeAnswer === index;

        return (
          <li
            key={index}
            onClick={() => handleToggle(index)}
            className="w-[548px] cursor-pointer rounded-[16px] bg-[#F2F5F7] p-5 max-md:w-full"
          >
            <div className="flex items-start gap-4">
              <span className="bg-[theme(color.primary)] h-7 w-7 shrink-0 content-center rounded-full text-center text-base text-white">
                {index + 1}
              </span>
              <div className="flex w-full flex-col">
                <p className="flex w-full items-center justify-between text-xl font-medium text-black">
                  {question.qus}{" "}
                  <i
                    className={`bi bi-chevron-down text-base transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </p>

                {/* Only renders if this specific item's index matches activeAnswer */}
                {isOpen && (
                  <p className="mt-2 text-base font-medium text-gray-500">
                    {question.ans}
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FAQs;
