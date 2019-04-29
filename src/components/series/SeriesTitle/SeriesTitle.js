import React from 'react'
import { Link } from 'gatsby'

import styles from './SeriesTitle.module.css'

const seriesTitle = ({ title, address }) => {
  return (
    <div className={styles.SeriesTitle}>
      <Link to={address}>{title}</Link>
    </div>
  )
}

export default seriesTitle
