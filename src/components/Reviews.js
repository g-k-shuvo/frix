import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

const Reviews = ({ testimonialsData }) => {
  return (
    <section id="reviews" className="section-padding">
      <Container>
        <div className="section-top">
          <h3 className="section-heading">Reviews</h3>
          <p className="section-sub-heading">Kind Words from Readers</p>
          <div className="section-sep-line"></div>
        </div>
        <div className="review-cards">
          <Row className="gy-5">
            {testimonialsData.nodes.map(testimonial => (
              <Col lg={3} md={6} key={testimonial.id}>
                <div className="review-card">
                  <div className="review-image-container">
                    <GatsbyImage
                      image={testimonial.feedbackAvatar.gatsbyImageData}
                      alt="Review"
                      className="review-image"
                    />
                  </div>
                  <p className="review-feedback">
                    {testimonial.feedbackContent}
                  </p>
                  <h4 className="review-author">{testimonial.feedbackAuthor}</h4>
                  <p className="review-company">{testimonial.feedbackCompany}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Reviews
