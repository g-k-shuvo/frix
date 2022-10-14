import React from "react"
import { Container } from "react-bootstrap"

const Banner = bannerData => {
  return (
    <section id="banner">
      <Container>
        <div className="banner-text">
          <h1>
            Build Your <span>Successful</span> Career
          </h1>
          <p>{bannerData.bannerData.description}</p>
          <a href="#buy-now" className="frix-btn">
            Buy Now
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Banner
