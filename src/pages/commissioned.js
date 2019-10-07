import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageLayout from '../components/imageLayout/imageLayout'

const commissionedPage = props => {
  return (
    <Layout lightMode>
      <SEO title="Commissioned" keywords={[`gatsby`, `application`, `react`]} />
      <ImageLayout images={props.data.commissioned.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    commissioned: allFile(
      filter: { relativeDirectory: { eq: "commissioned" } }
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default commissionedPage
