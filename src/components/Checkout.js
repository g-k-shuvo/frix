import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = {
  border: "1px solid #000",
  color: "#fff",
  backgroundColor: "#000",
  padding: "8px 20px 8px",
  width: "auto",
  display: "inline-block",
  textTransform: "uppercase",
  fontSize: "13px",
  cursor: "pointer",
  letterSpacing: "2px",
  transition: "0.4s ease-in-out",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LpkpWC4HsoTkYgs0TpSMLY38qzH4Bi793ZZ7j3r9J6eW7slPwf219tAPnmVms91qOsxIREEx36oZy7QUPk5y6bv00Uihle1he"
    )
  }
  return stripePromise
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1Lq7qTC4HsoTkYgsIQsP2PeO", quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/#buy-now`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Buy Now
    </button>
  )
}

export default Checkout
