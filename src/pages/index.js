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
      <BuyNow bookData={data.BookInfoQuery} />
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

    AuthorQuery:  contentfulAuthor {
      authorName
      authorImage {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      authorDescription1
      authorDescription2
      authorFacebookLink
      authorTwitterLink
      authorLinkedinLink
      authorSign {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }

    
    OverviewQuery: contentfulOverview {
      chapter1 
      chapter2
      chapter3
      chapter4
      chapter5
      chapter6
      briefOverview
    }

    BookInfoQuery: contentfulBookInfo {
      bookName
      price
      description
      bookImage {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }

    TestimonialQuery:  allContentfulTestimonial {
      nodes {
        id
        feedbackAuthor
        feedbackCompany
        feedbackContent
        feedbackAvatar {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }

    FeaturedBlogsQuery: allContentfulBlogPost(limit: 3, sort: {date: DESC}) {
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

export default HomePage
