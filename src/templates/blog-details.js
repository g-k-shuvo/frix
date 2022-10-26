import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogHeader from "../components/BlogHeader"
import Footer from "../components/Footer"
import "../styles/main.scss"

const blogDetails = props => {
  return (
    <>
      <BlogHeader />
      <section id="blog-details" className="section-padding">
        <Container>
          <div className="bread-crumb">
            <h3>
              <Link to="/blog">Blog</Link>{" "}
              <span>
                / Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, assumenda quo nostrum consequatur ab minima? Sequi quam,
                magni rerum ea repellat assumenda nostrum! Voluptatum quam ipsum
                eligendi, eveniet natus repellat minus corrupti similique non
                mollitia dolor, aliquid, alias est quidem aspernatur
                reprehenderit nihil reiciendis iste ullam doloremque fuga?
                Assumenda, dolores maiores ullam reprehenderit distinctio
                facilis laudantium aliquid doloribus nesciunt cum praesentium
                vitae officiis minima libero consectetur accusantium odio
                voluptates hic, molestiae quia minus, autem neque? Tempore
                eveniet magni nulla repellat harum fugiat quam deleniti soluta,
                officiis libero debitis facilis minus minima sed nemo
                repudiandae animi reiciendis quo provident accusantium sint
                quaerat incidunt obcaecati. Laudantium, aliquam eveniet! Vitae
                facilis delectus quasi maxime eum, provident ducimus vero itaque
                officiis tempore ratione sint autem sit, corporis, tenetur quae
                possimus nobis alias nostrum dolores qui eveniet numquam
                consectetur! Consectetur veniam debitis rerum praesentium
                sapiente necessitatibus quod commodi, iusto atque sed mollitia,
                aliquam amet. Consequuntur eaque provident distinctio
                perferendis natus, autem illum, quidem odit blanditiis aliquid
                officiis dolorem corporis, sit culpa cupiditate error! Ab esse
                voluptatum fuga! Modi corrupti alias architecto odio est cum,
                sit animi ex repellendus iusto quo molestiae! Odit tenetur
                nesciunt eaque ut accusamus, reiciendis totam tempora! Sequi,
                recusandae! Tempore, quasi maiores?
              </span>
            </h3>
          </div>
          <h1>Blog Details</h1>
        </Container>
      </section>
      <Footer />
    </>
  )
}

// export const query = graphql`
//   query {
//     BlogQuery: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
//       nodes {
//         author
//         date(formatString: "DD MMMM, YYYY")
//         featuredImage {
//           gatsbyImageData(width: 500, placeholder: BLURRED)
//         }
//         slug
//         title
//         id
//       }
//     }
//   }
// `

export default blogDetails
