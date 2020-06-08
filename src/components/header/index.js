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
    externalLink: "https://medium.com/digital-realm",
    target: "_blank",
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
                      {i.link === "blog" ? (
                        <a href={i.externalLink} target={i.target}>
                          {i.link}
                        </a>
                      ) : (
                        <Link activeClassName="active" to={i.link}>
                          {i.label}
                        </Link>
                      )}
                    </NavLink>
                  </NavItem>
                );
              })}
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
        />
      </Navbar>
    </div>
  );
};
export default Header;
