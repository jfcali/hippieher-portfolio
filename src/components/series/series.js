import React from 'react'
import styles from './Series.module.css'

import SeriesSection from './SeriesSection/SeriesSection'
import SeriesTitle from './SeriesTitle/SeriesTitle'
import SeriesImage from './SeriesImage/SeriesImage'

const series = () => {
  return (
    <>
      <SeriesSection>
        <SeriesTitle title="TEXT LINK" />
        <SeriesImage />
      </SeriesSection>
      <SeriesSection>
        <SeriesImage />
        <SeriesTitle title="TEXT LINK 2" />
      </SeriesSection>
    </>
  )
}

export default series
