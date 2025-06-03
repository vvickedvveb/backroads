import logo from "../images/logo.svg";
import { socialLinks } from "../data/data";
import PageLinkSec from "./PageLinksSec";
import SocialLink from "./SocialLink";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <PageLinkSec parentClass="nav-links" itemClass="nav-link" />

          <ul className="nav-icons">
            {socialLinks.map((socialLink) => {
              return (
                <SocialLink
                  key={socialLink.id}
                  {...socialLink}
                  itemClass="nav-icon"
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
