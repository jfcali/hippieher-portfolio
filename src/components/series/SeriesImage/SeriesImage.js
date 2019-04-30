import React from 'react'
import Img from 'gatsby-image'

import styles from './SeriesImage.module.css'

const seriesImage = props => (
  <div className={styles.SeriesImage}>
    <Img fluid={props.src} objectFit="cover" objectPosition="50% 50%" alt="" />
  </div>
)

export default seriesImage
