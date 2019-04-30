import React from 'react'
import { graphql } from 'gatsby'
import styles from './Series.module.css'

import SeriesSection from './SeriesSection/SeriesSection'
import SeriesTitle from './SeriesTitle/SeriesTitle'
import SeriesImage from './SeriesImage/SeriesImage'

const series = props => {
  console.log(props)
  return (
    <>
      <SeriesSection>
        <SeriesTitle title="TEXT LINK" />
        <SeriesImage src={props.images.data.imageOne.childImageSharp.fluid} />
      </SeriesSection>
      <SeriesSection>
        <SeriesImage src={props.images.data.imageOne.childImageSharp.fluid} />
        <SeriesTitle title="TEXT LINK 2" />
      </SeriesSection>
    </>
  )
}

export default series
