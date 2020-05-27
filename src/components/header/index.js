import { Link } from "gatsby";
import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Logo from "../../assets/Home/logo.png";
import Twitter from "../../assets/Home/twitter.png";
import Facebook from "../../assets/Home/fb.png";
import Linkedin from "../../assets/Home/link.png";
import Toggler from "../../assets/Home/hbm.png";
import Close from "../../assets/Home/cross.png";
import "./styles.scss";
import CustomModal from "../../components/modal";
import ContactForm from "../../components/contactForm";
import Button from "../../components/button";

const navLinks = [
  {
    link: "userExperience",
    label: "user experience",
  },
  {
    link: "contentStrategy",
    label: "content strategy",
  },
  {
    link: "digitalMarketing",
    label: "digital marketing",
  },
  {
    link: "blog",
    label: "blog",
  },
];
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Navbar className="custom-nav" light expand="xl">
        <Container fluid className="nav-wrapper">
          <NavbarBrand href="/">
            <img className="brand-logo" src={Logo} alt="brand logo" />
          </NavbarBrand>
          {isOpen ? (
            <img src={Close} className="toggler" onClick={toggle} alt="close" />
          ) : (
            <img
              src={Toggler}
              className="toggler"
              onClick={toggle}
              alt="toggler"
            />
          )}
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {navLinks.map((i, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink>
                      <Link activeClassName="active" to={i.link}>
                        {i.label}
                      </Link>
                    </NavLink>
                  </NavItem>
                );
              })}
              {/* <NavItem className="social-icons">
                {[Twitter, Linkedin, Facebook].map((social, index) => (
                  <img key={index} src={social} alt={social} />
                ))}
              </NavItem> */}
              <Button
                onClick={() => setIsModalOpen(!isModalOpen)}
                text="Contact"
                className="contact-button"
              />
            </Nav>
          </Collapse>
        </Container>
        <CustomModal
          modalBody={<ContactForm />}
          modalToggle={() => setIsModalOpen(!isModalOpen)}
          isModalOpen={isModalOpen}
          // headerText="Contact"
        />
      </Navbar>
    </div>
  );
};
export default Header;
