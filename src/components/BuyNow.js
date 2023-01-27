import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Checkout from "../components/Checkout"

const BuyNow = (bookData) => {
  const bookImage = getImage(bookData.bookData.bookImage)
  return (
    <section id="buy-now" className="section-padding">
      <Container>
        <Row className="gy-5">
          <Col lg={7} md={6}>
            <div className="buy-image">
            <GatsbyImage
                  image={bookImage}
                  alt={bookData.bookData.description}
                />

            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} md={6}>
            <div className="buy-text">
              <h1>{bookData.bookData.bookName}</h1>
              <h3>ONLY ${bookData.bookData.price}</h3>
              <Checkout />
              <p>
               {bookData.bookData.description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BuyNow
