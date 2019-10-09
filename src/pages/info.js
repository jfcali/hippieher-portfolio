import React from 'react'
import InfoLayout from '../components/info/InfoLayout'

const infoPage = props => {
  return (
    <InfoLayout
      backTo={props.location.state ? props.location.state.prevPath || '/' : '/'}
    />
  )
}

export default infoPage
