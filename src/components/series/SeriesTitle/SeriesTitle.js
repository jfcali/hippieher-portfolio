import React from 'react'
import { Link } from 'gatsby'

import styles from './SeriesTitle.module.css'

const seriesTitle = ({ title, address = '/', backgroundColor = "#c5b794" }) => {
  return (
    <Link className={styles.SeriesTitle} to={address} style={{backgroundColor}}>
      <div>
        {title}
      </div>
    </Link>
  )
}

export default seriesTitle
