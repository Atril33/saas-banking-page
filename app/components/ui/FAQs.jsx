

const FAQs = () => {
  const faqs = [
    {
      qus: "Personalized Financial Insights",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions."
    },

    {
      qus: "Bill Payment Reminders",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions."
    },
    {
      qus: "Peer-to-Peer Transfers",
      ans: "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions."
    },
  ]
  return (
    <ul>
      {faqs.map((question, index) => (
        <li key={index}>
          <div>
            <span>{index + 1}</span> <p>{question.qus} <i className="bi bi-chevron-down"></i></p>
          </div>
          <p className="answer">{question.ans}</p>
        </li>
      ))}
    </ul>
  )
}

export default FAQs