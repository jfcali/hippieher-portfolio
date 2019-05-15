import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Series from '../components/series/Series'

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Series images={props} />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "product.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "oldness.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "la-martina.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "diary.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
