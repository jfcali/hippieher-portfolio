import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageLayout from '../components/imageLayout/imageLayout'

const diaryPage = props => {
  return (
    <Layout lightMode>
      <SEO title="Diary" keywords={[`gatsby`, `application`, `react`]} />
      <ImageLayout images={props.data.diary.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    diary: allFile(filter: { relativeDirectory: { eq: "diary" } }) {
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

export default diaryPage
