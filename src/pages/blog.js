import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogHeader from "../components/BlogHeader"
import Footer from "../components/Footer"
import "../styles/main.scss"

const blog = props => {
  const blogs = props.data.BlogQuery.nodes
  return (
    <>
      <BlogHeader />
      <section id="blog" className="section-padding">
        <Container>
          <div className="section-top">
            <h3 className="section-heading">From The Blog</h3>
            <p className="section-sub-heading">All Blog Posts</p>
            <div className="section-sep-line"></div>
          </div>
          <div className="blogs">
            <Row className="gy-5">
              {blogs.map(blog => (
                <Col lg={4} key={blog.id}>
                  <div className="blog">
                    <div className="blog-thumb-container">
                      <Link to={"/blog/" + blog.slug}>
                        <GatsbyImage
                          image={blog.featuredImage.gatsbyImageData}
                          alt={blog.blogTitle}
                          className="blog-thumb"
                        />
                      </Link>
                    </div>
                    <div className="blog-details">
                      <Link to={"/blog/" + blog.slug}>
                        <h3 className="blog-headline"> {blog.blogTitle}</h3>
                      </Link>
                      <span className="blog-info">
                        | <strong>{blog.date}</strong> | Posted By:{" "}
                        {blog.blogAuthor}
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    BlogQuery: allContentfulBlogPost(limit: 3, sort: {date: DESC}) {
        nodes {
          id
          featuredImage {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
          blogAuthor
          blogTitle
          date(formatString: "DD MMMM, YYYY")
          slug
        }
      }
  }
`

export default blog
