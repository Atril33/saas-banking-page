import Image from 'next/image';

const PricingCard = ({ title, des, pricing, metric, options, }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{des}</p>
      <h4>{pricing} <span>{metric}</span></h4>

      <ul className="pricing-features">
        {options.map((option, index) => (
          <li key={index}><Image src="/assets/tick-icon.png" alt="Tick Icon" width={10} height={10} />{option}</li>
        ))}
      </ul>
      <button>Select This Plan</button>

    </div>
  )
}

export default PricingCard