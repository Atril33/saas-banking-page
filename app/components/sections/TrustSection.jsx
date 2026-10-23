
import Image from 'next/image';
import CTAButton from '../ui/CTAButton';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div>
        <Image src="/assets/ratings.png" alt="5 Stars Rating" width={100} height={20} /> 4.9/5 </div>
      <Image src="/assets/clients-images-frame.png" alt="Clients Pictures" width={200} height={40} />
      <p>Over 100K+ Entrepreneurs, and business choose us</p>
      <h2>Empowering Your Financial Freedom</h2>
      <p>Trust us to deliver cutting-edge innovation, transparency, and personalized service, all designed to help you achieve financial freedom</p>
      <CTAButton text="Get Started now" />
    </section>
  )
}

export default TrustSection;