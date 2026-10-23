
import TagBadge from '../ui/TagBadge';
import PricingCard from '../ui/PricingCard';

const Pricing = () => {
  return (
    <section className="pricing">
      <TagBadge text="Pricing Plan" />
      <h2 className="feature-title">Select a plan that will empower your business growth</h2>
      <p className="feature-description">Each package includes personalized consultation and revisions to guarantee your satisfaction.</p>

      <div className="pricing-section">
        <div className="pricing-slider">
          <div className="monthly-pricing">Monthly</div>
          <div className="yearly-pricing">Yearly</div>
        </div>
        <PricingCard
          title="Starter Plan"
          des="Perfect for larger organizations with advanced needs"
          pricing={`${0}`}
          metric="/ per month"
          options={[
            "Account Aggregation",
            "Expense Tracking",
            "Basic Analytics System",
            "Budgeting Tools",
            "24/7 Customer Support"
          ]}
        />

        <PricingCard
          title="Growth Plan"
          des="Ideal for growing startups and mid-sized companies"
          pricing={`${49}`}
          metric="/ per month"
          options={[
            "Everything in Starter Plan",
            "Advanced Budgeting Tools",
            "Customizable Dashboards",
            "Transaction Insights",
            "Enhanced Security"
          ]}
        />

        <PricingCard
          title="Business Plan"
          des="Perfect for larger organizations with advanced needs"
          pricing={`${99}`}
          metric="/ per month"
          options={[
            "Everything in Growth Plan",
            "Investment Tracking",
            "Integration Services",
            "24/7 VIP Support",
            "Premium Security"
          ]}
        />



      </div>

    </section>
  )
}

export default Pricing