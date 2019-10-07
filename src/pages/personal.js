import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageLayout from '../components/imageLayout/imageLayout'

const personalPage = props => {
  return (
    <Layout lightMode>
      <SEO title="Personal" keywords={[`gatsby`, `application`, `react`]} />
      <ImageLayout images={props.data.personal.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    personal: allFile(filter: { relativeDirectory: { eq: "personal" } }) {
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

export default personalPage
