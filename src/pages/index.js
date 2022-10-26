import React from "react"
import { graphql } from "gatsby"
import Author from "../components/Author"
import Banner from "../components/Banner"
import BuyNow from "../components/BuyNow"
import Contact from "../components/Contact"
import FeaturedBlogs from "../components/FeaturedBlogs"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Overview from "../components/Overview"
import Reviews from "../components/Reviews"
import "../styles/main.scss"

const HomePage = props => {
  const data = props.data
  return (
    <>
      <Navbar />
      <Banner bannerData={data.BannerQuery} />
      <Author authorData={data.AuthorQuery} />
      <Overview overviewData={data.OverviewQuery} />
      <BuyNow />
      <Reviews testimonialsData={data.TestimonialQuery} />
      <FeaturedBlogs featuredBlogsData={data.FeaturedBlogsQuery} />
      <Contact />
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    BannerQuery: contentfulBanner {
      description
    }

    AuthorQuery: contentfulAuthor {
      authorName
      authorDescription1 {
        authorDescription1
      }
      authorDescription2 {
        authorDescription2
      }
      authorSign {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      authorSocials
      authorImage {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }

    OverviewQuery: contentfulOverview {
      chapter1 {
        chapter1
      }
      chapter2 {
        chapter2
      }
      chapter3 {
        chapter3
      }
      chapter4 {
        chapter4
      }
      chapter5 {
        chapter5
      }
      chapter6 {
        chapter6
      }
      detailOverview {
        detailOverview
      }
    }

    TestimonialQuery: allContentfulTestimonials {
      nodes {
        id
        author
        avatar {
          gatsbyImageData(placeholder: TRACED_SVG, resizingBehavior: SCALE)
        }
        company
        feedback {
          feedback
        }
      }
    }

    FeaturedBlogsQuery: allContentfulBlogPost(
      limit: 3
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        author
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          gatsbyImageData(width: 500, placeholder: BLURRED)
        }
        slug
        title
        id
      }
    }
  }
`

export default HomePage
