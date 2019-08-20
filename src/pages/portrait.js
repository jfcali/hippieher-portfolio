import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageLayout from '../components/imageLayout/imageLayout'

const portraitPage = props => {
  return (
    <Layout lightMode>
      <SEO title="Portrait" keywords={[`gatsby`, `application`, `react`]} />
      <ImageLayout images={props.data.portraits.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    portraits: allFile(filter: { relativeDirectory: { eq: "portraits" } }) {
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

export default portraitPage
