import React, { useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
    
      form.reset()
      alert("Your Email Was Sent! 😎")
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/6ceed759-ca92-4959-b030-a1946fe4886f",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <div id="contact" className="section-padding">
      <div className="section-top">
        <h3 className="section-heading">Contact</h3>
        <p className="section-sub-heading">Get In Touch</p>
        <div className="section-sep-line"></div>
      </div>
      <Container>
        <div className="address">
          <div className="address-icon">
            <FaMapMarkerAlt size={36} />
          </div>
          <h5 className="address-text">
            NEAR WESTFIELD, BUILDING #3817 <br />
            LONDON, UNITED KINGDOM
          </h5>
        </div>
        <div className="contact-container">
          <Row>
            <Col lg={4}>
              <div className="contact-text">
                <h3 className="heading">Speaking Engagements</h3>
                <p className="details">
                  To inquire about booking Sarah James for a speaking engagement
                  or any other information, Please contact: <br />
                  <strong> John Martin +443.516.4503 </strong>
                </p>
              </div>
            </Col>
            <Col lg={{ span: 6, offset: 2 }}>
              <div className="contact-form">
                <form onSubmit={handleOnSubmit}>
                  
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    required
                  />
                  <textarea
                    placeholder="Write your Message"
                    name="message"
                    required
                  />
                  <button className="frix-btn contact-btn" type="submit">
                    send message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Contact
