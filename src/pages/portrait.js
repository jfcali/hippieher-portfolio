import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const portraitPage = props => {
  return (
    <div>
      {props.data.allFile.edges.map((n, i) => {
        console.log(n)
        return (
          <Img
            key={i}
            fixed={n.node.childImageSharp.fixed}
            style={{ backgroundColor: 'black' }}
            onLoad={console.log('loaded ', n.node)}
          />
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 125, height: 300) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`

export default portraitPage
