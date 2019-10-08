import React, { useState } from 'react'
import Img from 'gatsby-image'
import './imageLayout.css'
import Detail from '../detail/Detail'

const groupImages = (images, size = 6) => {
  const tempArray = []

  for (let index = 0; index < images.length; index += size) {
    tempArray.push(images.slice(index, index + size))
  }

  return tempArray
}

const imageLayout = props => {
  const [showDetail, setShowDetail] = useState(false)
  const [currentImage, setCurrentImage] = useState()
  const groupOfImages = groupImages(props.images)
  return (
    <div style={{ paddingBottom: '250px' }}>
      {groupOfImages.map((images, index) => {
        return (
          <div
            className="ImageLayout"
            style={{ height: `${images.length * 340}px` }}
            key={index}
          >
            {images.map((n, i) => {
              const classes = ['Thumbnail', `Image-${i % 10}`]
              return (
                <div
                  key={n.node.name}
                  onClick={() => {
                    setShowDetail(true)
                    setCurrentImage(n.node.childImageSharp.fluid)
                  }}
                >
                  <Img
                    key={`_${i}_${index}`}
                    fluid={n.node.childImageSharp.fluid}
                    className={classes.join(' ')}
                    // onLoad={console.log('loaded ', n.node)}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
      <Detail
        visible={showDetail}
        hide={() => setShowDetail(false)}
        image={currentImage}
      />
    </div>
  )
}

export default imageLayout
