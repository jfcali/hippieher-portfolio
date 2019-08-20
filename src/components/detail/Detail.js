import React, { useState } from 'react'
import styles from './Detail.module.css'
import Img from 'gatsby-image'

const Detail = props => {
  return (
    <div
      style={{ display: props.visible ? 'flex' : 'none' }}
      className={styles.Detail}
      onClick={() => props.hide()}
    >
      {props.image ? (
        <Img fluid={props.image} style={{ minWidth: '1000px' }} />
      ) : null}
    </div>
  )
}

export default Detail
