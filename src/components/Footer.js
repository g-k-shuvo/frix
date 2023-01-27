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
              <a href="https://www.facebook.com/shuvo.2k16" target="_blank" rel="noreferrer">
                <FaFacebookSquare size={30} />
              </a>
              <a href="https://www.twitter.com/g_k_shuvo" target="_blank" rel="noreferrer">
                <FaTwitterSquare size={30} />
              </a>
              <a href="https://www.linkedin.com/in/g-k-shuvo/" target="_blank" rel="noreferrer">
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
