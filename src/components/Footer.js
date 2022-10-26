import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="footer-copyright">
              <p> &#169; {thisYear} All Right Reserved </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="footer-socials">
              <a href="#">
                <FaFacebookSquare size={30} />
              </a>
              <a href="#">
                <FaTwitterSquare size={30} />
              </a>
              <a href="#">
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
