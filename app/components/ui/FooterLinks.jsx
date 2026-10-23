

const FooterLinks = ({ title, links }) => {
  return (
    <div className="footer-home-links">
      <h4>{title}</h4>
      <ul className="footer-home-links">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks;