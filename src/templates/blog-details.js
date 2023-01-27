import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContentfulRichText from "../components/contentful-rich-text"
import { Container, Row, Col } from "react-bootstrap"
import BlogHeader from "../components/BlogHeader"
import Footer from "../components/Footer"
import "../styles/main.scss"

const blogDetails = props => {
  const blogDetails = props.data
  return (
    <>
      <BlogHeader />
      <section id="blog-details" className="section-padding">
        <Container>
          <div className="bread-crumb">
            <h3>
              <Link to="/blog">Blog</Link>{" "}
              <span>/ {blogDetails.BlogQuery.blogTitle}</span>
            </h3>
          </div>
          <Row>
            <Col lg={10} className="m-auto">
              <div className="blog-content-container">
                <GatsbyImage
                  image={blogDetails.BlogQuery.featuredImage.gatsbyImageData}
                  alt={blogDetails.BlogQuery.blogTitle}
                  className="featured-image"
                />
                <div className="blog-content">
                  <div className="info">
                    <h5>
                      Posted By: {blogDetails.BlogQuery.blogAuthor} /{" "}
                      {blogDetails.BlogQuery.date}
                    </h5>
                  </div>
                  <h1>{blogDetails.BlogQuery.title}</h1>
                  <div className="raw-content">
                    <ContentfulRichText
                      richText={blogDetails.BlogQuery.blogContent}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ($slug: String) {
    BlogQuery: contentfulBlogPost(slug: { eq: $slug }) {
      blogAuthor
      date(formatString: "DD MMMM, YYYY")
      blogTitle
      blogContent {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, width: 1000)
          }
        }
      }
      slug
      featuredImage {
        gatsbyImageData(placeholder: BLURRED, width: 1000)
      }
    }
  }
`

export default blogDetails
