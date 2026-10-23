
import Image from 'next/image';
import TagBadge from '../ui/TagBadge';
import FAQs from '../ui/FAQs';

const SmartBanking = () => {
  return (
    <section className="smart-banking">

      <div className="smart-banking-left">
        <Image src="/assets/currency-rates.png" alt="Currency Rate" width={500} height={500} />
      </div>

      <div className="smart-banking-right">
        <TagBadge text="Seamless Banking" />
        <h2 className="smart-title">Smart Banking for a Digital World</h2>
        <p className="smart-description">Our Fintech banking service revolutionizes the way you manage your money, offering seamless, secure, and smart solutions for all your financial needs.</p>

        <div className="smart-banking-faqs">
          <FAQs />

        </div>

      </div>

    </section >
  )
}

export default SmartBanking