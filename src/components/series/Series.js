import React from 'react'
// import { graphql } from 'gatsby'
// import styles from './Series.module.css'

import SeriesSection from './SeriesSection/SeriesSection'
import SeriesTitle from './SeriesTitle/SeriesTitle'
import SeriesImage from './SeriesImage/SeriesImage'

const series = props => {
  console.log(props)
  return (
    <>
      <SeriesSection>
        <SeriesTitle title="PRODUCT" backgroundColor="#b06844" />
        <SeriesImage src={props.images.data.imageOne.childImageSharp.fluid} />
      </SeriesSection>
      <SeriesSection>
        <SeriesImage src={props.images.data.imageThree.childImageSharp.fluid} />
        <SeriesTitle title="LA MARTINA" />
      </SeriesSection>
      <SeriesSection>
        <SeriesTitle title="OLD PEOPLE" backgroundColor="#212520" />
        <SeriesImage src={props.images.data.imageTwo.childImageSharp.fluid} />
      </SeriesSection>
      <SeriesSection>
        <SeriesImage src={props.images.data.imageFour.childImageSharp.fluid} />
        <SeriesTitle title="DIARY" backgroundColor="#395974" />
      </SeriesSection>
      <SeriesSection>
        <SeriesTitle title="PORTRAIT" backgroundColor="#ba6243" />
        <SeriesImage src={props.images.data.imageFive.childImageSharp.fluid} />
      </SeriesSection>
    </>
  )
}

export default series
