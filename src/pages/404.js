import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FaBook, FaHome } from "react-icons/fa"
import BlogHeader from "../components/BlogHeader"
import Footer from "../components/Footer"
import "../styles/main.scss"

const NotFound = () => {
  return (
    <>
      <BlogHeader />
      <section id="not-found" className="section-padding">
        <Container>
          <div className="section-top">
            <h3 className="section-heading">Page Not Found!</h3>
            <p className="section-sub-heading">Looks like you are lost! </p>
            <div className="section-sep-line"></div>

            <div className="not-found-btns">
              <div className="return-home">
                <Link to="/" className="frix-btn return-home-btn">
                  <span className="icon">
                    <FaHome size={20} />
                  </span>
                  Go Home
                </Link>
              </div>
              <div className="return-home">
                <Link to="/blog" className="frix-btn return-home-btn">
                  <span className="icon">
                    <FaBook size={20} />
                  </span>
                  Read Blogs
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default NotFound
