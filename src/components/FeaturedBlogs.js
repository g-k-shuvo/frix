import React from "react"
import { Link } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

const FeaturedBlogs = ({ featuredBlogsData }) => {
  return (
    <section id="featured-blogs" className="section-padding">
      <Container>
        <div className="section-top">
          <h3 className="section-heading">From The Blog</h3>
          <p className="section-sub-heading">Featured Posts</p>
          <div className="section-sep-line"></div>
        </div>
        <div className="blogs">
          <Row className="gy-5">
            {featuredBlogsData.nodes.map(featuredBlog => (
              <Col lg={4} key={featuredBlog.id}>
                <div className="blog">
                  <div className="blog-thumb-container">
                    <Link to="/">
                      <GatsbyImage
                        image={featuredBlog.featuredImage.gatsbyImageData}
                        alt={featuredBlog.title}
                        className="blog-thumb"
                      />
                    </Link>
                  </div>
                  <div className="blog-details">
                    <Link to="#">
                      <h3 className="blog-headline"> {featuredBlog.title}</h3>
                    </Link>
                    <span className="blog-info">
                      | <strong>{featuredBlog.date}</strong> | Posted By:{" "}
                      {featuredBlog.author}
                    </span>
                    <p className="blog-text">{featuredBlog.excerpt}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="all-posts-btn-container">
            <Link to="/" className="all-posts-btn frix-btn">
              View All Posts
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedBlogs
