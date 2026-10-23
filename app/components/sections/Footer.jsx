
import Image from 'next/image';
import FooterLinks from '../ui/FooterLinks';

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="footer-first">
          <Image src="/assets/logos/logo.png" alt="Euphoria Logo" width={100} height={100} />
          <p>Empowering Your Projects, Enhancing Your Success, Every Step of the Way.</p>

          <ul className="social-links">
            <li><Image src="/assets/facebook.png" alt="Facebook Icon" width={50} height={50} /></li>
            <li><Image src="/assets/linkedin.png" alt="LinkedIn Icon" width={50} height={50} /></li>
            <li><Image src="/assets/instagram.png" alt="Instagram Icon" width={50} height={50} /></li>
            <li><Image src="/assets/twitter.png" alt="Twitter Icon" width={50} height={50} /></li>
          </ul>
        </div>

        <FooterLinks
          title="Home"
          links={[
            "Product Features",
            "Benefits",
            "How To Use",
            "Key Features",
            "Pricing",
            "Testimonials",
            "FAQ’s"
          ]}
        />

        <FooterLinks
          title="App"
          links={[
            "Mobile App",
            "Desktop App",
            "How To Use"
          ]}
        />

        <FooterLinks
          title="All Pages"
          links={[
            "Home",
            "App",
            "Blog",
            "Blog Open",
            "Contact",
            "Privacy Policy",
            "404"
          ]}
        />

        <div className="download-apps">
          <h3>Download our App</h3>
          <div>
            <Image src="/assets/google-play.png" alt="Google Play Icon" width={20} height={20} />
            <p>Get it on</p>
            <h4>Google Play</h4>
          </div>


          <div>
            <Image src="/assets/apple.png" alt="Apple Store Icon" width={20} height={20} />
            <p>Download on the</p>
            <h4>App Store</h4>
          </div>

        </div>


      </div>
      <div className="bottom-footer">
        <p>© 2024 Euphoria. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer