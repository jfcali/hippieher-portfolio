/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import FloatingButton from '../components/UI/FloatingButton/FloatingButton'
import './layout.css'

const Layout = ({ children }) => (
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
    render={data => (
      <>
        <FloatingButton title="HOME" address="/" position={1} />
        <FloatingButton title="INFO" address="/info" position={2} />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} DIANA FERNANDA VÉLEZ</footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
