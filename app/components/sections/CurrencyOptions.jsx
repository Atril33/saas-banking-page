import Image from 'next/image';
import TagBadge from '../ui/TagBadge';
import CTAButton from '../ui/CTAButton';


const CurrencyOptions = () => {
  return (
    <section className="currency-options">
      <div className="currency-options-left">
        <TagBadge text="Limitless currency options" />
        <h2 className="currency-options-title">One account for 90+ currencies worldwide.</h2>
        <p className="currency-options-description">Our platform allows you to send, receive, and convert currencies seamlessly in real-time, all while saving on fees.</p>

        <ul className="currency-options-list">
          <li className="currecy-item"><Image src="/assets/tick-icon.png" alt="Tick icon" width={10} height={10} />Convert between currencies instantly.</li>
          <li className="currecy-item"><Image src="/assets/tick-icon.png" alt="Tick icon" width={10} height={10} />Simple and intuitive platform for managing.</li>
          <li className="currecy-item"><Image src="/assets/tick-icon.png" alt="Tick icon" width={10} height={10} />Manage your currencies anytime, anywhere</li>
        </ul>

        <CTAButton text="Get Started now" />
      </div>

      <div className="right">
        <Image src="/assets/currency-rates.png" alt="Currency Rate" width={500} height={500} />
      </div>

    </section>
  )
}

export default CurrencyOptions;