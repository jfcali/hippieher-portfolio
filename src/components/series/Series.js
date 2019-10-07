import React from 'react'
// import { graphql } from 'gatsby'
// import styles from './Series.module.css'

import SeriesSection from './SeriesSection/SeriesSection'
import SeriesTitle from './SeriesTitle/SeriesTitle'
import SeriesImage from './SeriesImage/SeriesImage'

const series = props => {
  return (
    <>
      <SeriesSection>
        <SeriesTitle
          title="COMMISSIONED"
          backgroundColor="#b06844"
          address="/commissioned"
        />
        <SeriesImage src={props.images.data.imageOne.childImageSharp.fluid} />
      </SeriesSection>
      <SeriesSection>
        <SeriesImage src={props.images.data.imageTwo.childImageSharp.fluid} />
        <SeriesTitle
          title="PORTRAIT"
          address="/portrait"
          backgroundColor="#432943"
        />
      </SeriesSection>
      <SeriesSection>
        <SeriesTitle title="DIARY" backgroundColor="#212520" address="/diary" />
        <SeriesImage src={props.images.data.imageThree.childImageSharp.fluid} />
      </SeriesSection>
      <SeriesSection>
        <SeriesImage src={props.images.data.imageFour.childImageSharp.fluid} />
        <SeriesTitle
          title="PLACES"
          backgroundColor="#395974"
          address="/places"
        />
      </SeriesSection>
      <SeriesSection>
        <SeriesTitle
          title="PERSONAL PROJECTS"
          backgroundColor="#ba6243"
          address="/personal"
        />
        <SeriesImage src={props.images.data.imageFive.childImageSharp.fluid} />
      </SeriesSection>
    </>
  )
}

export default series
