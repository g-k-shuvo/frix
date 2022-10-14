import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Checkout from "../components/Checkout"

const BuyNow = () => {
  return (
    <section id="buy-now" className="section-padding">
      <Container>
        <Row className="gy-5">
          <Col lg={7} md={6}>
            <div className="buy-image">
              <StaticImage
                src="../images/book.png"
                alt="Frix"
                className="navbar-logo"
              />
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} md={6}>
            <div className="buy-text">
              <h1>Build Your Successful Career</h1>
              <h3>ONLY $39.00</h3>
              <Checkout />
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit. Commodo
                ligula eget dolor aenean massa. Aenean commodo consectetuer
                adipiscing elit ligula eget massa dolor aenean.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BuyNow
