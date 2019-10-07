import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageLayout from '../components/imageLayout/imageLayout'

const placesPage = props => {
  return (
    <Layout lightMode>
      <SEO title="Places" keywords={[`gatsby`, `application`, `react`]} />
      <ImageLayout images={props.data.places.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    places: allFile(filter: { relativeDirectory: { eq: "places" } }) {
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

export default placesPage
