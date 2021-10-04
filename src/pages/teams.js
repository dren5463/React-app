import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/teams.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>
                {product.title}
              </h3>
                <p>Phone: +12345678910</p>
                <p>Email: test@gmail.com</p>
                <p>Country: Kosovo </p>

              <Link to={`/teams/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
