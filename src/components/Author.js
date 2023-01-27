import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

const Author = authorData => {
  const authorSign = getImage(authorData.authorData.authorSign)
  const authorImage = getImage(authorData.authorData.authorImage)
  return (
    <section id="author" className="section-padding">
      <Container>
        <Row className="gy-5">
          <Col lg={6}>
            <div className="author-details">
              <h3>{authorData.authorData.authorName}</h3>
              <p>
                {authorData.authorData.authorDescription1}
              </p>
              <p>
                {authorData.authorData.authorDescription2}
              </p>
              <div className="author-sign">
                <GatsbyImage
                  image={authorSign}
                  alt={authorData.authorData.authorName}
                />
              </div>
              <div className="author-socials">
                <a href={authorData.authorData.authorFacebookLink} target="_blank" rel="noreferrer">
                  <FaFacebookSquare size={26} />
                </a>

                <a href={authorData.authorData.authorTwitterLink}target="_blank" rel="noreferrer">
                  <FaTwitterSquare size={26} />
                </a>

                <a href={authorData.authorData.authorLinkedinLink}target="_blank" rel="noreferrer">
                  <FaLinkedin size={26} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="author-image">
              <GatsbyImage
                image={authorImage}
                alt={authorData.authorData.authorName}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Author
