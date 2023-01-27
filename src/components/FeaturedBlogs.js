import React from "react"
import { Link } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
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
                    <Link to={"/blog/" + featuredBlog.slug}>
                      <GatsbyImage
                        image={featuredBlog.featuredImage.gatsbyImageData}
                        alt={featuredBlog.blogTitle}
                        className="blog-thumb"
                      />
                    </Link>
                  </div>
                  <div className="blog-details">
                    <Link to={"/blog/" + featuredBlog.slug}>
                      <h3 className="blog-headline"> {featuredBlog.blogTitle}</h3>
                    </Link>
                    <span className="blog-info">
                      | <strong>{featuredBlog.date}</strong> | Posted By:{" "}
                      {featuredBlog.blogAuthor}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="all-posts-btn-container">
            <Link to="/blog" className="all-posts-btn frix-btn">
              View All Posts
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedBlogs
