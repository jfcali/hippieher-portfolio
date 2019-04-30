import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Series from '../components/Series/Series'

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Series images={props} />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "la-martina.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          sizes
          src
          srcSet
          srcWebp
          srcSetWebp
          aspectRatio
        }
      }
    }
  }
`

export default IndexPage
