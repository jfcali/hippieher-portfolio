import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styles from './FloatingButton.module.css'

const floatingButton = ({ title, address, position = 1, lightMode }) => {
  const [prevPath, setPrevPath] = useState('/')
  useEffect(() => {
    setPrevPath(window.location.pathname)
  }, [])
  const where =
    position === 1
      ? 'TopLeft'
      : position === 2
      ? 'TopRight'
      : position === 3
      ? 'BottomRight'
      : 'BottomLeft'

  return (
    <Link
      to={address}
      className={[styles.Link, styles[where]].join(' ')}
      style={{
        color: lightMode ? 'black' : null,
      }}
      state={{ prevPath }}
    >
      {title}
    </Link>
  )
}
export default floatingButton
