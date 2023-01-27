import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [active, setActive] = useState("default")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50)
    })
  }, [])

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={scrolled ? "scrolled-navbar" : "transprent-navbar"}
    >
      <Container>
        <Link to="/">
          <StaticImage
            src="../images/logo-dark.png"
            alt="Frix"
            className="navbar-logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            activeKey={active}
            onSelect={selectedKey => setActive(selectedKey)}
            className="ms-auto"
          >
            <Nav.Link eventKey="default" href="#banner">
              Home
            </Nav.Link>
            <Nav.Link eventKey="author" href="#author">
              Author
            </Nav.Link>
            <Nav.Link eventKey="overview" href="#overview">
              Overview
            </Nav.Link>
            <Nav.Link eventKey="buyNow" href="#buy-now">
              Buy Now
            </Nav.Link>
            <Nav.Link eventKey="reviews" href="#reviews">
              Reviews
            </Nav.Link>
            <Nav.Link eventKey="blog" href="#featured-blogs">
              Blog
            </Nav.Link>
            <Nav.Link eventKey="contact" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
