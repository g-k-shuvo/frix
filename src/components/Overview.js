import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import {
  IoIosLaptop,
  IoMdHeartEmpty,
  IoMdSunny,
  IoIosTabletPortrait,
  IoIosTrendingUp,
  IoIosColorWand,
} from "react-icons/io"

const Overview = overviewData => {
 
  return (
    <section id="overview" className="section-padding">
      <Container>
        <div className="section-top">
          <h3 className="section-heading">Overview</h3>
          <p className="section-sub-heading">Inside The Book</p>
          <div className="section-sep-line"></div>
        </div>
        <div className="section-details">
          <p>{overviewData.overviewData.briefOverview}</p>
        </div>
        <div className="overview-cards">
          <Row className="gy-5">
            <Col lg={4} md={6} sm={12}>
              <div className="overview-card">
                <div className="card-icon">
                  <IoIosLaptop size={50} />
                </div>

                <h4 className="card-heading">Chapter 1</h4>

                <p className="card-details">
                  {overviewData.overviewData.chapter1}
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="overview-card">
                <div className="card-icon">
                  <IoMdHeartEmpty size={50} />
                </div>

                <h4 className="card-heading">Chapter 2</h4>

                <p className="card-details">
                  {overviewData.overviewData.chapter2}
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="overview-card">
                <div className="card-icon">
                  <IoMdSunny size={50} />
                </div>
                <h4 className="card-heading">Chapter 3</h4>
                <p className="card-details">
                  {overviewData.overviewData.chapter3}
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="overview-card">
                <div className="card-icon">
                  <IoIosTabletPortrait size={50} />
                </div>
                <h4 className="card-heading">Chapter 4</h4>
                <p className="card-details">
                  {overviewData.overviewData.chapter4}
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="overview-card">
                <div className="card-icon">
                  <IoIosTrendingUp size={50} />
                </div>
                <h4 className="card-heading">Chapter 5</h4>
                <p className="card-details">
                  {overviewData.overviewData.chapter5}
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="overview-card">
                <div className="card-icon">
                  <IoIosColorWand size={50} />
                </div>
                <h4 className="card-heading">Chapter 6</h4>
                <p className="card-details">
                  {overviewData.overviewData.chapter6}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Overview
