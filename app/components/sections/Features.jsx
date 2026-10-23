import Image from 'next/image';
import TagBadge from '../ui/TagBadge';
import FeatureCard from '../ui/FeatureCard';

const Features = () => {
  return (
    <section className="features-section">
      <TagBadge text="Features" />
      <h2 className="feature-title">Banking Reimagined for the Future You</h2>
      <p className="feature-description">Trust us to deliver cutting-edge innovation, transparency, and personalized service, all designed to help you achieve financial freedom</p>

      <div className="features-container">
        <FeatureCard
          icon={<Image src="/assets/feature-icons/instant-account-setup.png" alt="Instant Account Setup" width={50} height={50} />}
          title="Instant Account Setup"
          description="Customers can set up a bank account in minutes"
        />

        <FeatureCard
          icon={<Image src="/assets/feature-icons/payment-icon.png" alt="Realtime Payment" width={50} height={50} />}
          title="Real-Time Payments"
          description="Enables instant money transfers, both domestically and internationally"
        />


        <FeatureCard
          icon={<Image src="/assets/feature-icons/mobile-icon.png" alt="Mobile Banking" width={50} height={50} />}
          title="Mobile Banking"
          description="Full-featured mobile app that allows users to manage their finances"
        />


        <FeatureCard
          icon={<Image src="/assets/feature-icons/payment-saving.png" alt="Automated Savings" width={50} height={50} />}
          title="Automated Savings"
          description="Round up purchases or set regular transfers into a savings account"
        />


        <FeatureCard
          icon={<Image src="/assets/feature-icons/ai-budgeting.png" alt="AI-Powered Budgeting" width={50} height={50} />}
          title="AI-Powered Budgeting"
          description="AI tools analyze spending patterns and provide personalized budgeting"
        />

        <FeatureCard
          icon={<Image src="/assets/feature-icons/credit-card.png" alt="Virtual Credit Cards" width={50} height={50} />}
          title="Virtual Credit Cards"
          description="Generate virtual cards instantly for online shopping"
        />
      </div>



    </section >
  )
}

export default Features;