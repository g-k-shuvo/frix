import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"

const BlogHeader = () => {
  return (
    <header className="blog-header">
      <Container>
        <Row>
          <Col>
            <div className="logo-container">
              <Link to="/">
                <StaticImage
                  src="../images/logo-dark.png"
                  alt="Frix"
                  className="navbar-logo"
                />
              </Link>
            </div>
          </Col>
          <Col>
            <div className="return-home">
              <Link to="/" className="frix-btn return-home-btn">
                <span className="icon">
                  <FaHome size={20} />
                </span>
                Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default BlogHeader
