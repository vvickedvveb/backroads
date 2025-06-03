import { socialLinks } from "../data/data";
import PageLinksSec from "./PageLinksSec";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinksSec parentClass="footer-links" itemClass="footer-link" />

        <ul className="footer-icons">
          {socialLinks.map((social) => {
            //const { id, href, icon } = social;
            return (
              <SocialLink key={social.id} {...social} itemClass="footer-icon" />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
