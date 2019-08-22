import React from 'react'
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
        <div style={{ width: '100%' }}>
          <Img
            fluid={{ ...props.image }}
            style={{ margin: '1rem', maxHeight: 'calc(100vh - 4rem)' }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Detail
