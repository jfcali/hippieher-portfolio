import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
import FloatingButton from '../components/UI/FloatingButton/FloatingButton'
import './layout.css'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <FloatingButton
          title="HOME"
          address="/"
          position={1}
          lightMode={props.lightMode}
        />
        <FloatingButton
          title="INFO"
          address="/info"
          position={2}
          lightMode={props.lightMode}
        />
        <main>{props.children}</main>
        <footer>© {new Date().getFullYear()} DIANA FERNANDA VÉLEZ</footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
